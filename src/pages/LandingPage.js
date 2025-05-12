import React, { useState, useEffect } from "react";
import PageHeader from "../components/shared/PageHeader";
import theme from "../theme";
import HeroSection from "../components/landing/HeroSection";
import { styled } from "@mui/material";
import ShortDescriptionSection from "../components/landing/ShortDescriptionSection";
import FeaturingContributorsSection from "../components/landing/FeaturingContributorsSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";

const LandingPageWrapper = styled("main")({
  background: theme.mainBackgroundColor,
});

function LandingPage(props) {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);

    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <LandingPageWrapper>
      <PageHeader />
      <HeroSection windowWidth={windowWidth} />
      <ShortDescriptionSection />
      <FeaturingContributorsSection />
      <HowItWorksSection />
    </LandingPageWrapper>
  );
}

export default LandingPage;
