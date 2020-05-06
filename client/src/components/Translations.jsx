import React, { useEffect } from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';
import { languages } from '../utils/constants';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
}));

export default function TranslationsMenu() {
  const classes = useStyles();
  const { i18n, t } = useTranslation();

  const handleClick = event => {
    i18n.changeLanguage(event.target.value);
  };

  useEffect(() => {
    i18n.changeLanguage(window.navigator.language.slice(0, 2));
  }, [i18n]);

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          keepMounted
          value={i18n.language}
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
