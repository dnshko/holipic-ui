import React, { Component } from "react";

const initData = {
  heading: "Make cool Landing pages with sApp",
  content:
    "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Impedit nihil tenetur minus quidem est deserunt molestias accusamus harum ullam tempore debitis et, expedita, repellat delectus aspernatur neque itaque qui quod.",
  headingSlug: "* Available on iPhone, iPad and all Android devices",
  playImg: "/img/google-play.png",
  appleImg: "/img/app-store.png",
  heroThumb: "/img/welcome_mockup.png",
};

class HeroSection extends Component {
  state = {
    data: {},
  };
  componentDidMount() {
    this.setState({
      data: initData,
    });
  }
  render() {
    return (
      <section
        id="home"
        class="section welcome-area  overflow-hidden d-flex align-items-center"
      >
        <div class="container">
          <div class="row align-items-center">
            <div class="col-12 col-md-7 col-lg-6">
              <div class="welcome-intro">
                <h2 class="" style={{ fontSize: "30px" }}>
                  Holipic Automated Photo Selling System
                </h2>
                <h3 class="">to increase your buisness</h3>
                <h6 class=" my-4">
                  Hopilic Apps is multi-channel kiosk for any kind of
                  photography buisness, stores and chains that allows you to
                  sell photos privately in-store and online.
                </h6>
                <h6 class="d-inline-block  ">
                  Your staff capture the images and our automated system does
                  the rest!
                </h6>
              </div>
            </div>
            <div class="col-12 col-md-5 col-lg-6">
              <div class="welcome-thumb mx-auto">
                <img src={this.state.data.heroThumb} alt="" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default HeroSection;
