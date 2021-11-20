import React, { Component } from "react";
import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/themeland/sapp/themeOneFeatureSection";

class FeatureSection extends Component {
  state = {
    data: {},
    featureData: [
      {
        id: 1,
        image: "/img/featured_image_1.png",
        title: "Easy to Manage",
        text: "Holipic App Dashboard is where you fully manage your stores. It is intuitive, easy to use and provides a ton of features to customize stores exactly the way you want.",
      },
      {
        id: 2,
        image: "/img/featured_image_2.png",
        title: "Cloud Storage",
        text: "Storing all data online cut the risk of losing photos and mistakes by human or hardware factors and helps easy to check your buisness in real-time.",
      },
      {
        id: 3,
        image: "/img/featured_image_3.png",
        title: "Security & Compliance",
        text: "Providing secure digital services save a lot from CD, DVD or flash disk costs also protects companies from manual sales and employee mistakes.",
      },
      {
        id: 4,
        image: "/img/featured_image_4.png",
        title: "Fully Automation",
        text: "Automated process of accepting photo order for you buisness. Leave works on computers, make your staff busy with important things.",
      },
      {
        id: 5,
        image: "/img/featured_image_5.png",
        title: "Promotional Sellings",
        text: "Automatic promotional emails allow the companies to increase their sales and continue to sell photos even customers back to home.",
      },
      {
        id: 6,
        image: "/img/featured_image_6.png",
        title: "Technology",
        text: "A lot of features such as notifications, video records, offline apps, green screen, Bluetooth POS, direct image transfer, Qr scan and support almost all devices.",
      },
    ],
  };
  //   componentDidMount() {
  //     axios
  //       .get(`${BASE_URL}`)
  //       .then((res) => {
  //         this.setState({
  //           data: res.data,
  //           featureData: res.data.featureData,
  //         });
  //         // console.log(this.state.data)
  //       })
  //       .catch((err) => console.log(err));
  //   }
  render() {
    return (
      <section
        id="features"
        className="section features-area style-two overflow-hidden ptb_100"
      >
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-10 col-lg-7">
              {/* Section Heading */}
              <div className="section-heading">
                <h2>Our Exciting Benefits</h2>
                <p className="d-none d-sm-block">
                  Holipics Apps fully-integerated all of your photography
                  activity from shoot till sold images. You can gain selling
                  benefits from this porduct.
                </p>
                <p className="d-block d-sm-none">
                  Holipics Apps fully-integerated all of your photography
                  activity from shoot till sold images. You can gain selling
                  benefits from this porduct.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {this.state.featureData.map((item, idx) => {
              return (
                <div
                  key={`fo_${idx}`}
                  className="col-12 col-md-6 col-lg-6 res-margin mt-4"
                >
                  {/* Image Box */}
                  <div className="image-box media px-1 py-3 py-md-3">
                    {/* Featured Image */}
                    <div className="featured-img mb-3 mr-4">
                      <img className="avatar-ow" src={item.image} alt="" />
                    </div>
                    {/* Icon Text */}
                    <div className="icon-text" style={{ minHeight: "100px" }}>
                      <h3 className="mb-2">{item.title}</h3>
                      <p>{item.text}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    );
  }
}

export default FeatureSection;
