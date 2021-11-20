import React from "react";
import ThemeOne from "./themes/theme-one";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import Header from "./components/HeaderSection/Header";
import FooterSection from "./components/FooterSection/Footer";
import Shop from "./pages/Shop";

function App() {
  return (
    <BrowserRouter>
      {/*====== Scroll To Top Area Start ======*/}
      <div id="scrollUp" title="Scroll To Top">
        <i className="fas fa-arrow-up" />
      </div>
      {/*====== Scroll To Top Area End ======*/}
      {/* <Header /> */}
      <Routes>
        <Route path="/" element={<ThemeOne />} />
        <Route path="/shop" element={<Shop />} />
      </Routes>
      <FooterSection />
    </BrowserRouter>
  );
}

export default App;
