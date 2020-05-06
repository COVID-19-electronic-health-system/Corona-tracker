#https://docs.python.org/3/tutorial/modules.html
from json import dump
from gspread import authorize
from google.oauth2.service_account import Credentials
from pandas import Series, DataFrame
from os import path, mkdir
from string import punctuation

from nltk import pos_tag, download
from nltk.tokenize import word_tokenize
download('punkt')
download('stopwords')
download('averaged_perceptron_tagger')

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
gc = authorize(credentials)


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
	#removes punctuation
	return camelCase.translate(str.maketrans('', '', punctuation))

def depunctuate(text):
	chars = punctuation
	for c in chars:
		text = text.replace(c, "")
	return text

def education_value_cleaner(language_df):
	lst = [word_tokenize(x) for x in language_df.value.tolist()]
	#http://www.nltk.org/book_1ed/ch05.html
	pos_tagged = [pos_tag(x) for x in lst]
	lst_new=[]
	for pt in pos_tagged:
		#choose nouns in sentence
		nouns = [depunctuate(x[0]) for x in pt if "NN" in x[1]]
		#choose verbs in setence
		verbs = [depunctuate(x[0]) for x in pt if 'VB' in x[1]]
		#make fieldKey and add to new list of fieldKeys
		if len(verbs)==0 and len(nouns)==2:
			lst_new.append(nouns[0].lower() + nouns[1].title())
		elif len(verbs)==1 and len(nouns)==1:
			lst_new.append(nouns[0].lower() + verbs[0].title())
		else:
			lst_new.append(nouns[0].lower() + nouns[1].title() + verbs[0].title())
	return Series(lst_new,index=language_df.index)

def survey_value_cleaner(language_df):
	vPA_col = [i for i,x in enumerate(language_df.columns) if x=='valuePossibleAnswers'][0]
	tVPA_col = [i for i,x in enumerate(language_df.columns) if x=='translatedValuePossibleAnswers'][0]
	v_col = [i for i,x in enumerate(language_df.columns) if x=='value'][0]
	tV_col = [i for i,x in enumerate(language_df.columns) if x=='translatedValue'][0]
	rows = language_df.values.tolist()
	rows_added = []
	for i,row in enumerate(rows):
		orig_row = row.copy()
		orig_row[v_col] = convert_to_camelCase(orig_row[v_col])
		rows_added.append(orig_row)
		arr = row[vPA_col].split('; ')
		tarr = row[tVPA_col].split('; ')
		if len(arr)==len(tarr) and len(arr)>3:
			for j,_ in enumerate(arr):
				row_new = row.copy()
				row_new[v_col] = arr[j].replace('\n','').replace(' ','').lower().translate(str.maketrans('', '', punctuation))
				row_new[tV_col] = tarr[j].replace('\n','').replace(' ','').lower().translate(str.maketrans('', '', punctuation))
				rows_added.append(row_new)
	return DataFrame(rows_added,columns=language_df.columns)

for language in languages:
	locale_key = [x for x in LANGUAGE_LETTERS_DICT.keys() if x in language][0]
	locale = LANGUAGE_LETTERS_DICT[locale_key]
	language_wks = translation_sheets[language]
	wkDict = {}
	for wk in language_wks:
		wk_name = '_'.join(wk.title.split(' ')).replace('/','_')
		language_lists = wk.get_all_values()
		language_df = DataFrame(language_lists[1:],columns=language_lists[0])
		language_df = language_df[language_df['parentKey']!='']
		#clean up column names
		language_df.columns = [x.replace(' ','') for x in language_df.columns]
		# change value column to camelCase
		# clean fieldKeys for the Education sheets
		if 'Education' in wk.title:
			language_df.value = education_value_cleaner(language_df)
		elif 'Survey' in wk.title:
			osLanguage_df = language_df
			language_df = survey_value_cleaner(language_df)
		else:
			language_df['value'] = language_df['value'].apply(convert_to_camelCase)
		language_df = language_df[['parentKey','fieldKey','childKey','value','translatedValue']]
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
	if not path.exists(OUT_DIR+locale):
		mkdir(OUT_DIR+locale)
	with open(OUT_DIR+locale+'/translation.json', 'w') as f:
		dump(wkDict, f) 