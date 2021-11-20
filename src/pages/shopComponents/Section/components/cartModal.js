import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { makeStyles, withStyles } from "@material-ui/core/styles";
import clsx from "clsx";
import Check from "@material-ui/icons/Check";
import StepConnector from "@material-ui/core/StepConnector";
import Button from "@material-ui/core/Button";
import Dialog from "@material-ui/core/Dialog";
import MuiDialogTitle from "@material-ui/core/DialogTitle";
import MuiDialogContent from "@material-ui/core/DialogContent";
import MuiDialogActions from "@material-ui/core/DialogActions";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import KeyboardBackspaceIcon from "@material-ui/icons/KeyboardBackspace";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { ArrowBackIos } from "@material-ui/icons";
import CloseIcon from "@material-ui/icons/Close";
import { Grid, Typography } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import FiberManualRecordIcon from "@material-ui/icons/FiberManualRecord";
import StepLabel from "@material-ui/core/StepLabel";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import AddIcon from "@material-ui/icons/Add";
import RemoveIcon from "@material-ui/icons/Remove";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCartOutlined";
import CheckIcon from "@material-ui/icons/Check";
import { Hidden, Divider, Slide } from "@material-ui/core";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import ListItemText from "@material-ui/core/ListItemText";
import CustomInput from "./input";
import CustomSelect from "./select";
import CustomRadio from "./radio";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";
import axios from "axios";

const useStyles1 = makeStyles({
  table: {
    minWidth: 650,
    minHeight: 300,
    overflowY: "scroll",
  },

  horizontal: {
    display: "flex",
    flex: "1 1 auto",
  },

  cover: {
    width: 70,
  },
  upper: {
    textTransform: "uppercase",
    color: "gray",
    fontWeight: 500,
  },
  btn1: {
    color: "#4287f5",
  },
});

function createData(name, material, calories, fat, carbs, protein) {
  return { name, material, calories, fat, carbs, protein };
}

const rows = [
  createData("Frozen yoghurt", "1kg", 159, 6.0, 24),
  createData("Ice cream sandwich", "1kg", 237, 9.0, 37),
  createData("Eclair", "1kg", 262, 16.0, 24),
  createData("Cupcake", "1kg", 305, 3.7, 67),
  createData("Gingerbread", "1kg", 356, 16.0, 49),
];

