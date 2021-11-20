import { Hidden } from "@material-ui/core";
import React from "react";
// import image1 from "../../assets/img/7.Auto Camera.jpg"
// import image2 from "../../assets/img/8.Refer a friend.jpg"

// import image11 from "../../assets/img/7.Auto Camera1.jpg"
// import image22 from "../../assets/img/8.Refer a friend1.jpg"

import LearnMore from "../Modal/LearnMore.jsx";
import LearnMore1 from "../Modal/LearnMore1.jsx";
export default function Index() {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  return (
    <section className="section bg-gray overflow-hidden">
      <div className="">
        <div className="row justify-content-center">
          <div className="col-12 col-lg-12">
            <Hidden xsDown>
              <LearnMore open={open} onClick={setOpen} />
            </Hidden>
            <Hidden smUp>
              <LearnMore1 open={open} onClick={setOpen} />
            </Hidden>
            <div className="row bg-gray" style={{ marginBottom: -20 }}>
              <Hidden smUp>
                <div className="col-md-5" style={{ borderRadius: 50 }}>
                  <div className="bg-overlay">
                    <div className="ml-5">
                      <h2 className="text-white p-3" style={{ fontSize: 18 }}>
                        Automated Action Camera
                      </h2>
                      <img
                        src="/img/cctv.PNG"
                        style={{
                          width: 100,
                          height: 100,
                          marginLeft: 200,
                          marginBottom: 35,
                        }}
                      />
                    </div>
                  </div>
                </div>
                <div className="col-md-7 pb-4">
                  <p className="p-4">
                    Automated camera mechanism provide beautiful photos to your
                    guests of themselves enjoying activites in adventure parks.
                    <br />
                    <br />
                    Simply Plug {"&"} Play setup allowing companies to add
                    cameras easily to their system.
                    <br />
                    <br />
                    Each camera unit comes xxxx$, order as many as you like!
                    <a
                      style={{ marginLeft: 5, color: "#1DA5E8" }}
                      onClick={() => handleClickOpen()}
                    >
                      Learn more
                    </a>
                  </p>
                </div>
              </Hidden>
              <Hidden xsDown>
                <div className="col-md-7">
                  <p className="p-4">
                    Automated camera mechanism provide beautiful photos to your
                    guests of themselves enjoying activites in adventure parks.
                    <br />
                    <br />
                    Simply Plug {"&"} Play setup allowing companies to add
                    cameras easily to their system.
                    <br />
                    <br />
                    Each camera unit comes xxxx$, order as many as you like!
                    <a
                      style={{ marginLeft: 5, color: "#1DA5E8" }}
                      onClick={() => handleClickOpen()}
                    >
                      Learn more
                    </a>
                  </p>
                </div>
                <div className="col-md-5">
                  <div className="bg-overlay-1">
                    <div className="ml-5 pl-5">
                      <h2
                        className="text-white ml-3 p-3"
                        style={{ fontSize: 23 }}
                      >
                        Automated Action Camera
                      </h2>
                      <img
                        src="/img/cctv.PNG"
                        style={{
                          width: 100,
                          height: 100,
                          marginLeft: 250,
                          marginBottom: 35,
                        }}
                      />
                    </div>
                  </div>
                </div>
              </Hidden>
            </div>
            <div
              className="row  bg-gray"
              style={{ marginTop: 20, marginBottom: -20 }}
            >
              <Hidden smUp>
                <div className="col-md-5" style={{ borderRadius: 50 }}>
                  <div className="bg-overlay">
                    <h2
                      className="text-white pl-3 pt-3"
                      style={{ fontSize: 25 }}
                    >
                      Refer a friend
                    </h2>
                    <p
                      className="text-white  pl-3 pb-2"
                      style={{ fontSize: "18px" }}
                    >
                      and you'll both get bonus.
                    </p>
                    <img
                      src="/img/wallet.PNG"
                      style={{
                        width: 100,
                        height: 100,
                        marginLeft: 15,
                        marginBottom: 35,
                      }}
                    />
                  </div>
                  <div className="col-md-7">
                    <div
                      className="pt-4 pb-5 py-3"
                      style={{
                        display: "flex",
                        justifyContent: "space-around",
                      }}
                    >
                      {/* Single Work */}
                      <div className="single-refer text-center ">
                        {/* Work Icon */}
                        <div className="work-icon">
                          <img
                            className="avatar-md-1"
                            src="/img/refer1.png"
                            alt=""
                          />
                        </div>
                        <h5 className="text-blue mt-1" style={{ fontSize: 12 }}>
                          Refer a friend.
                        </h5>
                      </div>
                      {/* Single Work */}
                      <div className="single-refer text-center ">
                        {/* Work Icon */}
                        <div className="work-icon">
                          <img
                            className="avatar-md-1"
                            src="/img/refer2.png"
                            alt=""
                          />
                        </div>
                        <h5 className="text-blue mt-1" style={{ fontSize: 12 }}>
                          Friend becomes a member.
                        </h5>
                      </div>
                      {/* Single Work */}
                      <div className="single-refer text-center  ">
                        {/* Work Icon */}
                        <div className="work-icon">
                          <img
                            className="avatar-md-1"
                            src="/img/refer3.png"
                            alt=""
                          />
                        </div>
                        <h5 className="text-blue mt-1" style={{ fontSize: 12 }}>
                          You both get paid.
                        </h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Hidden>
              <Hidden xsDown>
                <div className="col-md-5">
                  <div className="bg-overlay-3 pl-3 ">
                    <h2
                      className="text-white pl-3 pt-3"
                      style={{ fontSize: 25 }}
                    >
                      Refer a friend
                    </h2>
                    <p
                      className="text-white  pl-3 pb-2"
                      style={{ fontSize: "18px" }}
                    >
                      and you'll both get bonus.
                    </p>
                    <img
                      src="/img/wallet.PNG"
                      style={{
                        width: 100,
                        height: 100,
                        marginLeft: 15,
                        marginBottom: 35,
                      }}
                    />
                  </div>
                </div>
                <div className="col-md-7">
                  <div className="row">
                    <div className="col-4 col-md-4">
                      {/* Single Work */}
                      <div className="single-refer text-center p-3">
                        {/* Work Icon */}
                        <div className="work-icon">
                          <img
                            className="avatar-xl"
                            src="/img/refer1.png"
                            alt=""
                          />
                        </div>
                        <h5 className="text-blue py-3">Refer a friend.</h5>
                      </div>
                    </div>
                    <div className="col-4 col-md-4">
                      {/* Single Work */}
                      <div className="single-refer text-center p-3">
                        {/* Work Icon */}
                        <div className="work-icon">
                          <img
                            className="avatar-xl"
                            src="/img/refer2.png"
                            alt=""
                          />
                        </div>
                        <h5 className="text-blue py-3">
                          Friend becomes a member.
                        </h5>
                      </div>
                    </div>
                    <div className="col-4 col-md-4">
                      {/* Single Work */}
                      <div className="single-refer text-center p-3">
                        {/* Work Icon */}
                        <div className="work-icon">
                          <img
                            className="avatar-xl"
                            src="/img/refer3.png"
                            alt=""
                          />
                        </div>
                        <h5 className="text-blue py-3">You both get paid.</h5>
                      </div>
                    </div>
                  </div>
                </div>
              </Hidden>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
