import React, {useEffect} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import MuiDialogTitle from '@material-ui/core/DialogTitle';
import MuiDialogContent from '@material-ui/core/DialogContent';
import MuiDialogActions from '@material-ui/core/DialogActions';
import IconButton from '@material-ui/core/IconButton';
import CloseIcon from '@material-ui/icons/Close';
import Typography from '@material-ui/core/Typography';

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    textAlign:"center",
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
      <h2 style={{fontSize:22}} >{children}</h2>
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

export default function CustomizedDialogs(props) {

    const {open, onClick} = props
    const handleClose = () => {
        onClick(false);
    };

  return (
    <div>
      <Dialog onClose={handleClose} aria-labelledby="customized-dialog-title" open={open}>
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Holipic Automated Camera
        </DialogTitle>
        <DialogContent dividers>
        
        <h2 style={{fontSize:13}}>
            Holipic is the only company to build Automated Cameras with AI technology based photo capture systems using a mini computer also which comes with a 3.5-inch touch screen to easily connect cameras to in-store app like plug & play. 
        </h2>

<h6 style={{fontSize:13, color:'#333333'}} className="mt-3">
Our automated camera provides professional quality photos that guests simply can't resist. Nothing is more valuable to your adventure park guests than action and portrait photos that they can share with their family and friends, which allows their story, along with your brand, to live on. Also In-Store ‘Face Recognition’ is an option that seamlessly matches guests to the correct photos and allows guests to instantly access their gallery of photos.
</h6>

<h6 style={{fontSize:13, color:'#333333'}} className="mt-3">
Holipic systems yield the highest sales compared to any other platform available. Our sophisticated delivery systems mean that professional photos are sorted, packaged and awaiting your guests when they finish their tour, making their decision to purchase is easy.
</h6>

<h6 style={{fontSize:13, color:'#333333'}} className="mt-3">
Automatic cameras available to order from your admin and in our shop as much as you want and here are some benefits:
</h6>

<h2 style={{fontSize:13}}  className="mt-3">
    Make it easy, limitless photo revenue. 
</h2>
<h6 style={{fontSize:13, color:'#333333'}}>
Holipic provides a myriad of solutions for the cruise, water park, and theme park industries.
Incorporates superior cameras, infinite scalability, and the ability to place cameras in any environment imaginable. 
<br/>
<br/>
Whether it’s impossible vantage points taken from the highest of trees, or using top of the line DSLR cameras, Holipic systems makes those photos incredible, seamless, and instantly available to your customers, bringing photo revenue back into one of your best revenue streams. 
The result is limitless photo revenue potential.
</h6>

<h2 style={{fontSize:13}} className="mt-3">
Seamless viewing and fulfillment means customers buy faster and buy more.
</h2>
<h6 style={{fontSize:13, color:'#333333'}} >
Our Face Recognition technology automatically sorts photos for each patron to find images faster and the fulfillment system means that photos are already packaged and awaiting your guests right after they are taken, so the decision to view and purchase is easy.
<br/>
<br/>
A smooth viewing and purchasing platform using our in-store desktop app, combined with your custom package options, not only makes the consideration process effortless for your customers, but also enables more money to be spent per customer. 
</h6>
<h2 style={{fontSize:13}} className="mt-3">
Additionally, capturing every moment. Building value for your customers.
</h2>
<h6 style={{fontSize:13, color:'#333333'}} >
In addition to automated action cameras, Holipic provides a ‘Photographer Mobile App’ to make sure your guests can take home every memory from your photographers as well. Creating photo packages that capture each guest's experience in every aspect is the key to building value for your customers, and building revenue for your business.
</h6>
<h2 style={{fontSize:13}} className="mt-3">
Holipic Automated Camera & Apps technology is designed to minimize the costs.
</h2>
<h6 style={{fontSize:13, color:'#333333'}} >
Holipic Apps creates the images that are an integral part of your customers' experience, and our systems yield higher sales than any other platform available, period. And since our entire process can be hosted in the cloud or onsite, the associated costs compared to traditional tourism photography products are zero.
<br/>
<br/>

However, our automatic cameras will save a lot of staff cost from regular line shooting jobs. Companies will be able to use photographers for valuable shootings with your customers directly.
   </h6>       
        </DialogContent>
      </Dialog>
    </div>
  );
}