function BasicTable() {
  const classes = useStyles1();

  const [data, setData] = useState([]);
  const [data_, setData_] = useState([]);
  const [subTotal, setSubTotal] = useState(0);

  useEffect(() => {
    axios
      .get("/api/products/list")
      .then((res) => {
        console.log(res.data);

        var shoppingCart =
          JSON.parse(localStorage.getItem("shopping_cart")) || [];
        var tempArray = [];

        var sub_total = 0;

        for (let i = 0; i < res.data.length; i++) {
          var element = res.data[i];

          var order = shoppingCart.find((x) => x.id == element.id);
          if (order) {
            tempArray.push({ ...element, ...order });
            sub_total += element.price * order.quantity;
          }
        }

        setData(tempArray);
        setData_(res.data);
        setSubTotal(sub_total);
      })
      .catch((err) => {
        console.log(err.response.data);
      });
  }, []);

  const calculateSubTotal = (newArray) => {
    var sub_total = 0;
    for (let i = 0; i < newArray.length; i++) {
      var element = newArray[i];
      sub_total += element.price + element.quantity;
    }
    setSubTotal(sub_total);
  };
  const increaseItem = (id) => {
    var newArray = [];
    var remainArr = data.filter((d) => d.id != id);
    var item = data.find((d) => d.id == id);
    item.quantity += 1;
    newArray = [...remainArr, item];

    calculateSubTotal(newArray);
    setData(newArray);
    localStorage.setItem("shopping_cart", JSON.stringify(newArray));
  };

  const decreaseItem = (id, quantity) => {
    var newArray = [];
    var remainArr = data.filter((d) => d.id != id);

    if (quantity == 1) {
      newArray = [...remainArr];
    } else {
      var item = data.find((d) => d.id == id);
      item.quantity -= 1;

      newArray = [...remainArr, item];
    }

    calculateSubTotal(newArray);
    setData(newArray);
    localStorage.setItem("shopping_cart", JSON.stringify(newArray));
  };

  return (
    <div>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left" className={classes.upper}>
              Product
            </TableCell>
            <TableCell align="center" className={classes.upper}>
              Price
            </TableCell>
            <TableCell align="center" className={classes.upper}>
              Quantity
            </TableCell>
            <TableCell align="center" className={classes.upper}>
              Total
            </TableCell>
            <TableCell></TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row" align="left">
                <div className="card" style={{ borderColor: "transparent" }}>
                  <div className={classes.horizontal}>
                    <div className={classes.image}>
                      <img
                        src="./assets/img/download.jpg"
                        className={classes.cover}
                      />
                    </div>
                    <div className="card-body">
                      <h6>{row.name}</h6>
                    </div>
                  </div>
                </div>
              </TableCell>
              <TableCell align="center">{"$" + row.price}</TableCell>
              <TableCell align="center">
                <ButtonGroup
                  variant="contained"
                  color="default"
                  disableElevation
                  size="small"
                >
                  <Button
                    onClick={(e) => decreaseItem(row.id, row.quantity)}
                    style={{
                      width: 5,
                      height: 18,
                      borderTopLeftRadius: 20,
                      borderBottomLeftRadius: 20,
                      backgroundColor: "#EEEEEE",
                    }}
                  >
                    <RemoveIcon style={{ fontSize: 10 }} />
                  </Button>
                  <Button
                    style={{
                      width: 5,
                      height: 18,
                      backgroundColor: "#EEEEEE",
                      fontSize: 10,
                    }}
                  >
                    {row.quantity}
                  </Button>
                  <Button
                    onClick={(e) => increaseItem(row.id)}
                    style={{
                      width: 5,
                      height: 18,
                      borderTopRightRadius: 20,
                      borderBottomRightRadius: 20,
                      backgroundColor: "#EEEEEE",
                    }}
                  >
                    <AddIcon style={{ fontSize: 10 }} />
                  </Button>
                </ButtonGroup>
              </TableCell>
              <TableCell align="center">
                {"$" + row.price * row.quantity}
              </TableCell>
              <TableCell align="center">
                <IconButton style={{ backgroundColor: "#EEEEEE" }} size="small">
                  <CloseIcon style={{ fontSize: 14 }} />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
      <Divider />
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          padding: 10,
          minWidth: 650,
        }}
      >
        <div>
          <CustomInput
            input={{ label: "Promo Code", type: "text", id: "promo" }}
          />
        </div>
        <div>
          <div style={{ display: "flex", justifyContent: "space-around" }}>
            <h4 style={{ fontSize: 14 }}>Subtotal</h4>
            <h4 style={{ fontSize: 14 }}>${subTotal}</h4>
          </div>
          <p style={{ fontSize: 11, color: "gray" }}>
            Tax included and shipping calculated at checkout.
          </p>
        </div>
      </div>
    </div>
  );
}

function BasicTable1() {
  const classes = useStyles1();

  return (
    // <TableContainer>
    <Table aria-label="simple table">{Shipping()}</Table>
    // </TableContainer>
  );
}

function BasicTable2() {
  const classes = useStyles1();

  return (
    // <TableContainer>
    <Table aria-label="simple table">{Payment()}</Table>
    // </TableContainer>
  );
}

function BasicTable3() {
  const classes = useStyles1();

  return (
    // <TableContainer>
    <Table aria-label="simple table">
      <div align="center" className="p-5">
        <div className="success-icon-modal">
          <CheckIcon style={{ color: "#1DA5E8", fontSize: 180 }} />
        </div>
        <div className="p-3">
          <h3 className="mt-3">Payment Success!</h3>
          <p style={{ fontWeight: 600, color: "#333333" }} className="mt-3">
            Thank you for your payment.
          </p>
          <p style={{ fontWeight: 600, color: "#333333" }} className="mt-1">
            We just send you an email with the details of your order.
          </p>

          <p style={{ fontWeight: 600, color: "#333333" }} className="mt-3">
            Your order invoice number 1231458
          </p>
        </div>
      </div>
    </Table>
    // </TableContainer>
  );
}

