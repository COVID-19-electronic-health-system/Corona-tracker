import React from 'react';
import MenuItem from '@material-ui/core/MenuItem';
import { useTranslation } from 'react-i18next';
import { makeStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';
import FormHelperText from '@material-ui/core/FormHelperText';

const useStyles = makeStyles(theme => ({
  formControl: {
    margin: theme.spacing(1),
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing(2),
  },
}));

export default function TranslationsMenu() {
  const [anchorEl, setAnchorEl] = React.useState('');

  const classes = useStyles();

  const handleClick = event => {
    setAnchorEl(event.target.value);
    changeLanguage(event.target.value);
  };

  const handleClose = () => {
    setAnchorEl('');
  };
  const { i18n, t } = useTranslation();

  const changeLanguage = lng => {
    i18n.changeLanguage(lng);
  };

  return (
    <div>
      <FormControl className={classes.formControl}>
        <Select
          labelId="demo-simple-select-outlined-label"
          id="demo-simple-select-outlined"
          keepMounted
          onClose={handleClose}
          value={anchorEl}
          onChange={handleClick}
        >
          <MenuItem value={'en'}>English</MenuItem>
          <MenuItem value={'es'}>Spanish</MenuItem>
          <MenuItem value={'it'}>Italian</MenuItem>
          <MenuItem value={'fr'}>French</MenuItem>
          <MenuItem value={'rus'}>Russian</MenuItem>
        </Select>
        <FormHelperText>{t('selectLan')}</FormHelperText>
      </FormControl>
    </div>
  );
}
