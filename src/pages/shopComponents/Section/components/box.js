import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import FormatAlignLeftIcon from '@material-ui/icons/FormatAlignLeft';
import FormatAlignCenterIcon from '@material-ui/icons/FormatAlignCenter';
import FormatAlignRightIcon from '@material-ui/icons/FormatAlignRight';
import FormatBoldIcon from '@material-ui/icons/FormatBold';
import FormatItalicIcon from '@material-ui/icons/FormatItalic';
import FormatUnderlinedIcon from '@material-ui/icons/FormatUnderlined';
import Grid from '@material-ui/core/Grid';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 'fit-content',
    marginTop: 5,
    marginLeft: 10,
    marginBottom: -15,
    // border: `1px solid ${theme.palette.divider}`,
    borderRadius: theme.shape.borderRadius,
    backgroundColor: theme.palette.background.paper,
    color: theme.palette.text.secondary,
    '& svg': {
      margin: theme.spacing(1.5),
    },
    '& hr': {
    //   margin: theme.spacing(0, 0.1),
    },
  },
}));

export default function VerticalDividers() {
  const classes = useStyles();

  return (
    <div>
        <Divider/>
        <Grid container alignItems="center" className={classes.root}>
            <div className="" >
                <h4 style={{color:"#1DA5E8"}}>$15.00</h4>
            </div>
            <Divider orientation="vertical" flexItem />
            <div className=""  >
                <button  className="btn-cart" style={{color:"#FFFFFF"}}  >
                    Add to Cart
                </button>
            </div>
      </Grid>
    </div>
  );
}