function Shipping() {
  const inputs = [
    { label: "Email", id: "email", type: "email" },
    { label: "First Name", id: "fname", type: "text" },
    { label: "Last Name", id: "lname", type: "text" },
    { label: "Company (Optional)", type: "text", id: "company" },
    { label: "Address", type: "text", id: "address" },
    { label: "Apartment, suite etc (Optional)", type: "text", id: "address1" },
    { label: "City", type: "text", id: "city" },
    { label: "ZIP code", type: "text", id: "zip" },
    { label: "Phone", type: "tel", id: "phone" },
  ];
  const select = [
    {
      label: "Country/Region",
      id: "country",
      options: ["Choose Country/Region"],
    },
    { label: "State", id: "state", options: ["Choose State"] },
    {
      label: "Shipping Method",
      id: "method",
      options: ["Standard $46.70 USD"],
    },
  ];
  return (
    <div class="p-3">
      <form>
        <div class="row">
          <div class="col-md-12">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <label style={{ fontWeight: 500 }}>Contact Information</label>
              <label style={{ fontSize: 12 }}>
                {" "}
                Already have an account?
                <a style={{ marginLeft: 5, color: "#1DA5E8" }} href="#">
                  Log In
                </a>
              </label>
            </div>
          </div>
          <div class="col-md-12 ">
            <CustomInput input={inputs[0]} />
          </div>
        </div>
        <div class="form-row">
          <div class="col-md-12  mt-3">
            <label style={{ fontWeight: 500 }}>Shipping Address</label>
          </div>
          <div class="col-md-6 ">
            <CustomInput input={inputs[1]} />
          </div>
          <div class="col-md-6 ">
            <CustomInput input={inputs[2]} />
          </div>
        </div>
        <div class=" mt-3">
          <CustomInput input={inputs[3]} />
        </div>
        <div class=" mt-3">
          <CustomInput input={inputs[4]} />
        </div>
        <div class=" mt-3">
          <CustomInput input={inputs[5]} />
        </div>
        <div class="form-row">
          <div class="col-md-12  mt-3">
            <CustomInput input={inputs[6]} />
          </div>
          <div class="col-md-5 mt-3">
            <CustomSelect input={select[0]} />
          </div>
          <div class="col-md-4 mt-3">
            <CustomSelect input={select[1]} />
          </div>
          <div class="col-md-3  mt-3">
            <CustomInput input={inputs[7]} />
          </div>
        </div>

        <div class=" mt-3">
          <CustomInput input={inputs[8]} />
        </div>
        <div class="row mt-3">
          <div class="col-md-12 ">
            <label style={{ fontWeight: 500 }}>Shipping Method</label>
          </div>
          <div class="col-md-12">
            <CustomSelect input={select[2]} />
          </div>
        </div>
      </form>
    </div>
  );
}

