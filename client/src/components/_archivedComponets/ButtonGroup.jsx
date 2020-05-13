import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import ToggleButtonGroup from '@material-ui/lab/ToggleButtonGroup';
import ToggleButton from '@material-ui/lab/ToggleButton';

const useStyles = makeStyles({
  btnGroup: {
    border: '1px #ebebeb',
    padding: '10px 30px',
    height: '60px',
  },
  minimalButton: {
    backgroundColor: '#f64141',
    color: '#ffffff',
    width: '120px',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  },
  severeButton: {
    backgroundColor: '#f64141',
    color: '#ffffff',
    width: '120px',
    borderTopLeftRadius: '5px',
    borderBottomLeftRadius: '5px',
  },
  moderateButton: {
    backgroundColor: '#ffffff',
    color: '#f64141',
    width: '120px',
  },
});

function ButtonGroup() {
  const classes = useStyles();

  const [alignment, setAlignment] = React.useState('left');

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };

  return (
    <div className={classes.btnGroup}>
      <ToggleButtonGroup value={alignment} exclusive onChange={handleAlignment}>
        <ToggleButton className={classes.minimalButton} value="left">
          Minimal
        </ToggleButton>
        <ToggleButton className={classes.moderateButton} value="center">
          Moderate
        </ToggleButton>
        <ToggleButton className={classes.severeButton} value="right">
          Severe
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}

export default ButtonGroup;
