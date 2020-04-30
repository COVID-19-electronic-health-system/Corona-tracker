import json

json_file = open('Dutch_(Netherlands)_-_Master_Sheet_Display_Text_-_Dutch_(Netherlands).json',) 
  
data = json.load(json_file) 

translation = {}
another_dict = {}
for k, v in data.items():
    translation = {}
    translation[v['parentKey']] = {v['fieldKey']: v['value']}
    another_dict.update(translation)
    print(another_dict)


print(another_dict)

json_file.close() 