function Payment() {
  const inputs = [
    { label: "Card Number", type: "number", id: "card-number" },
    { label: "Name on card", type: "text", id: "name-card" },
    { label: "Expiry Date (MM/YY)", type: "date", id: "expiry-date" },
    { label: "Security Code", type: "text", id: "code" },
  ];
  return (
    <div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          backgroundColor: "#EEEEEE",
        }}
      >
        <div class="pl-2">
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <ShoppingCartIcon style={{ fontSize: 13, color: "#1DA5E8" }} />
            <h5 style={{ fontSize: 13, color: "#1DA5E8" }}>
              Remove Order Summary
            </h5>
            <IconButton color="inherit" size="small">
              <ExpandMoreIcon style={{ fontSize: 13, color: "#1DA5E8" }} />
            </IconButton>
          </div>
        </div>
        <div class="pr-2">
          <h5 style={{ fontSize: 13 }}>$101,324.79 USD</h5>
        </div>
      </div>
      <Divider />
      <div className="p-3">
        <div style={{ border: "1px solid lightgray", borderRadius: 5 }}>
          <Table aria-label="simple table">
            <TableBody>
              <TableRow>
                <TableCell align="left" style={{ color: "gray" }}>
                  Contact
                </TableCell>
                <TableCell align="left">+62-111-3334-444</TableCell>
                <TableCell align="right">
                  <Button
                    style={{ color: "#1DA5E8", textTransform: "capitalize" }}
                    size="small"
                  >
                    Change
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" style={{ color: "gray" }}>
                  Ship to
                </TableCell>
                <TableCell align="left">
                  Lorem ipsum, or lipsum as it is sometimes known, is dummy text
                  used in laying out print, graphic or web designs.
                </TableCell>
                <TableCell align="right">
                  <Button
                    style={{ color: "#1DA5E8", textTransform: "capitalize" }}
                    size="small"
                  >
                    Change
                  </Button>
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell align="left" style={{ color: "gray" }}>
                  Method
                </TableCell>
                <TableCell align="left">Standard - $46.70 USD</TableCell>
                <TableCell align="right">
                  <Button
                    style={{ color: "#1DA5E8", textTransform: "capitalize" }}
                    size="small"
                  >
                    Change
                  </Button>
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </div>
      <div class="p-3">
        <h5 class="mb-2">
          Payment
          <br />
          <small>All transactions are secure and encrypted</small>
        </h5>
        <div
          style={{
            border: "1px solid lightgray",
            borderRadius: 5,
            backgroundColor: "#EEEEEE",
          }}
        >
          <div style={{ backgroundColor: "#fff", borderRadius: 5 }}>
            <Grid container>
              <Grid item xs={12} sm={6} md={6}>
                <h5 class="p-3">Credit Card</h5>
              </Grid>
              <Grid item xs={6} sm={3} md={3}></Grid>
              <Grid item xs={6} sm={3} md={3}>
                <img src="img/payment-methods.png" width="200" />
              </Grid>
            </Grid>
          </div>
          <Divider />
          <div class="p-2">
            <div
              class="mt-3"
              style={{ backgroundColor: "#fff", borderRadius: 5 }}
            >
              <CustomInput input={inputs[0]} />
            </div>
            <div
              class="mt-3"
              style={{ backgroundColor: "#fff", borderRadius: 5 }}
            >
              <CustomInput input={inputs[1]} />
            </div>
            <div class="row mt-3">
              <div class="col-6">
                <div style={{ backgroundColor: "#fff", borderRadius: 5 }}>
                  <CustomInput input={inputs[2]} />
                </div>
              </div>
              <div class="col-6">
                <div style={{ backgroundColor: "#fff", borderRadius: 5 }}>
                  <CustomInput input={inputs[3]} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <FormControl>
          <FormControlLabel
            value="end"
            control={<CustomRadio />}
            label="use a different billing address"
          />
        </FormControl>
      </div>
    </div>
  );
}
const styles = (theme) => ({
  root: {
    marginTop: -20,
    marginBottom: -30,
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
      {/* <h2 style={{fontSize:22}} >{children}</h2> */}
      <div>{children}</div>
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
    padding: theme.spacing(0),
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
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
  },
});

function getSteps() {
  return ["Your Cart", "Shipping", "Payment"];
}

function getStepContent(step) {
  switch (step) {
    case 0:
      return BasicTable();
    case 1:
      return BasicTable1();
    case 2:
      return BasicTable2();
    default:
      return BasicTable3();
  }
}

