import React, { useState } from "react";
import {
  fade,
  ThemeProvider,
  withStyles,
  makeStyles,
  createMuiTheme,
} from "@material-ui/core/styles";
import InputBase from "@material-ui/core/InputBase";
import InputLabel from "@material-ui/core/InputLabel";
import TextField from "@material-ui/core/TextField";
import FormControl from "@material-ui/core/FormControl";
import { green } from "@material-ui/core/colors";
import MenuItem from "@material-ui/core/MenuItem";

const CssTextField = withStyles({
  root: {
    "& label.Mui-focused": {
      color: "#1DA5E8",
    },
    // '& .MuiInput-underline:after': {
    //   borderBottomColor: '#1DA5E8',
    // },
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#1DA5E8",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#1DA5E8",
      },
    },
  },
})(TextField);

export default function Select(props) {
  const { input, stype, onChange } = props;

  return (
    <CssTextField
      label={input.placeholder}
      variant="outlined"
      fullWidth={true}
      size="small"
      select
      id={input.id}
      required={true}
    >
      {input.options.map((item, index) => {
        if (input.id == "package") {
          return (
            <MenuItem
              key={index}
              value={item.value}
              selected={item.value == stype}
              name={input.id}
            >
              {item.name}
            </MenuItem>
          );
        } else if (typeof item == "string") {
          return <div></div>;
        } else if (input.id == "country") {
          return (
            <MenuItem key={index} value={item.id} onClick={() => onChange(item.id)} name={input.id}>
              {item.name}
            </MenuItem>
          );
        } else {
          console.log(item);
          return (
            <MenuItem key={index} value={item.id} name={input.id}>
              {item.name}
            </MenuItem>
          );
        }
      })}
    </CssTextField>
  );
}
