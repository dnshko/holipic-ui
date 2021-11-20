import React from 'react';
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';

const CssTextField = withStyles({
  root: {
    '& label.Mui-focused': {
      color: '#1DA5E8',
    },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: '#1DA5E8',
    // },
    '& .MuiOutlinedInput-root': {
      
      '&:hover fieldset': {
        borderColor: '#1DA5E8',
      },
      '&.Mui-focused fieldset': {
        borderColor: '#1DA5E8',
      },
    },
  },
})(TextField);

export default function CustomInput(props){
    const { item } = props
    return(
        <CssTextField
            label={item.placeholder}
            variant="outlined"
            fullWidth={true}
            size="small"
            id={item.id}
            type={item.type}
            required={true}
        />
    )
}