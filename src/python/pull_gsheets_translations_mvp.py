#####################
# PULLING CORONARTACKER CONTENT TRANSLATIONS FROM GOOGLE SHEETS TO GITHUB REPOSITORY
#####################


#####################
# AUTHORS
#####################
# @KristianR
# @NickG


#####################
# PACKAGES
#####################
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

#####################
# CONSTANTS
#####################
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

def depunctuate(text):
	""" Removes punctuation from text.

	Arguments:
		text {[string]} -- [any string]

	Returns:
		[string] -- [string with punctuation removed]
	"""
	chars = punctuation
	for c in chars:
		text = text.replace(c, "")
	return text

def convert_to_camelCase(value):
	""" Converts a string to camelCase and removes punctuation.

	Arguments:
		value {[string]} -- [string from the 'value' column in language_df]

	Returns:
		[string] -- [returns a string with no punctuation, in camelCase format.]
	"""
	# if value is a string with more than one word
	if len(value.split()) > 1:
		#converts value to camelCase
		camelCase = value.split()[0].lower() + " ".join(value.split()[1:]).title().replace(" ","")
		#removes punctuation
		return camelCase.translate(str.maketrans('', '', punctuation))
	else:
		return value.lower().translate(str.maketrans('', '', punctuation))

def education_value_cleaner(language_df):
	""" Converts the long text in the Education 'value' column to shorter text to be used as JSON keys.

	Arguments:
		language_df {[Series]} -- [A pandas series containing the 'value' column from the 'Education' sheet ]

	Returns:
		[Series] -- [A pandas Series with shortened text and no punctuation.]
	"""
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
	""" Converts the long text found within the 'Survey' sheets to shorter text to be used as JSON keys.

	Arguments:
		language_df {[DataFrame]} -- [A pandas DataFrame containing the information from the 'Survey' sheet.]

	Returns:
		[DataFrame] -- [Returns a new DataFrame with shortended text and no punctuation.]
	"""
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
		arr = row[vPA_col].split(';')
		tarr = row[tVPA_col].split(';')
		if len(arr)==len(tarr) and len(arr)>3:
			for j,_ in enumerate(arr):
				row_new = row.copy()
				row_new[v_col] = arr[j].replace('\n','')
				row_new[v_col] = convert_to_camelCase(row_new[v_col]).replace(" ","")
				#.replace(' ','').translate(str.maketrans('', '', punctuation))
				row_new[tV_col] = tarr[j].replace('\n','')
				#.replace(' ','').translate(str.maketrans('', '', punctuation))
				rows_added.append(row_new)
	return DataFrame(rows_added,columns=language_df.columns)

def convert_worksheet_to_df(wk):
	"""Converts current worksheet into a pandas dataframe.

	Arguments:
		wk {[worksheet object]} -- [Current language worksheet being iterated over.]

	Returns:
		[DataFrame] -- [A pandas dataframe containing the information from the current worksheet with a cleaned 'parentKey' column.]
	"""
	language_lists = wk.get_all_values()
	language_df = DataFrame(language_lists[1:],columns=language_lists[0])
	language_df = language_df[language_df['parentKey']!='']
	return language_df

def clean_dataframe_column_values_to_short_JSON_keys(wk,df):
	""" Cleans the current language dataframe columns into short JSON keys, depending on the type of worksheet.

	Arguments:
		wk {[worksheet object]} -- [Current worksheet being iterated over.]
		df {[DataFrame]} -- [The current language dataframe.]

	Returns:
		[DataFrame] -- [A cleaned dataframe with the necessary columns for the JSON key:value pairs.]
	"""
	if 'Education' in wk.title:
		df.value = education_value_cleaner(df)
	elif 'Survey' in wk.title:
		osLanguage_df = df
		df = survey_value_cleaner(df)
	else:
		df['value'] = df['value'].apply(convert_to_camelCase)
	
	return df[['parentKey','fieldKey','childKey','value','translatedValue']]

def save_to_JSON(out_dir,locale,working_dict):
	""" Converts working_dict into JSON and saves it into /out_dir/locale/.

	Arguments:
		out_dir {[string]} -- [Path to save all translations]
		locale {[string]} -- [Two letter abbreviation of the language.]
		working_dict {[dict]} -- [The language dataframe converted to the following format:
				{
					"parentKey":{
						"childKey":{
							'fieldKey':{'value':'translatedValue','array':['translatedValue']},
						}
					},
				}
			]
	"""
	if not path.exists(out_dir+locale):
		mkdir(out_dir+locale)
	with open(out_dir+locale+'/translation.json', 'w') as f:
		dump(working_dict, f) 

