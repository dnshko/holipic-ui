import React, { Component } from "react";

const initData = {
  heading: "Holipic App is available for all devices.",
  headingText:
    "Holipic Apps support 100% to almost all of opertaing systems for your convenience, without requiring to any company to use a specific device or platgorm.",
  headingTexttwo:
    "Holipic Apps support 100% to almost all of opertaing systems for your convenience, without requiring to any company to use a specific device or platgorm.",
  headingSlug:
    "* Available on iPhone, iPad, MacOS, Windows and all Android devices",
  playImg: "/img/google-play.png",
  appleImg: "/img/app-store.png",
  macImg: "/img/mac.png",
  windowsImg: "/img/windows.PNG",
};

class Download extends Component {
  state = {
    initData: {},
  };
  componentDidMount() {
    this.setState({
      initData: initData,
    });
  }
  render() {
    return (
      <section className="section download-area overlay-dark ptb_100">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-md-10 col-lg-12 col-sm-12">
              {/* Download Text */}
              <div className="download-text text-center">
                <h2 className="text-white">{this.state.initData.heading}</h2>
                <p className="text-white my-3 d-none d-sm-block">
                  {this.state.initData.headingText}
                </p>
                <p className="text-white my-3 d-block d-sm-none">
                  {this.state.initData.headingTexttwo}
                </p>
                {/* Store Buttons */}
                <div className="button-group store-buttons  justify-content-around">
                  <a href="/#">
                    <img
                      src={this.state.initData.playImg}
                      alt=""
                      style={{ margin: "10px" }}
                    />
                  </a>
                  <a href="/#">
                    <img
                      src={this.state.initData.appleImg}
                      alt=""
                      style={{ margin: "10px" }}
                    />
                  </a>
                  <a href="/#">
                    <img
                      src={this.state.initData.macImg}
                      alt=""
                      style={{ margin: "10px" }}
                    />
                  </a>
                  <a href="/#">
                    <img
                      src={this.state.initData.windowsImg}
                      alt=""
                      style={{ margin: "10px" }}
                    />
                  </a>
                </div>
                <span className="d-inline-block text-white fw-3 font-italic mt-3">
                  {this.state.initData.headingSlug}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default Download;
