import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';
import { Hidden, Divider } from '@material-ui/core';
import CheckCircleOutlineIcon from '@material-ui/icons/CheckCircleOutline';
import CheckIcon from '@material-ui/icons/Check';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
  },
  closeButton: {
    position: 'absolute',
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
        <IconButton aria-label="close" className={classes.closeButton} onClick={onClose}>
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

export default function Success(props) {
    
    const {open, onClick} = props

    const handleClose = () => {
        onClick(false);
    };

    return (
        <Dialog maxWidth="md" onClose={handleClose} aria-labelledby="customized-dialog-title" open={open} >
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            </DialogTitle>
                <DialogContent>
                    <div align="center">
                        
                        <div className="success-icon-modal">
                            <CheckIcon style={{color:"#1DA5E8", fontSize:180}} />
                        </div>
                        <div className="p-3">
                            <h3  className="mt-3">Company Registration is complete!</h3>
                            <p style={{fontWeight: 600, color:"#333333"}}  className="mt-3">
                                We just send you an email with the details of <br/>
                                your registration and setup company.
                            </p>
                            
                            <p style={{fontWeight: 600, color:"#333333"}} className="mt-3">
                                If any question or request, please reply email or contact to xxxxxx.holipic.com
                            </p>

                        </div>
                    </div>
                </DialogContent>
            
        </Dialog>
    );
}
