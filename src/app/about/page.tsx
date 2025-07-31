"use client";

import React, { useState } from "react";
import Header from "../../components/common/Header";
import AboutMain from "../../components/About/AboutMain";
import Footer from "../../components/Home/Footer";

const AboutPage: React.FC = () => {
  const [showBookTable, setShowBookTable] = useState(false);

  return (
    <>
      <Header
        showBookTable={showBookTable}
        setShowBookTable={setShowBookTable}
      />

      <div
        className={`transition-all duration-300 ${
          showBookTable ? "opacity-30 pointer-events-none" : "opacity-100"
        }`}
      >
        <AboutMain />
        <Footer />
      </div>
    </>
  );
};

export default AboutPage;
