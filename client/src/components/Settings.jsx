import React from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogTitle from '@material-ui/core/DialogTitle';
import { Link } from 'react-router-dom';

import { makeStyles } from '@material-ui/core/styles';

import SettingsOutlinedIcon from '@material-ui/icons/SettingsOutlined';

import { useBlockstack } from 'react-blockstack';
import { useTranslation } from 'react-i18next';

const useStyle = makeStyles({
  root: {
    width: '150px',
  },
  text: {
    backgroundImage: 'linear-gradient(40deg, #4760ff 0%, #82a4f8 100%)',
  },
  action: {
    display: 'flex',
    flexDirection: 'column',
    backgroundImage: 'linear-gradient(#d7e1fa, #bbcef9)',
  },
  icon: {
    fontSize: '40px',
    color: 'white',
    transition: 'all .3s ease-in-out',
    '&:hover': {
      transform: 'scale(1.1)',
    },
  },
  buttons: {
    width: '120px',
    margin: '5px',
  },
});
export default function Settings() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyle();
  const { signOut } = useBlockstack();
  const { t } = useTranslation();
  const handleClickOpen = () => {
    setOpen(!open);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Link href="#fixeslint" className={classes.root} onClick={handleClickOpen}>
      <SettingsOutlinedIcon className={classes.icon} />

      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title" className={classes.text}>
          Your App Settings
        </DialogTitle>
        <DialogActions className={classes.action}>
          <Button size="medium" color="secondary" variant="contained" className={classes.buttons}>
            Settings
          </Button>
          <Button size="medium" color="secondary" variant="contained" className={classes.buttons}>
            About
          </Button>
          <Button size="medium" color="secondary" variant="contained" className={classes.buttons} onClick={signOut}>
            {t('signoutButtonText')}
          </Button>
        </DialogActions>
      </Dialog>
    </Link>
  );
}