function getForwardContent(step) {
  switch (step) {
    case 0:
      return "Continue";
    case 1:
      return "Continue to Payment";
    case 2:
      return "Pay now";
    default:
      return "undefined";
  }
}
function getBackContent(step) {
  switch (step) {
    case 0:
      return "";
    case 1:
      return "Return to cart";
    case 2:
      return "Return to shipping";
    default:
      return "undefined";
  }
}
const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const QontoConnector = withStyles({
  alternativeLabel: {
    top: 10,
    left: "calc(-50% + 16px)",
    right: "calc(50% + 16px)",
  },
  active: {
    "& $line": {
      borderColor: "#1DA5E8",
    },
  },
  completed: {
    "& $line": {
      borderColor: "#1DA5E8",
    },
  },
  line: {
    borderColor: "#eaeaf0",
    borderTopWidth: 3,
    borderRadius: 1,
  },
})(StepConnector);

const useQontoStepIconStyles = makeStyles({
  root: {
    color: "#eaeaf0",
    display: "flex",
    height: 22,
    alignItems: "center",
  },
  active: {
    color: "#1DA5E8",
  },
  circle: {
    borderRadius: "50%",
    border: "2px solid currentColor",
  },
  completed: {
    borderRadius: 50,
    padding: 5,
    color: "#fff",
    backgroundColor: "#1DA5E8",
    zIndex: 1,
  },
});

function QontoStepIcon(props) {
  const classes = useQontoStepIconStyles();
  const { active, completed } = props;

  return (
    <div
      className={clsx(classes.root, {
        [classes.active]: active,
      })}
    >
      {completed ? (
        <Check className={classes.completed} />
      ) : (
        <FiberManualRecordIcon fontSize="small" className={classes.circle} />
      )}
    </div>
  );
}

QontoStepIcon.propTypes = {
  /**
   * Whether this step is active.
   */
  active: PropTypes.bool,
  /**
   * Mark the step as completed. Is passed to child components.
   */
  completed: PropTypes.bool,
};

export default function CustomizedDialogs(props) {
  const classes = useStyles();
  const { open, onClick } = props;
  const handleClose = () => {
    onClick(false);
    window["toogleClass"]();
  };
  // const [images, setImages] = useState([image, image, image, image]);
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((preActiveStep) => preActiveStep + 1);
    if (activeStep === 2) {
      // alert()
      // setTimeout(()=>{
      //   handleReset()
      // },3000)
    }
  };

  const handleBack = () => {
    setActiveStep((preActiveStep) => preActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div>
      <Dialog
        maxWidth="md"
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
        TransitionComponent={Transition}
      >
        {activeStep !== 3 ? (
          <DialogTitle id="customized-dialog-title" onClose={handleClose}>
            <Stepper
              alternativeLabel
              activeStep={activeStep}
              connector={<QontoConnector />}
            >
              {steps.map((label) => (
                <Step key={label}>
                  <StepLabel StepIconComponent={QontoStepIcon}>
                    {label}
                  </StepLabel>
                </Step>
              ))}
            </Stepper>
          </DialogTitle>
        ) : (
          <DialogTitle onClose={handleClose} />
        )}
        {activeStep !== 3 ? (
          <DialogContent dividers>
            <div>{getStepContent(activeStep)}</div>
          </DialogContent>
        ) : (
          <DialogContent>
            <div>{getStepContent(activeStep)}</div>
          </DialogContent>
        )}
        {activeStep !== 3 && (
          <DialogActions>
            <div style={{ width: "100%" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  float: "left",
                }}
              >
                <Button
                  variant="primary"
                  startIcon={<ArrowBackIos />}
                  style={{ textTransform: "capitalize" }}
                  disabled={activeStep === 0}
                  onClick={handleBack}
                  className={classes.btn1_cm}
                >
                  {getBackContent(activeStep)}
                </Button>
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  float: "right",
                }}
              >
                <Button
                  variant="contained"
                  style={{
                    color: "#fff",
                    backgroundColor: "#1DA5E8",
                    textTransform: "capitalize",
                  }}
                  onClick={handleNext}
                  className={classes.button}
                >
                  {getForwardContent(activeStep)}
                </Button>
              </div>
            </div>
          </DialogActions>
        )}
      </Dialog>
    </div>
  );
}
