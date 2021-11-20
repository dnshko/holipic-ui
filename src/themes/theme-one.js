import React, { Component } from "react";

import HeroSection from "../components/HeroSection/HeroOne";
import FeatureSection from "../components/Features/FeatureOne";
import Work from "../components/WorkSection/Work";
import PricingSection from "../components/PricingSection/PricingOne";
import Download from "../components/DownloadSection/Download";

import AppSection from "../components/AppSection/index";
import ReferSection from "../components/ReferSection/index";
import FooterSection from "../components/FooterSection/Footer";
import Header from "../components/HeaderSection/Header";
class ThemeOne extends Component {
  render() {
    return (
      <React.StrictMode>
        <div className="main" style={{ overflowX: "hidden" }}>
          <HeroSection />
          <FeatureSection />
          <Work />
          <AppSection />
          <PricingSection />
          <ReferSection />
          <Download />
        </div>
      </React.StrictMode>
    );
  }
}

export default ThemeOne;
