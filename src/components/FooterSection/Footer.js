import React, { Component } from "react";
import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/themeland/json-server-1/themeOneFooterSection";

class FooterSection extends Component {
  state = {
    data: {
      image: "/img/logo.png",
      text: "We Accept",
      linkText_1: "Company",
      linkText_2: "Legal",
      linkText_3: "Contact Us",
    },
    iconList: [
      {
        id: 1,
        link: "apple",
        iconClass: "fab fa-cc-visa",
      },
      {
        id: 2,
        link: "twitter",
        iconClass: "fab fa-cc-mastercard",
      },
    ],
    footerList_1: [
      {
        id: 1,
        text: "Home",
      },
      {
        id: 2,
        text: "Investment",
      },
      {
        id: 3,
        text: "Partnership",
      },
    ],
    footerList_2: [
      {
        id: 1,
        text: "Terms & Conditions",
      },
      {
        id: 2,
        text: "Privacy Policy",
      },
      {
        id: 3,
        text: "Refund Policy",
      },
    ],
    footerList_3: [
      {
        id: 1,
        text: "Jl. Melasti No. 1 Legian, Kuta, Bali/Indonesia 80361",
      },
      {
        id: 2,
        text: "holipic@gmail.com",
      },
      {
        id: 3,
        text: "WA: (+62) 8113937070",
      },
    ],
  };
  //   componentDidMount() {
  //     axios
  //       .get(`${BASE_URL}`)
  //       .then((res) => {
  //         this.setState({
  //           data: res.data,
  //           iconList: res.data.iconList,
  //           footerList_1: res.data.footerList_1,
  //           footerList_2: res.data.footerList_2,
  //           footerList_3: res.data.footerList_3,
  //         });
  //         // console.log(this.state.data)
  //       })
  //       .catch((err) => console.log(err));
  //   }
  render() {
    return (
      <div>
        <div className="height-emulator d-none d-lg-block" />
        <footer className="footer-area footer-fixed">
          {/* Footer Top */}
          <div className="footer-top ptb_100">
            <div className="container">
              <div className="row">
                <div className="col-12 col-sm-6 col-lg-3">
                  {/* Footer Items */}
                  <div className="footer-items">
                    {/* Footer Title */}
                    <h3 className="footer-title mb-2">
                      {this.state.data.linkText_1}
                    </h3>
                    <ul>
                      {this.state.footerList_1.map((item, idx) => {
                        return (
                          <li key={`flo_${idx}`} className="py-2">
                            <a href="/#">{item.text}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  {/* Footer Items */}
                  <div className="footer-items">
                    {/* Footer Title */}
                    <h3 className="footer-title mb-2">
                      {this.state.data.linkText_2}
                    </h3>
                    <ul>
                      {this.state.footerList_2.map((item, idx) => {
                        return (
                          <li key={`flt_${idx}`} className="py-2">
                            <a href="/#">{item.text}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  {/* Footer Items */}
                  <div className="footer-items">
                    {/* Footer Title */}
                    <h3 className="footer-title mb-2">
                      {this.state.data.linkText_3}
                    </h3>
                    <ul>
                      {this.state.footerList_3.map((item, idx) => {
                        return (
                          <li key={`flt_${idx}`} className="py-2">
                            <a href="/#">{item.text}</a>
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
                <div className="col-12 col-sm-6 col-lg-3">
                  {/* Footer Items */}
                  <div className="footer-items">
                    <h3 className="footer-title mb-2">
                      {this.state.data.text}
                    </h3>
                    {/* Social Icons */}
                    <div className="social-icons d-flex ">
                      {this.state.iconList.map((item, idx) => {
                        return (
                          <a
                            key={`fi_${idx}`}
                            style={{ backgroundColor: "black" }}
                            href="/#"
                          >
                            <i className={item.iconClass} />
                            <i className={item.iconClass} />
                          </a>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Footer Bottom */}
          <div className="footer-bottom">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  {/* Copyright Area */}
                  <div className="copyright-area d-flex flex-wrap justify-content-center justify-content-sm-between text-center py-4">
                    {/* Copyright Left */}
                    <div className="copyright-left">
                      © 2021 Holipic App. All Rights Reserved.
                    </div>
                    {/* Copyright Right */}
                    {/* <div className="copyright-right">
                      Made with <i className="fas fa-heart" /> By{" "}
                      <a href="/#"></a>
                    </div> */}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </footer>
      </div>
    );
  }
}

export default FooterSection;
