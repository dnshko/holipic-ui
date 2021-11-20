import React, { useState, useEffect } from "react";
import axios from "axios";
import ArrowForwardIosIcon from "@material-ui/icons/ArrowForwardIos";
import Register from "../../components/Modal/Register";
import Register1 from "../Modal/Register1.jsx";
import SuccessModal from "../Modal/Success.jsx";
import SuccessModal1 from "../Modal/Success1.jsx";

import { Hidden } from "@material-ui/core";
import config from "../../config";
import { withStyles } from "@material-ui/core/styles";
import { blue } from "@material-ui/core/colors";
import Radio from "@material-ui/core/Radio";

const BlueRadio = withStyles({
  root: {
    color: blue[400],
    "&$checked": {
      color: blue[600],
    },
  },
  checked: {},
})((props) => <Radio color="default" {...props} />);

const data = [
  {
    label: "Online Storage",
    item: "60 days",
    item1: "60 days",
  },
  {
    label: "Image Upload",
    item: "30.000",
    item1: "30.000",
  },
  {
    label: "In-Store App",
    item: "Yes",
    item1: "Yes",
  },
  {
    label: "Camera App",
    item: "Yes",
    item1: "Yes",
  },
  {
    label: "Photo Editor",
    item: "Yes",
    item1: "Yes",
  },
  {
    label: "Green Screen",
    item: "Yes",
    item1: "Yes",
  },
  {
    label: "Booking Page",
    item: "Yes",
    item1: "Yes",
  },
  {
    label: "Auto Emailing",
    item: "Yes",
    item1: "Yes",
  },
  {
    label: "SMS",
    item: "Yes",
    item1: "Yes",
  },
];
function PricingSection(props) {
  const [open, setOpen] = useState(false);
  const [success, setSuccess] = useState(false);
  const [type, setType] = useState(0);

  //const [data, setData] = useState([]);
  const [_data, _setData] = useState([]);

  const [selectedValue, setSelectedValue] = React.useState("a");

  const handleChange = (event) => {
    setSelectedValue(event.target.value);
  };

  // useEffect(() => {
  //   axios
  //     .get(config.hostUrl + "/api/packages/list")
  //     .then((res) => {
  //       console.log(res.data);
  //       _setData(res.data);
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //     });
  // }, []);

  return (
    <section
      id="pricing"
      className="section price-plan-area overflow-hidden ptb_50"
    >
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

      <div className="container">
        <div className="row">
          <div className="col-12 col-md-5">
            {/* Section Heading */}
            <div className="section-heading">
              <h2 style={{ fontSize: 30 }}>Pricing</h2>
              <p className="mt-1">
                Holipics Photo Selling Systems are based monthly or annualy and
                there is online promotion which is increase sales.
              </p>
              <p className="mt-3">
                <strong>It{"'"}s a win-win.</strong>
              </p>
              <p className="mt-3">
                Your online sales are automatically loaded into e-wallet, which
                is supporting your system fee not paying from your pocket, which
                means Holipic App can earn own payment by promoting and selling
                your photos.
              </p>

              <h3 className="mt-3 mb-3" style={{ color: "#1DA5E8" }}>
                <strong>Apply now {" & "} Get first month free.</strong>
              </h3>

              <div
                component="ul"
                style={{
                  listStyle: "none",
                  fontSize: 12,
                  color: "#333333",
                  marginTop: 20,
                }}
              >
                <li>
                  * Free first month promotion code will be sent after your
                  registration.
                </li>
                <li>
                  * Online store sellings charged 15%, included tax and payment
                  channel fee.
                </li>
                <li>
                  * Refer a friend fee is 25€ will be sent to you, after your
                  friend sign up.
                </li>
              </div>
              {/* <p className="d-none d-sm-block mt-4">{this.state.data.headingText}</p>
                                <p className="d-block d-sm-none mt-4">{this.state.data.headingTexttwo}</p> */}
            </div>
          </div>

          <div className="col-12 col-md-7">
            <div className="row price-plan-wrapper">
              <div className="col-12 col-md-6 col-sm-6  mt-3">
                <div
                  className="price-box bg-white "
                  align="center"
                  style={{ padding: 10 }}
                >
                  <div style={{ display: "inline-flex" }}>
                    <ul
                      style={{
                        listStyle: "none",
                        textAlign: "right",
                        padding: 5,
                        color: "#333333",
                      }}
                    >
                      {data.map((item, index) => {
                        return (
                          <li className="mb-3" key={index}>
                            <strong>{item.label}</strong>{" "}
                          </li>
                        );
                      })}
                    </ul>
                    <ul
                      style={{
                        listStyle: "none",
                        textAlign: "left",
                        padding: 5,
                        color: "#333333",
                      }}
                    >
                      <li className="mb-3">storage_days days</li>
                      <li className="mb-3">{30000}</li>
                      <li className="mb-3">{"Yes"}</li>
                      <li className="mb-3">Yes </li>
                      <li className="mb-3">No </li>
                      <li className="mb-3">No </li>
                      <li className="mb-3">Yes</li>
                      <li className="mb-3">Yes</li>
                      <li className="mb-3">Yes</li>
                    </ul>
                  </div>
                </div>
              </div>
              <div className="col-12 col-md-6 col-sm-6 mt-3">
                <div
                  className="price-box bg-white mb-5"
                  align="center"
                  style={{ borderRadius: "%25" }}
                >
                  <div className="row">
                    <div className="col-6 col-md-5"></div>
                    <div className="col-6 col-md-7 text-left">
                      <span
                        style={{
                          textDecoration: "line-through",
                          textAlign: "left",
                        }}
                      >
                        € 125
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 col-md-5">
                      <h4 className="display-5">Monthly</h4>
                    </div>
                    <div className="col-6 col-md-7 text-left">
                      <span
                        style={{
                          color: "#54bff0",
                          textAlign: "left",
                          fontSize: "24px",
                        }}
                      >
                        € 99
                      </span>
                      <span style={{ textAlign: "left" }}>
                        {" "}
                        <small>/ month</small>
                      </span>
                      <BlueRadio
                        component={"span"}
                        checked={selectedValue === "c"}
                        onChange={handleChange}
                        value="c"
                        name="radio-button-demo"
                        inputProps={{ "aria-label": "C" }}
                        size="small"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 col-md-6 ml-2">
                      <span style={{ color: "#999" }}>
                        {" "}
                        <small>Billed every month</small>
                      </span>
                    </div>
                  </div>
                </div>
                <div
                  className="price-box bg-white mb-5"
                  align="center"
                  style={{ borderRadius: "%25" }}
                >
                  <div className="row">
                    <div className="col-6 col-md-5"></div>
                    <div className="col-6 col-md-7 text-left">
                      <span
                        style={{
                          textDecoration: "line-through",
                          textAlign: "left",
                        }}
                      >
                        € 1188
                      </span>
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-6 col-md-5">
                      <h4 className="display-5">Annual</h4>
                    </div>
                    <div className="col-6 col-md-7 text-left">
                      <span
                        style={{
                          color: "#54bff0",
                          textAlign: "left",
                          fontSize: "24px",
                        }}
                      >
                        € 990
                      </span>
                      <span style={{ textAlign: "left" }}>
                        {" "}
                        <small>/ year</small>
                      </span>
                      <BlueRadio
                        component={"span"}
                        checked={selectedValue === "d"}
                        onChange={handleChange}
                        value="d"
                        name="radio-button-demo"
                        inputProps={{ "aria-label": "D" }}
                        size="small"
                      />
                    </div>
                  </div>
                  <div className="row">
                    <div className="col-12 col-md-12">
                      <span style={{ color: "#999" }}>
                        {" "}
                        <small>
                          Billed as one payment of € 990, 2 months free
                        </small>
                      </span>
                    </div>
                  </div>
                </div>

                <div
                  className=""
                  align="center"
                  style={{ backgroundColor: "#1DA5E8", borderRadius: 20 }}
                >
                  <button
                    className="btn  "
                    style={{
                      width: "100%",
                      color: "#FFFFFF",
                      borderRadius: 20,
                    }}
                    onClick={() => {
                      setType(0);
                      setOpen(true);
                    }}
                  >
                    Get Started <ArrowForwardIosIcon fontSize="small" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* <div className="row justify-content-center pt-5">
                        <p className="text-body pt-4 fw-5">{this.state.data.text} <a href="/#">{this.state.data.textLink}</a></p>
                    </div> */}
      </div>
    </section>
  );
}

export default PricingSection;
