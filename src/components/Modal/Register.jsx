import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Hidden, Divider } from "@material-ui/core";

import Form from "./components/Form.js";
import SideDesign from "./components/SideDesign.js";

const styles = (theme) => ({
  root: {
    margin: 0,
  },
  closeButton: {
    position: "absolute",
    right: theme.spacing(1),
    top: theme.spacing(1),
    color: theme.palette.grey[500],
  },
  /*
  overflowHidden: {
    overflowY: "hidden"
  }
  */
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

export default function Register(props) {
  const { open, onClick, onSuccess, type, referId } = props;

  const handleClose = () => {
    onClick(false);
  };

  return (
    <Dialog
      maxWidth="md"
      onClose={handleClose}
      aria-labelledby="customized-dialog-title"
      open={open}
      style={{overflowY: 'hidden'}}
      id="register-dialog"
    >
      <div className="p-3">
        <DialogContent>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12} md={6}>
              <Form
                handleClose={handleClose}
                onSuccess={onSuccess}
                props={props}
                type={type}
                referId={referId}
              />
            </Grid>
            <Hidden smDown>
              <Grid item md={1}>
                <Divider orientation="vertical" />
              </Grid>

              <Grid item xs={12} sm={12} md={5}>
                <DialogTitle id="customized-dialog-title" onClose={handleClose}>
                  {/* <strong> */}
                  Let's get started,
                  <br />
                  Sign Up just in minutes
                  {/* </strong> */}
                </DialogTitle>
                <SideDesign />
              </Grid>
            </Hidden>
          </Grid>
        </DialogContent>
      </div>
    </Dialog>
  );
}
