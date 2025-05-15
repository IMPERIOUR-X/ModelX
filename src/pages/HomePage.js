import React from "react";
import theme from "../theme";
import { styled } from "@mui/material";
import AppHeader from "../components/shared/AppHeader";
import {
  SectionHeading,
  SectionSubheading,
} from "../components/shared/Typograhpy";
import QuickStarterSection from "../components/home/QuickStarterSection";
import PromptInputArea from "../components/shared/PromptInputArea";

const HomePageWrapper = styled("main")({
  backgroundColor: theme.mainBackgroundColor,
  paddingBottom: "300px",
});

const HeadingWrapper = styled("div")({
  width: "-webkit-fill-available",
  margin: "130px 0 10px",
  justifyItems: "center",
  padding: "10px 20px 10px",

  "@media (max-width: 670px)": {
    margin: "100px 0 10px",
  },
});

const PromptInputAreaWrapper = styled("div")({
  width: "-webkit-fill-available",
  position: "fixed",
  left: 0,
  bottom: 8,
  justifyItems: "center",
});

function HomePage() {
  return (
    <HomePageWrapper>
      <AppHeader authenticated={true} />

      <HeadingWrapper>
        <SectionHeading>What role are you aiming for today?</SectionHeading>
        <SectionSubheading>
          Describe your career goals or experience and let ModelX do the
          writings.
        </SectionSubheading>
      </HeadingWrapper>

      <QuickStarterSection />

      <PromptInputAreaWrapper>
        <PromptInputArea />
      </PromptInputAreaWrapper>
    </HomePageWrapper>
  );
}

export default HomePage;
