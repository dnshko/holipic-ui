import React from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Hidden, Divider, Slide } from "@material-ui/core";

import Form from "./components/Form.js";
import SideDesign from "./components/SideDesign.js";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
});

const DialogTitle = withStyles(styles)((props) => {
  const { children, classes, onClose, ...other } = props;
  return (
    <MuiDialogTitle disableTypography className={classes.root} {...other}>
      <h3>{children}</h3>
      {onClose ? (
        <IconButton
          aria-label="close"
          className={classes.closeButton}
          onClick={onClose}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </MuiDialogTitle>
  );
});

const DialogContent = withStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}))(MuiDialogContent);

const DialogActions = withStyles((theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(1),
  },
}))(MuiDialogActions);
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
  },
  media: {
    height: 140,
  },
  list: {
    width: "100%",
    maxWidth: 360,
  },
  dialog: {
    borderTopLeftRadius: "15px !important",
    borderTopRightRadius: "15px !important",
  },
});

export default function Register(props) {
  const { open, onClick, onSuccess, type } = props;

  const handleClose = () => {
    onClick(false);
  };
  const classes = useStyles();
  return (
    <Dialog
      id="register1-dialog"
      classes={{
        root: classes.dialog,
        container: classes.container,
        paper: classes.dialog,
      }}
      fullScreen
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      style={{
        borderTopRightRadius: 50,
        borderTopLeftRadius: 50,
        width: "100%",
        overflowY: "hidden",
      }}
      TransitionComponent={Transition}
    >
      <div className="pl-3 pr-3">
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          {/* <strong> */}
          Let's get started,
          <br />
          Sign Up just in minutes
          {/* </strong> */}
        </DialogTitle>
        <Form
          handleClose={handleClose}
          onSuccess={onSuccess}
          props={props}
          type={type}
        />
      </div>
    </Dialog>
  );
}
