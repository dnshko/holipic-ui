import React, { Component } from "react";
import Carousel from "./component/carousel";
class FeatureSection extends Component {
  state = {
    data: {
      heading: "In-Store Desktop App",
      content:
        "Online or Offline no matter, Holipic desktop is the best photo selling, image processing and internal managing app for stores to automate whole photography opertaions.",
    },
    featureData: [
      {
        title: "Photo Editor",
        image:
          "/img/baseline_/img/baseline_settings_black_48dp.png_black_48dp.png",
        description:
          "Edit images beautifully without upload or download images or purchasing 3rd party editing softwares. Save time and secure images with doing all jobs internally.",
      },
      {
        title: "Eye-Catch Selling Page",
        image: "/img/round_cloud_black_48dp.png",
        description:
          "Eye-Catch Selling Page beautifully designed to increase your selling. Simply create your own price list and packages let your clients easily process purchases in the store.",
      },
      {
        title: "Face Recognition",
        image: "/img/round_verified_user_black_48dp.png",
        description:
          "One of the best feature in Holipic App is to find photos easily with face recognition from thousands of images. Save a lot time for you and for your customers.",
      },
    ],
  };
  render() {
    return (
      <section
        id="benefits"
        className="section features-area bg-gray style-two overflow-hidden ptb_50"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-6">
              {/* Section Heading */}
              <div className="section-heading">
                <h2 style={{ fontSize: 30 }}>{this.state.data.heading}</h2>
                <p className="d-sm-block">
                  {this.state.data.content}
                  <br />
                  {this.state.data.subcontent}
                </p>
              </div>
            </div>
          </div>
          <div className="row" style={{ marginTop: 0 }}>
            <div className="col-md-6 col-12 pb-3">
              <Carousel id={"desktop"} />
            </div>
            <div className="col-12 col-md-6">
              <div className="row" style={{ marginTop: -30 }}>
                {this.state.featureData.map((item, idx) => {
                  return (
                    <div key={`fo_${idx}`} className="col-12 mt-4">
                      {/* <div className="box p-3 bg-white">
                                                <h5 className="">{item.title}</h5>
                                                <p style={{fontSize: 12}}>{item.description}</p>
                                            </div> */}
                      <div className="image-box media px-3 py-3 py-md-3 bg-white">
                        {/* Featured Image */}
                        {/* Icon Text */}
                        <div className="icon-text media-body align-self-center align-self-md-start py-1 px-3">
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
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}

export default FeatureSection;
