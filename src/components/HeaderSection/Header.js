import { turn } from "cli-table";
import React, { useState } from "react";
import Register from "../../components/Modal/Register";
import Register1 from "../Modal/Register1.jsx";
import SuccessModal from "../Modal/Success.jsx";
import SuccessModal1 from "../Modal/Success1.jsx";
import { Link } from "react-router-dom";
import { Hidden } from "@material-ui/core";
const Header = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [type, setType] = useState(0);
  return (
    <div>
      <Hidden smUp>
        <Register1
          open={open}
          onClick={setOpen}
          onSuccess={setSuccess}
          {...props}
          type={type}
        />
        <SuccessModal1 open={success} onClick={setSuccess} />
      </Hidden>
      <Hidden xsDown>
        <Register
          open={open}
          onClick={setOpen}
          onSuccess={setSuccess}
          {...props}
          type={type}
        />
        <SuccessModal open={success} onClick={setSuccess} />
      </Hidden>
      <header
        className={`navbar navbar-sticky navbar-expand-lg ${
          isOpen === true ? "active" : ""
        }`}
      >
        <div className="container position-relative">
          <Link className="navbar-brand" to="/">
            <img
              className="navbar-brand-regular brand-logo"
              src="/img/logo.png"
              alt="brand-logo"
            />
            <img
              className="navbar-brand-sticky brand-logo"
              src="/img/logo.png"
              alt="sticky brand-logo"
            />
          </Link>
          <button
            className="navbar-toggler d-lg-none"
            type="button"
            // data-toggle="navbarToggler"
            aria-label="Toggle navigation"
            onClick={toggle}
          >
            <span
              className={`navbar-toggler-icon ${
                isOpen === true ? "active" : ""
              }`}
            />
          </button>
          <div className="navbar-inner">
            {/*  Mobile Menu Toggler */}
            <button
              className="navbar-toggler d-lg-none"
              type="button"
              // data-toggle="navbarToggler"
              aria-label="Toggle navigation"
              onClick={toggle}
            >
              <span
                className={`navbar-toggler-icon ${
                  isOpen === true ? "active" : ""
                }`}
              />
            </button>
            <nav>
              <ul className="navbar-nav" id="navbar-nav">
                <li className="nav-item" onClick={toggle}>
                  <a className="nav-link scroll" href="#home">
                    Home
                  </a>
                </li>
                <li className="nav-item" onClick={toggle}>
                  <a className="nav-link scroll" href="#features">
                    Benefits
                  </a>
                </li>
                <li className="nav-item" onClick={toggle}>
                  <a className="nav-link scroll" href="#work">
                    How it work
                  </a>
                </li>
                <li className="nav-item" onClick={toggle}>
                  <a className="nav-link scroll" href="#apps">
                    APPS
                  </a>
                </li>
                <li className="nav-item" onClick={toggle}>
                  <a className="nav-link scroll" href="#pricing">
                    Pricing
                  </a>
                </li>
                <li
                  className="nav-item"
                  onClick={() => {
                    setType(0);
                    setOpen(true);
                    toggle();
                  }}
                >
                  <a className="nav-link scroll" href="#">
                    Register
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/#"
                    id="navbarDropdownMenuLink"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    EN
                  </a>
                  <ul
                    className="dropdown-menu"
                    aria-labelledby="navbarDropdownMenuLink"
                  >
                    <li className="dropdown-submenu">
                      <a
                        className="dropdown-item dropdown-toggle"
                        href="/#"
                        data-toggle="dropdown"
                      >
                        English
                      </a>
                    </li>
                  </ul>
                </li>
                {/* <li className="nav-item" onClick={toggle}> */}
                <li className="nav-item">
                  <Link className="nav-link" to="/shop">
                    Shop
                  </Link>
                </li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Header;
