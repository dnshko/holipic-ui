import React, { useState } from "react";
import { withStyles, makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";
import Typography from "@material-ui/core/Typography";
import { Grid, Hidden } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import InputLabel from "@material-ui/core/InputLabel";
import MenuItem from "@material-ui/core/MenuItem";
import FormHelperText from "@material-ui/core/FormHelperText";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";

import CustomSelect from "./select";

const styles = (theme) => ({
  root: {
    margin: 0,
    padding: theme.spacing(2),
    textAlign: "center",
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
      <h2 style={{ fontSize: 22 }}>{children}</h2>
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

const useStyles = makeStyles({
  root: {
    maxWidth: "auto",
  },
  media: {
    height: 100,
    width: "auto",
  },

  media2: {
    height: 300,
    width: "auto",
  },
  root1: {
    maxWidth: "auto",
  },
  media1: {
    height: 70,
    width: "auto",
  },
  listSection: {
    backgroundColor: "inherit",
  },
  ul: {
    backgroundColor: "inherit",
    padding: 0,
  },
});

export default function CustomizedDialogs(props) {
  const [fullWidth, setFullWidth] = React.useState(true);
  const [maxWidth, setMaxWidth] = React.useState("sm");
  const classes = useStyles();
  const { open, onClick } = props;
  const handleClose = () => {
    onClick(false);
  };

  const { item } = props;
  const { o_images } = item;
  const [images_, setImages_] = useState(o_images.split(","));

  const [selectedImage, setSelectedImage] = useState(images_[0]);
  const [color, setColor] = useState("black");
  const [quantity, setQuantity] = useState(0);

  const addItem = () => {
    var shoppingCart = JSON.parse(localStorage.getItem("shopping_cart")) || [];
    // var item = shoppingCart.find((x) => x.id == item.id);
    if (item) {
      item.quantity += quantity;
    } else {
      shoppingCart.push({ id: item.id, color, quantity });
    }

    localStorage.setItem("shopping_cart", JSON.stringify(shoppingCart));
  };

  // const [images, setImages] = useState([image, image, image, image]);
  const inputs = [
    { label: "Color", options: ["Black"], id: "style", onChange: setColor },
    {
      label: "Quantity",
      options: [1, 2, 3, 4, 5],
      id: "quantity",
      onChange: setQuantity,
    },
  ];
  console.log("product model section page:", item);
  return (
    <div>
      <Dialog
        fullWidth={fullWidth}
        maxWidth={maxWidth}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        className="ProductPopUp"
      >
        <DialogTitle id="customized-dialog-title" onClose={handleClose}>
          Product Details
        </DialogTitle>
        <DialogContent dividers>
          <div className="p-3">
            <Grid container spacing={4}>
              <Grid item md={6} sm={8}>
                <div className="mb-3">
                  {/* <img style={{height:300 ,width:450}} src={images[0]} /> */}
                  <Card className={classes.root}>
                    <CardMedia
                      className={classes.media2}
                      // image={config.staticUrl + selectedImage}
                      image={selectedImage}
                    />
                  </Card>
                </div>
                <Hidden smDown>
                  <Grid container spacing={1}>
                    {images_.map((item, index) => {
                      return (
                        <Grid item sm={6} md={3} key={index}>
                          <Card className={classes.root1}>
                            <CardActionArea>
                              <CardMedia
                                className={classes.media1}
                                image={item}
                                onClick={() => {
                                  setSelectedImage(item);
                                }}
                              />
                            </CardActionArea>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Hidden>
              </Grid>
              <Hidden mdUp>
                <Grid item sm={4} md={4}>
                  <Grid container spacing={1}>
                    {images_.map((item, index) => {
                      return (
                        <Grid item sm={6} md={6} key={index}>
                          <Card className={classes.root}>
                            <CardActionArea>
                              <CardMedia
                                className={classes.media}
                                image={item}
                              />
                            </CardActionArea>
                          </Card>
                        </Grid>
                      );
                    })}
                  </Grid>
                </Grid>
              </Hidden>

              <Grid item md={6} sm={12}>
                <h2 style={{ fontSize: 25 }}>{item.title}</h2>
                <h4 style={{ fontSize: 14, color: "gray" }} className="mt-2">
                  ${item.price}
                </h4>
                <p style={{ fontSize: 11, color: "gray" }}>Tax included.</p>

                <form>
                  <div className="row">
                    {/* {inputs.map((input, index) => {
                      return (
                        <div className="col-12 col-sm-6 col-md-6 col-lg-6 mt-3">
                          <CustomSelect input={input} />
                        </div>
                      );
                    })} */}
                    <div className="col-12 mt-3">
                      <Button
                        variant="outlined"
                        style={{ width: "100%" }}
                        onClick={(e) => addItem()}
                      >
                        Add To Cart
                      </Button>
                    </div>
                  </div>
                </form>

                <div className="mb-2 row">
                  <p style={{ fontSize: 13 }} className="mt-2">
                    {item.description}
                  </p>
                  <p
                    style={{
                      fontSize: 13,
                      color: "#1DA5E8",
                      fontWeight: "bold",
                    }}
                    className="mt-2"
                  >
                    {item.note}
                  </p>
                </div>
                <List
                  style={{ border: "1px solid lightgray" }}
                  subheader={<li />}
                >
                  {[0].map((sectionId) => (
                    <li
                      key={`section-${sectionId}`}
                      className={classes.listSection}
                    >
                      <ul className={classes.ul}>
                        <ListSubheader
                          style={{
                            backgroundColor: "#EEEEEE",
                            color: "gray",
                            fontSize: 16,
                          }}
                        >
                          {"Specifications"}
                        </ListSubheader>

                        <ListItem key={`${item.id}`}>
                          <ListItemText
                            style={{ fontSize: 11 }}
                            primary={`- ${item.specification}`}
                          />
                        </ListItem>
                      </ul>
                    </li>
                  ))}
                </List>
              </Grid>
            </Grid>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
