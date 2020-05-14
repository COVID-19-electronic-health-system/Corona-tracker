# Installation and running pull\_gsheets\_translations\_mvp.py

1. Follow the guidelines to cloning the repository and creating your own branch:
https://github.com/COVID-19-electronic-health-system/.github/blob/master/CONTRIBUTING.md
2. Open your terminal and change directories to `Corona-tracker`
3. Install the necessary Python packages by running the command:
   1. `pip3 install -r requirements.txt`
4. Change your working directory to `src/python/`
5. In `pull_gsheets_translations_mvp.py` change the variable `CREDENTIALS_PATH` to the relative or absolute path of your Google API `credentials.json`.
5. Execute the script in the terminal using the command:
   1. `python3 pull_gsheets_translations_mvp.py`
6. All of the `translation.json` files will be stored in `OUT_DIR`, which is set to `../../client/public/locales/` by default.
   