import React, { useState } from "react";
import PropTypes from "prop-types";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import useScrollTrigger from "@material-ui/core/useScrollTrigger";
import Box from "@material-ui/core/Box";
import Container from "@material-ui/core/Container";
import Slide from "@material-ui/core/Slide";
// import logo from "../assets/img/holipicApp_180x180.png";
import { Hidden, Divider } from "@material-ui/core";
import Header from "./shopComponents/Header/header";
import Footer from "../components/FooterSection/Footer";
import ShopSection from "./shopComponents/Section/Shop.jsx";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginLeft: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function HideOnScroll(props) {
  const { children, window } = props;
  // Note that you normally won't need to set the window ref as useScrollTrigger
  // will default to window.
  // This is only being set here because the demo is in an iframe.
  const trigger = useScrollTrigger({ target: window ? window() : undefined });

  return (
    <Slide appear={false} direction="down" in={!trigger}>
      {children}
    </Slide>
  );
}

HideOnScroll.propTypes = {
  children: PropTypes.element.isRequired,
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};

export default function Shop({ ...rest }) {
  const classes = useStyles();
  const [open, setOpen] = useState(true);
  const [invoice, setInvoice] = useState(6787868);
  return (
    <div>
      {/*====== Scroll To Top Area Start ======*/}
      <div id="scrollUp" title="Scroll To Top">
        <i className="fas fa-arrow-up" />
      </div>
      {/*====== Scroll To Top Area End ======*/}
      <div className="main" style={{ overflowX: "hidden" }}>
        <Header />

        {/* <PaymentSuccess open={open} onClick={setOpen} invoice={invoice} /> */}
        <ShopSection {...rest} />
        <Divider />

        {/* <Footer {...rest} /> */}
      </div>
    </div>
  );
}
