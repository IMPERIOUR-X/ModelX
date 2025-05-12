import React, { useState, useEffect } from "react";
import AppHeader from "../components/shared/AppHeader";
import theme from "../theme";
import HeroSection from "../components/landing/HeroSection";
import { styled } from "@mui/material";
import ShortDescriptionSection from "../components/landing/ShortDescriptionSection";
import FeaturingContributorsSection from "../components/landing/FeaturingContributorsSection";
import HowItWorksSection from "../components/landing/HowItWorksSection";
import ModelXFeaturesSection from "../components/landing/ModelXFeaturesSection";
import JoinNowSection from "../components/landing/JoinNowSection";
import AppFooter from "../components/shared/AppFooter";

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
      <AppHeader />
      <HeroSection windowWidth={windowWidth} />
      <ShortDescriptionSection />
      <FeaturingContributorsSection />
      <HowItWorksSection />
      <ModelXFeaturesSection />
      <JoinNowSection />
      <AppFooter />
    </LandingPageWrapper>
  );
}

export default LandingPage;
