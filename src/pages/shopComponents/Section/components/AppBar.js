import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Link from "@material-ui/core/Link";

import Menu from "@material-ui/core/Menu";
import MenuItem from "@material-ui/core/MenuItem";
import { useParams, useNavigate } from "react-router-dom";
const useStyles = makeStyles((theme) => ({
  root: {
    marginTop: theme.spacing(2),
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    fontSize: 12,
  },
}));

export default function ButtonAppBar(props) {
  let navigate = useNavigate();
  const classes = useStyles();
  const back = () => {
    navigate("/");
    // alert(window.location.hostname)
    // if(window.location.hostname==="localhost")
    // window.location.href = "https://holipic.herokuapp.com/"
    // else
    // window.location.href = "https://"+window.location.hostname+"/"
  };
  const [anchorEl, setAnchorEl] = React.useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <div className={classes.root}>
      <AppBar
        position="static"
        color="transparent"
        style={{ boxShadow: "none" }}
      >
        <Toolbar>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="menu"
            size="small"
            onClick={() => back()}
          >
            <KeyboardBackspaceIcon />
          </IconButton>
          <h5 className={classes.title}>Back to Home</h5>

          <h5 style={{ fontSize: 12 }}>Filter</h5>
          <IconButton color="inherit" size="small" onClick={handleClick}>
            <ExpandMoreIcon fontSize="small" />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose}>Price High To Low</MenuItem>
            <MenuItem onClick={handleClose}>Price Low To High</MenuItem>
          </Menu>
        </Toolbar>
      </AppBar>
    </div>
  );
}
