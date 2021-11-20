import React, { Component } from "react";
import Carousel from "./component/carousel";
const data1 = [
  {
    image: "/img/9.Greenscreen View.jpg",
  },
  {
    image: "/img/screenshot_2.jpg",
  },
  {
    image: "/img/screenshot_3.jpg",
  },
  {
    image: "/img/screenshot_4.jpg",
  },
  {
    image: "/img/screenshot_5.jpg",
  },
];
class FeatureSection extends Component {
  state = {
    data: {
      heading: "Photographer Mobile App",
      content:
        "Holipics Apps fully-integerated all of your photography activity from shoot till sold images. You can gain selling benefits from this porduct.",
    },
    featureData: [
      {
        title: "Green Screen",
        image: "/img/baseline_settings_black_48dp.png",
        description:
          "May be weather is bad or need something creative, don't worry holipic always here for you to provide best automated solutions.",
      },
      {
        title: "Statistics",
        image: "/img/round_cloud_black_48dp.png",
        description:
          "Photographers always curious about their clients. Compare how effective your job, bookings, sales with the statistics & monitor real-time activity.",
      },
      {
        title: "Bookings",
        image: "/img/round_verified_user_black_48dp.png",
        description:
          "Photographer app will help you to record your bookings easily. Make schedules with no more using manual books.",
      },
      {
        title: "QR Code Photo Pass",
        image: "/img/outline_memory_black_48dp.png",
        description:
          "There is a lot clients, how to categorise all? Don't worry Holipic will help to shoot, scan and share with photo pass QR code system.",
      },
    ],
  };
  render() {
    return (
      <section
        id="benefits"
        className="section features-area style-two overflow-hidden ptb_50"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-7">
              {/* Section Heading */}
              <div className="section-heading">
                <h2 style={{ fontSize: 30 }}>{this.state.data.heading}</h2>
                <p className="d-sm-block " style={{ marginBottom: "40px" }}>
                  {this.state.data.content}
                  <br />
                  {this.state.data.subcontent}
                </p>
              </div>
              {/* </div>
                    </div>
                    <div className="row">
                        <div className="col-12 col-md-7"> */}
              <div className="row" style={{ marginTop: -50 }}>
                {this.state.featureData.map((item, idx) => {
                  return (
                    <div
                      key={`fo_${idx}`}
                      className="col-12 col-md-6 col-lg-6 mt-4"
                    >
                      <div
                        className="image-box media px-2 py-3 py-md-3"
                        align="center"
                      >
                        {/* Featured Image */}
                        {/* Icon Text */}
                        <div className="icon-text media-body align-self-center align-self-md-start py-1 px-4">
                          <h4
                            className=""
                            style={{ fontSize: 16, lineHeight: 1.3 }}
                          >
                            {item.title}
                          </h4>
                          <p style={{ fontSize: 12, lineHeight: "20px" }}>
                            {item.description}
                          </p>
                        </div>
                      </div>
                      {/* <div className="feature-box">
                                                <Card data={item} />
                                            </div> */}
                    </div>
                  );
                })}
              </div>
            </div>
            <div className="col-md-5 col-sm-12 mt-4 ptb_50">
              {/* App Screenshot Slider Area */}
              <Carousel id="mobile" />
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeatureSection;
