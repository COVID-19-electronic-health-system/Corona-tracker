import json
import gspread
from google.oauth2.service_account import Credentials
import pandas as pd
import os
import string

# Connect to Google Sheets API #
# follow https://medium.com/@CROSP/manage-google-spreadsheets-with-python-and-gspread-6530cc9f15d1
# Create credentials and dump into referenced file

# Initialize contstants
scope = ['https://spreadsheets.google.com/feeds',
'https://www.googleapis.com/auth/drive']

CREDENTIALS_PATH = '../../.my.goauth'
TRANSLATION_SHEETS_REGEX = ' - Master Sheet'
TRANSLATION_SHEETS_REGEX_OLD = "(OLD)"
OUT_DIR = '../../client/public/locales/'
#OUT_DIR = 'translations/'
LANGUAGES_TO_PULL = ['English','Dutch (Netherlands)','Spanish','Italian','French','Russian']
LANGUAGE_LETTERS_DICT = {
	'English':'en',
	'Dutch':'nl',
	'Spanish':'es',
	'Italian':'it',
	'French':'fr',
	'Russian':'ru'
}

# Google sheets authorization

credentials = Credentials.from_service_account_file(CREDENTIALS_PATH, scopes=scope)
gc = gspread.authorize(credentials)


# Get names of spreadsheets 
list_all_spreadsheets = gc.list_spreadsheet_files()
list_all_spreadsheets_name = [x['name'] for x in list_all_spreadsheets]

# Get names of translations
translation_sheet_names = [ x for x in list_all_spreadsheets_name if (TRANSLATION_SHEETS_REGEX in x) & (TRANSLATION_SHEETS_REGEX_OLD not in x)]
translation_sheet_names_select = [ x for x in translation_sheet_names for y in LANGUAGES_TO_PULL if y in x]
translation_sheets = {}

for name in translation_sheet_names_select:
	language = '_'.join(name.split(' ')).replace('/','_')
	translation_sheets[language] = gc.open(name).worksheets()

languages = [x for x in translation_sheets.keys()]
languages.sort()


"""
json structure
{
	"parentKey":{
		"childKey":{
			'fieldKey':{'value':'translatedValue','array':['translatedValue']},
		}
	},
}
"""

def convert_to_camelCase(value):
	#converts value to camelCase
	camelCase = value.split()[0].lower() + " ".join(value.split()[1:]).title().replace(" ","")
	text_tokens = word_tokenize(text)
	#removes punctuation
	return camelCase.translate(str.maketrans('', '', string.punctuation))

import nltk
nltk.download('punkt')
nltk.download('stopwords')
from nltk.tokenize import word_tokenize
nltk.download('averaged_perceptron_tagger')

def depunctuate(text):
	chars = string.punctuation
	for c in chars:
		text = text.replace(c, "")
	return text

def education_value_cleaner(language_df):
	lst = [word_tokenize(x) for x in language_df.value.tolist()]
	#http://www.nltk.org/book_1ed/ch05.html
	pos_tagged = [nltk.pos_tag(x) for x in lst]
	lst_new=[]
	for pt in pos_tagged:
		nouns = [depunctuate(x[0]) for x in pt if "NN" in x[1]]
		verbs = [depunctuate(x[0]) for x in pt if 'VB' in x[1]]
		if len(verbs)==0 and len(nouns)==2:
			lst_new.append(nouns[0].lower() + nouns[1].title())
		elif len(verbs)==1 and len(nouns)==1:
			lst_new.append(nouns[0].lower() + verbs[0].title())
		else:
			lst_new.append(nouns[0].lower() + nouns[1].title() + verbs[0].title())
	return pd.Series(lst_new,index=language_df.index)

for language in languages:
	locale_key = [x for x in LANGUAGE_LETTERS_DICT.keys() if x in language][0]
	locale = LANGUAGE_LETTERS_DICT[locale_key]
	language_wks = translation_sheets[language]
	wkDict = {}
	for wk in language_wks:
		wk_name = '_'.join(wk.title.split(' ')).replace('/','_')
		language_lists = wk.get_all_values()
		language_df = pd.DataFrame(language_lists[1:],columns=language_lists[0])
		language_df = language_df[language_df['parentKey']!='']
		# return a df with only the parentKey,fieldKey, childKey value, and translatedValue columns
		language_df = language_df[['parentKey','fieldKey','childKey','value','translatedValue']]
		# change value column to camelCase
		if 'Education' in wk.title:
			eduLanguage = language_df.copy()
			language_df.value = education_value_cleaner(language_df)
		else:
			language_df['value'] = language_df['value'].apply(convert_to_camelCase)
		parentKeyDict = {}
		for parentKey, pgrp in language_df.groupby(['parentKey']):
			childKeyDict ={}
			for childKey,cgrp in pgrp.groupby(['childKey']):
				fieldKeyDict = {}
				for fieldKey,fgrp in cgrp.groupby(['fieldKey']):
					fgrp_sub = fgrp.filter(regex='[Vv]alue')
					valueDict = {"array":[]}
					for value, translatedValue in fgrp_sub.values:
						valueDict[value]=translatedValue
						valueDict["array"].append(translatedValue)
					fieldKeyDict[fieldKey] = valueDict
				childKeyDict[childKey] = fieldKeyDict
			parentKeyDict[parentKey] =  childKeyDict
		wkDict.update(parentKeyDict)
	if not os.path.exists(OUT_DIR+locale):
		os.mkdir(OUT_DIR+locale)
	with open(OUT_DIR+locale+'/translation.json', 'w') as f:
		json.dump(wkDict, f) 