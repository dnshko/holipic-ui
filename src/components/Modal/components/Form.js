import React, { useState, useEffect } from "react";

import { withStyles, makeStyles } from "@material-ui/core/styles";
import Input from "@material-ui/core/Input";
import InputLabel from "@material-ui/core/InputLabel";
import InputAdornment from "@material-ui/core/InputAdornment";
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Button from "@material-ui/core/Button";
import Hidden from "@material-ui/core/Hidden";
import OutlinedInput from "@material-ui/core/OutlinedInput";
import SuccessModal from "../Success.jsx";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import CustomInput from "./input";
import CustomSelect from "./select";
import axios from "axios";
import config from "../../../config";

function Form(props) {
  const { handleClose, onSuccess, type, referId } = props;
  var [countries, setCountries] = useState([]);
  var [cities, setCities] = useState([]);

  const inputs = [
    {
      id: "name",
      placeholder: "Enter Your Full Name",
      type: "text",
      icon: "fas fa-user-alt",
      fullWidth: true,
      options: [],
    },
    {
      id: "cName",
      placeholder: "Enter Company Name",
      type: "text",
      icon: "fas fa-building",
      fullWidth: true,
      options: [],
    },
    {
      id: "cAddress",
      placeholder: "Enter Company Address",
      type: "text",
      icon: "fas fa-building",
      fullWidth: true,
      options: [],
    },
    {
      id: "country",
      placeholder: "Select Country",
      type: "select",
      icon: "fas fa-globe",
      fullWidth: false,
      options: countries,
    },
    {
      id: "city",
      placeholder: "Select Your City",
      type: "select",
      icon: "fas fa-globe",
      fullWidth: false,
      options: cities,
    },
    {
      id: "phone",
      placeholder: "Enter Phone Number",
      type: "tel",
      icon: "fas fa-phone",
      fullWidth: true,
      options: [],
    },
    {
      id: "email",
      placeholder: "Enter Your Email",
      type: "email",
      icon: "fas fa-envelope",
      fullWidth: true,
      options: [],
    },
    {
      id: "password",
      placeholder: "Create Your Password",
      type: "password",
      icon: "fas fa-lock",
      fullWidth: true,
      options: [],
    },
    {
      id: "package",
      placeholder: "Select Your Subscription Package",
      type: "select",
      icon: "fas fa-tag",
      fullWidth: true,
      options: [
        { name: "Monthly", value: 0 },
        { name: "Yearly", value: 1 },
      ],
    },
  ];
  const onSubmit = () => {
    var a = window["$"]("#submitForm input");
    var full_name = a[0].value;
    var company_name = a[1].value;
    var company_address = a[2].value;
    var country_id = a[3].value;
    var city_id = a[4].value;

    var phone = a[5].value;
    var email = a[6].value;
    var password = a[7].value;
    var package_id = a[8].value;

    console.log(full_name, company_name, company_address, country_id, city_id);
    console.log(phone, email, password, package_id);

    axios
      .post(config.hostUrl + "/api/auth/register", {
        full_name,
        company_name,
        company_address,
        country_id,
        city_id,
        phone,
        email,
        password,
        package_id,
        referId,
      })
      .then((d) => {
        console.log(d.data);
      })
      .catch((err) => {
        console.log(err);
      });

    handleClose();
    onSuccess(true);
  };

  useEffect(() => {
    axios
      .get(config.hostUrl + "/api/countries/list")
      .then((d) => {
        inputs.find((i) => i.id == "country").options = d.data;
        setCountries(d.data);
        console.log(d.data);
      })
      .catch((err) => err);

    //countries = cReq.data;
  }, []);

  const onChangeCountry = (id) => {
    axios
      .get(config.hostUrl + "/api/countries/cities-of-country/" + id)
      .then((d) => {
        inputs.find((i) => i.id == "city").options = d.data;
        setCities(d.data);
        console.log(d.data);
      })
      .catch((err) => err);
  };

  return (
    <div>
      <form id="submitForm">
        {inputs.map((input, index) => {
          if (input.type === "select") {
            if (input.id === "country") {
              return (
                <div
                  className="mt-3"
                  key={index}
                  style={{ display: "inline-block", width: "45%" }}
                >
                  <CustomSelect
                    input={input}
                    stype={type}
                    onChange={onChangeCountry}
                  />
                </div>
              );
            } else if (input.id === "city") {
              return (
                <div
                  className="mt-3 ml-4"
                  key={index}
                  style={{ display: "inline-block", width: "45%" }}
                >
                  <CustomSelect
                    input={input}
                    stype={type}
                    style={{ float: "right" }}
                  />
                </div>
              );
            }
            return (
              <div className="mt-3" key={index}>
                <CustomSelect
                  input={input}
                  selected={type == "1" ? "1" : "2"}
                />
              </div>
            );
          } else {
            return (
              <div className="mt-3" key={index}>
                <CustomInput item={input} />
              </div>
            );
          }
        })}
        <div className="form-group form-check mt-3">
          <input
            type="checkbox"
            className="form-check-input"
            id="exampleCheck1"
          />
          <label className="form-check-label" for="exampleCheck1">
            I read and agree to <strong>Terms {"&"} Conditions.</strong>
          </label>
        </div>
        <Hidden xsDown>
          <div className="form-group">
            <button class="btn" type="button" onClick={() => onSubmit()}>
              Sign Up
            </button>{" "}
            have an account?
            <a
              style={{ marginLeft: 5, color: "#1DA5E8", cursor: "pointer" }}
              onClick={() => props.props.history.push("/login")}
            >
              Sign In
            </a>
          </div>
        </Hidden>
        <Hidden smUp>
          <div className="form-group">
            <button class="btn" type="button" onClick={() => onSubmit()}>
              Sign Up
            </button>
            <br></br>
            <br></br> have an account?
            <a
              style={{ marginLeft: 5, color: "#1DA5E8", cursor: "pointer" }}
              onClick={() => props.props.history.push("/login")}
            >
              Sign In
            </a>
          </div>
        </Hidden>
      </form>
    </div>
  );
}
export default Form;
