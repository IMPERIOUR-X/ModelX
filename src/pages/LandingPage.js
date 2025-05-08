import React from "react";
import PageHeader from "../components/shared/PageHeader";
import theme from "../theme";
import HeroSection from "../components/landing/HeroSection";

function LandingPage(props) {
  return (
    <div>
      <PageHeader />
      <HeroSection />
    </div>
  );
}

export default LandingPage;
