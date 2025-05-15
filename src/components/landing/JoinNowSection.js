import React from "react";
import theme from "../../theme";
import { styled } from "@mui/material";
import { PrimaryBigFilledLinkButton } from "../shared/Buttons";

const SectionWrapper = styled("section")({
  justifyItems: "center",
  padding: "90px 20px",
  background: theme.primaryBackgroundColor,
  borderRadius: "20px",
  margin: "20px 0 130px",
});

const BigText = styled("h1")({
  color: theme.highlightColor,
  fontSize: "47px",
  textAlign: "center",
  lineHeight: 1.4,
  margin: "0 0 30px",
  fontWeight: 500,
  width: "900px",

  "@media (max-width: 1024px)": {
    fontSize: "44px",
    width: "-webkit-fill-available",
  },

  "@media (max-width: 900px)": {
    fontSize: "40px",
  },

  "@media (max-width: 800px)": {
    fontSize: "36px",
  },

  "@media (max-width: 670px)": {
    fontSize: "32",
  },

  "@media (max-width: 385px)": {
    fontSize: "28px",
  },
});

function JoinNowSection(props) {
  return (
    <SectionWrapper>
      <BigText>Join hundred of millions of user and try ModelX today.</BigText>
      <PrimaryBigFilledLinkButton to="/auth">
        Join Now
      </PrimaryBigFilledLinkButton>
    </SectionWrapper>
  );
}

export default JoinNowSection;
