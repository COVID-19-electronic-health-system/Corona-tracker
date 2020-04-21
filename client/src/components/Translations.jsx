import React, { useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { languages, defaultLanguage } from '../utils/constants';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function TranslationsMenu() {
  const [selectedLanguage, setSelectedLanguage] = React.useState(defaultLanguage.abbreviation);
  const classes = useStyles();
  const { i18n, t } = useTranslation();

  useEffect(() => {
    i18n.changeLanguage(selectedLanguage);
  }, [i18n, selectedLanguage]);

  const handleClick = event => {
    setSelectedLanguage(event.target.value);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          keepMounted
          value={selectedLanguage}
          onChange={handleClick}
        >
          {languages.map(language => (
            <MenuItem key={language.abbreviation} value={language.abbreviation}>
              {language.language}
            </MenuItem>
          ))}
        </Select>
        <FormHelperText>{t('selectLan')}</FormHelperText>
      </FormControl>
    </div>
  );
}
