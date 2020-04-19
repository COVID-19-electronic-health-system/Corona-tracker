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

credentials = Credentials.from_service_account_file('../../.my.goauth', scopes=scope)

gc = gspread.authorize(credentials)

# Init sheet names and output dir #

data_model_sheet_name = "Data Model"
education_sheet_name="Education"
health_sheet_name = "Health"
out_dir = "../../docs/content/"

# Connect to Sheet #

data_model_sheet = gc.open(data_model_sheet_name).sheet1
education_sheet = gc.open(education_sheet_name).sheet1
health_sheet = gc.open(health_sheet_name).sheet1

# Retrieve Sheet Content #

data_model_lists = data_model_sheet.get_all_values()
education_lists = education_sheet.get_all_values()
health_lists = health_sheet.get_all_values()

# Format Sheet Content as DataFrame #

data_model_df = pd.DataFrame(data_model_lists[1:],columns=data_model_lists[0])
education_df = pd.DataFrame(education_lists[1:],columns=education_lists[0])
health_df = pd.DataFrame(health_lists[1:],columns=health_lists[0])

# Format Sheet Content to Json and Output #

data_model_df.to_json(out_dir+'data_model.json',orient='index')
education_df.to_json(out_dir+'education.json',orient='index')
health_df.to_json(out_dir+'health.json',orient='index')


