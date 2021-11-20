import React, { useState, useEffect } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { Divider, Hidden, Slide } from "@material-ui/core";
import { Link } from "react-router-dom";
import Badge from "../Badge/badge";
import CartModal from "../Section/components/cartModal";
import CartModal1 from "../Section/components/cartModal1";
function Header(props) {
  const [open, setOpen] = useState(false);

  return (
    <div>
      <Hidden xsDown>
        <CartModal open={open} onClick={setOpen} />
      </Hidden>

      <Hidden smUp>
        <CartModal1 open={open} onClick={setOpen} />
      </Hidden>
      <header className="navbar navbar-sticky navbar-expand-lg ">
        <div className="container position-relative">
          <a className="navbar-brand" href="/">
            <img
              className="navbar-brand-regular"
              style={{ width: 50, height: 50 }}
              src={props.logo}
              alt="brand-logo"
            />
            <img
              className="navbar-brand-sticky"
              style={{ width: 50, height: 50 }}
              src={props.logo}
              alt="sticky brand-logo"
            />
          </a>
          <div className="navbar-toggler d-lg-none">
            <Badge onClick={setOpen} />
          </div>
          <div className="navbar-inner ">
            {/*  Mobile Menu Toggler */}
            <nav>
              <ul className="navbar-nav" id="navbar-nav">
                <li className="nav-item">
                  <Badge onClick={setOpen} />
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
