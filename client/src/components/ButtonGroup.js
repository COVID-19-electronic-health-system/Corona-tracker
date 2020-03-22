import React from 'react'
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
    }
});

function ButtonGroup() {

    const classes = useStyles();


    return (
        <div className={classes.btnGroup}>
            <ToggleButtonGroup>
                <ToggleButton className={classes.minimalButton}>Minimal</ToggleButton>
                <ToggleButton className={classes.moderateButton}>Moderate</ToggleButton>
                <ToggleButton className={classes.severeButton}>Severe</ToggleButton>
            </ToggleButtonGroup>
        </div>
    )

}

export default ButtonGroup;