import React from "react";
import theme from "../../theme";
import { styled } from "@mui/material";
import { PrimaryFilledLinkButton } from "./Buttons";

const Header = styled("header")({
  backgroundColor: theme.mainBackgroundColor,
  display: "flex",
  padding: "30px 40px 10px 0",
  position: "fixed",
  top: 0,
  width: "-webkit-fill-available",
  zIndex: 100,
});

const BrandWrapper = styled("div")({
  alignContent: "center",
});

const BrandName = styled("h1")({
  color: theme.highlightColor,
  fontWeight: "500",
  fontSize: "26px",
  width: "fit-content",

  "@media (max-width: 1024px)": {
    fontSize: "26px",
  },

  "@media (max-width: 800px)": {
    fontSize: "24px",
  },

  "@media (max-width: 400px)": {
    fontSize: "22px",
  },
});

function AppHeader(props) {
  return (
    <Header>
      <BrandWrapper>
        <BrandName>ModelX</BrandName>
      </BrandWrapper>
      <PrimaryFilledLinkButton
        to="/auth"
        sx={{ marginBottom: "3px", marginLeft: "auto" }}
      >
        Log in
      </PrimaryFilledLinkButton>
    </Header>
  );
}

export default AppHeader;