def connect_to_gsheets_API(credentials_path,scope):
	""" Connects to google sheets API using a credentials JSON.

	Arguments:
		credentials_path {[string]} -- [Path to your credentials.json file for the google sheets API]
		scope {[list]} -- [List of strings to determine the data you access from google sheets API]

	Returns:
		[class] -- [client_class instance that allows an authorized user to access google sheets]
	"""
	credentials = Credentials.from_service_account_file(credentials_path, scopes=scope)
	return authorize(credentials)

def list_all_spreadsheets_name(gc):
	""" Creates a list of all the spreadsheet found in the authorized google account.

	Arguments:
		gc {[class]} -- [Authorized client_class instance]

	Returns:
		[list] -- [Names of all spreadsheets found in the Translations folder in google drive.]
	"""
	list_all_spreadsheets = gc.list_spreadsheet_files()
	return [x['name'] for x in list_all_spreadsheets]

def filter_old_translation_sheets(spreadsheet_names,current_translation_regex,old_translation_regex,languages_to_translate):
	""" Removes the old translation sheets from the data model.

	Arguments:
		spreadsheet_names {[list]} -- [List of the spreadsheet names found in the Translation folder.]
		current_translation_regex {[string]} -- [String to filter out the sheets to be converted to JSON.]
		old_translation_regex {[string]} -- [String to filter out the translation sheets not used in data model.]
		languages_to_translate {[list]} -- [List of lanaguages to translate.]

	Returns:
		[list] -- [list of spreadsheets to use for the data model.]
	"""
	translation_sheet_names = [ x for x in spreadsheet_names if (current_translation_regex in x) & (old_translation_regex not in x)]
	return [x for x in translation_sheet_names for y in languages_to_translate if y in x]


# Connect to Google Sheets API #
# follow https://medium.com/@CROSP/manage-google-spreadsheets-with-python-and-gspread-6530cc9f15d1
# Create credentials and dump into referenced file
# Google sheets authorization

gc = connect_to_gsheets_API(CREDENTIALS_PATH,scope)

# Get names of spreadsheets 
spreadsheet_names = list_all_spreadsheets_name(gc)

# Get names of translations
selected_translation_sheet_names = filter_old_translation_sheets(spreadsheet_names,TRANSLATION_SHEETS_REGEX,TRANSLATION_SHEETS_REGEX_OLD,LANGUAGES_TO_PULL)

translation_sheets = {}
for name in selected_translation_sheet_names:
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


for language in languages:
	locale_key = [x for x in LANGUAGE_LETTERS_DICT.keys() if x in language][0]
	locale = LANGUAGE_LETTERS_DICT[locale_key]
	language_wks = translation_sheets[language]
	wkDict = {}

	for wk in language_wks:
		if "Website" in wk.title:
			# don't include in the data model
			continue

		else:
			wk_name = '_'.join(wk.title.split(' ')).replace('/','_')
			language_df = convert_worksheet_to_df(wk)

			#clean up column names
			language_df.columns = [x.replace(' ','') for x in language_df.columns]
			
			cleaned_language_df = clean_dataframe_column_values_to_short_JSON_keys(wk,language_df)

			####################################
			## CONVERT LANGUAGE DF TO DICTIONARY
			####################################
			parentKeyDict = {}
			for parentKey, pgrp in cleaned_language_df.groupby(['parentKey']):
				childKeyDict ={}
				for childKey,cgrp in pgrp.groupby(['childKey']):
					fieldKeyDict = {}
					for fieldKey,fgrp in cgrp.groupby(['fieldKey']):
						fgrp_sub = fgrp.filter(regex='[Vv]alue')
						valueDict = {"array":[]}
						for value, translatedValue in fgrp_sub.values:
							valueDict[value]=translatedValue.lstrip().rstrip()
							valueDict["array"].append(valueDict[value])
						fieldKeyDict[fieldKey] = valueDict
					childKeyDict[childKey] = fieldKeyDict
				parentKeyDict[parentKey] =  childKeyDict
			wkDict.update(parentKeyDict)

		save_to_JSON(OUT_DIR,locale,wkDict)