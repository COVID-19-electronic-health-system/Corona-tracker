##########
#
# PURPOSE:
# Pull content in CoronaTracker Google Sheets and dump into json files
#
##########

# Load Libraries #

import json
import gspread
from google.oauth2.service_account import Credentials
import pandas as pd

# Connect to Google Sheets API #
# follow https://medium.com/@CROSP/manage-google-spreadsheets-with-python-and-gspread-6530cc9f15d1
# Create credentials and dump into referenced file

scope = ['https://spreadsheets.google.com/feeds',
         'https://www.googleapis.com/auth/drive']

credentials = Credentials.from_service_account_file('credentials.json', scopes=scope)

gc = gspread.authorize(credentials)

# Init sheet names and output dir #

data_model_sheet_name = "Data Model"
education_sheet_name="Education"
health_sheet_name = "Health"
translation_sheets_regex = " - Master Sheet"
out_dir = "../../docs/content/"

# Connect to Sheets #

data_model_sheet = gc.open(data_model_sheet_name).sheet1
education_sheet = gc.open(education_sheet_name).sheet1
health_sheet = gc.open(health_sheet_name).sheet1

list_all_spreadsheets = gc.list_spreadsheet_files()
list_all_spreadsheets_names = [x['name'] for x in list_all_spreadsheets]
translation_sheet_names = [x for x in list_all_spreadsheets_names if translation_sheets_regex in x]
translation_sheets = {}

for name in translation_sheet_names:
    language = '_'.join(name.split(' ')).replace('/','_')
    translation_sheets[language] = gc.open(name).worksheets()

    
languages = [x for x in translation_sheets.keys()]
languages.sort()

# Data Model, Education, Health - Retrieve Sheet Content, convert to dataframe, convert to json, and output #

data_model_lists = data_model_sheet.get_all_values()
education_lists = education_sheet.get_all_values()
health_lists = health_sheet.get_all_values()

data_model_df = pd.DataFrame(data_model_lists[1:],columns=data_model_lists[0])
education_df = pd.DataFrame(education_lists[1:],columns=education_lists[0])
health_df = pd.DataFrame(health_lists[1:],columns=health_lists[0])

data_model_df.to_json(out_dir+'data_model.json',orient='index')
education_df.to_json(out_dir+'education.json',orient='index')
health_df.to_json(out_dir+'health.json',orient='index')

# Translations - Retrieve Sheet Content, convert to dataframe, convert to json, and output #

for language in languages:
    language_wks = translation_sheets[language]
    for wk in language_wks:
        wk_name = '_'.join(wk.title.split(' ')).replace('/','_')
        language_lists = wk.get_all_values()
        language_df = pd.DataFrame(language_lists[1:],columns=language_lists[0])
        language_df.to_json(out_dir+language+'_'+wk_name+'.json',orient='index')