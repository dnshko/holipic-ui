import React, { Component } from "react";
import axios from "axios";

const BASE_URL =
  "https://my-json-server.typicode.com/themeland/sapp/themeOneWorkSection";

class Work extends Component {
  state = {
    data: {
      heading: "How it works?",
      headingText:
        "We Introduce patented technologies that improve the way hotels, resorts, aqua parks, theme parks, attractions, tours, event guests to interact with, buy and share their vacation memories are cherished. From creating new ways to display images in hard copy, to enabling every guest to purchase them the photos in a digital form, the Holipic Apps is the only company able to meet the challenges this.",
    },
    workData: [
      {
        id: 1,
        image: "/img/work_thumb_1.png",
        title: "Install the App",
        content:
          "We offer a secure digital e-commerce service to anyone to sell easily photos. Get started selling photos on Holipic Apps in just a minutes using our simple links and apps.",
      },
      {
        id: 2,
        image: "/img/work_thumb_2.png",
        title: "Setup your company",
        content:
          "Holipic Apps makes It easy to manage multiple stores from the same account. You can add as many stores, photographers, as you wish, each with own access.",
      },
      {
        id: 3,
        image: "/img/work_thumb_3.png",
        title: "Enjoy the features!",
        content:
          "Holipic Apps automates shot, share, order fulfillment process. Leave monotonous works to the devices. Your customers will be much happier with your quality services.",
      },
    ],
  };
  // componentDidMount(){
  //     axios.get(`${BASE_URL}`)
  //         .then(res => {
  //             this.setState({
  //                 data: res.data,
  //                 workData: res.data.workData
  //             })
  //             // console.log(this.state.data)
  //         })
  //     .catch(err => console.log(err))
  // }
  render() {
    return (
      <section
        className="section work-area bg-overlay overflow-hidden ptb_50"
        id="work"
      >
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-12 col-lg-6">
              {/* Work Content */}
              <div className="work-content text-center">
                <h2 className="text-white">{this.state.data.heading}</h2>
                <p className="text-white my-3 mt-sm-4 mb-sm-5">
                  {this.state.data.headingText}
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {this.state.workData.map((item, idx) => {
              return (
                <div key={`w_${idx}`} className="col-12 col-md-4">
                  {/* Single Work */}
                  <div className="single-work text-center p-3">
                    {/* Work Icon */}
                    <div className="work-icon">
                      <img className="avatar-md" src={item.image} alt="" />
                    </div>
                    <h3 className="text-white py-3">{item.title}</h3>
                    <p className="text-white">{item.content}</p>
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

export default Work;
