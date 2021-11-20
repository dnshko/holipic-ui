import React, { Component, useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/pCard";
import Card1 from "./components/pCard1";
import AppBar from "./components/AppBar";
import Stepper from "../Stepper/index.js";
import { Grid, Hidden } from "@material-ui/core";

function ShopSection(props) {
  // const state = {
  //   data: {
  //     heading: "Our Exciting Benefits",
  //     content:
  //       "Holipics Apps fully-integerated all of your photography activity from shoot till sold images.",
  //     subcontent: "You can gain selling benefits from this porduct.",
  //   },
  //   featureData: [
  //     {
  //       title: "Easy to Manage Easy to Manage",
  //       image: "/assets/img/download.jpg",
  //       description:
  //         "Holipic App Dashboard is where you fully manage your stores. It is intuitive, easy to use and provides a ton of features to customize stores exactly the way you want.",
  //     },
  //     {
  //       title: "Cloud Storage",
  //       image: "/assets/img/download1.jpg",
  //       description:
  //         "Storing all data online cut the risk of losing photos and mistakes by human or hardware factors and helps easy to check your buisness in real-time.",
  //     },
  //     {
  //       title: "Security & Compliance",
  //       image: image,
  //       description:
  //         "Providing secure digital services save a lot from CD, DVD or flash disk costs also protects companies from manual sales and employee mistakes.",
  //     },
  //     {
  //       title: "Fully Automation",
  //       image: image1,
  //       description:
  //         "Automated process of accepting photo order for you buisness. Leave works on computers, make your staff busy with important things.",
  //     },
  //     {
  //       title: "Promotional Sellings",
  //       image: image,
  //       description:
  //         "Automatic promotional emails allow the companies to increase their sales and continue to sell photos even customers back to home.",
  //     },
  //     {
  //       title: "Technology",
  //       image: image1,
  //       description:
  //         "A lot of features such as notifications, video records, offline apps, green screen, Bluetooth POS, direct image transfer, Qr scan and support almost all devices.",
  //     },
  //   ],
  // };

  const [data, setData] = useState([
    {
      id: "1",
      name: "lens A",
      code: "LNS-A",
      quantity: 1,
      price: 19,
      stock: 10,
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "Lens a",
      description: " Lens A",
      specification: "Specs",
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270,https://images.unsplash.com/photo-1453728013993-6d66e9c9123a?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8dmlld3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&w=100&q=80",
    },

    {
      id: "2",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "3",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "4",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "5",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "6",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "7",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "8",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "9",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "10",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "11",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "12",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "13",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "14",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "15",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "16",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "17",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "18",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "19",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "20",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "21",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "22",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "23",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "24",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "25",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "26",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "27",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "28",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "29",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
    {
      id: "30",
      image:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      title: "test",
      price: 10,
      o_images:
        "https://images.ctfassets.net/hrltx12pl8hq/61DiwECVps74bWazF88Cy9/2cc9411d050b8ca50530cf97b3e51c96/Image_Cover.jpg?fit=fill&w=480&h=270",
      specification: "asd",
      description: "test",
    },
  ]);

  //   useEffect(() => {
  //     axios
  //       .get(config.hostUrl + "/api/products/list")
  //       .then((res) => {
  //         console.log(res.data);
  //         setData(res.data);
  //       })
  //       .catch((err) => {
  //         console.log(err.response.data);
  //       });
  //   }, []);

  return (
    <section
      id="benefits"
      className="section features-area style-two overflow-hidden ptb_50"
    >
      <div className="container">
        <div className="row">
          <AppBar {...props} />
        </div>

        <Hidden xsDown>
          <div className="row justify-content-center">
            {data.map((item, idx) => {
              return (
                <div
                  key={`fo_${idx}`}
                  className="col-6 col-sm-6 col-md-4 col-lg-2 mt-3"
                >
                  {/* Image Box */}
                  <div className="box-card">
                    <Card item={item} />
                  </div>
                </div>
              );
            })}
          </div>
        </Hidden>
        <Hidden smUp>
          <div className="row">
            {data.map((item, idx) => {
              return (
                <div key={`fo_${idx}`} className="col-6 mt-3">
                  {/* Image Box */}
                  <div className="box-card">
                    <Card1 item={item} />
                  </div>
                </div>
              );
            })}
          </div>
        </Hidden>
      </div>
    </section>
  );
}

export default ShopSection;

// {/* Featured Image */}
// <div className="mb-3">
// <img style={{height:80, width:80}} src={item.image} alt="" />
// </div>
// {/* Icon Text */}
// <div >
{
  /* <h3 className="mb-2">{item.title}</h3>
<p>{item.description}</p> */
}
// </div>

// {/* <div key={`fo_${idx}`} className="col-12 col-md-4 mt-4">
// {/* Image Box */}
// {/* <div className="image-box p-3">
//     <Card data={item} />
// </div> */}
// <div className="image-box text-center p-4">
//     {/* Featured Icon */}
//     <div className="featured-icon mb-3">
//         <img className="avatar-sm" src={item.image}/>
//     </div>
//     {/* Icon Text */}
//     <div className="icon-text">
//         <h3 className="mb-2">{item.title}</h3>
//         <p>{item.description}</p>
//     </div>
// </div>
// </div> */}
