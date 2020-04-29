import React from 'react';
import { Link } from 'react-router-dom';
import Button from '@material-ui/core/Button';
import { makeStyles } from '@material-ui/core/styles';
import buttonsCss from '../css/buttons';
import { notFoundImgText } from '../utils/imgUrl';

const useStyles = makeStyles(() => ({
  imageText: {
    maxWidth: 600,
    width: '90%',
    paddingTop: '2.5rem',
  },
  hr: {
    maxWidth: 650,
    width: '95%',
    border: '1px #909090 solid',
    borderRadius: '50%',
  },
  image: {
    maxWidth: 600,
    width: '90%',
    height: 'auto',
  },
  mediumText: {
    paddingLeft: '.5rem',
    paddingRight: '.5rem',
    paddingTop: '2.5rem',
    fontSize: '20px',
  },
  button: {
    ...buttonsCss.buttons,
    maxWidth: '320px',
    width: '50%',
    margin: '.6rem',
  },
}));

const NotFoundPage = () => {
  const classes = useStyles();
  return (
    <div>
      <img src={notFoundImgText} alt="Not found" className={classes.imageText} />
      <hr className={classes.hr} />
      <div className={classes.mediumText}>Sorry, we couldn’t find the page you were looking for.</div>
      <Button component={Link} to="/" className={classes.button} variant="contained">
        Go back home
      </Button>
    </div>
  );
};

export default NotFoundPage;
