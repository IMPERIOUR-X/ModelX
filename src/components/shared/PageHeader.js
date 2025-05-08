import React from "react";
import theme from "../../theme";
import { styled } from "@mui/material";

const Header = styled("header")({
  backgroundColor: theme.mainBackgroundColor,
  display: "flex",
  padding: "30px 40px 10px",
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

const Button = styled("button")({
  backgroundColor: theme.buttonBackground,
  color: theme.buttonTextColor,
  outline: "none",
  fontSize: "13px",
  fontWeight: "400",
  borderRadius: "20px",
  border: "none",
  marginLeft: "auto",
  padding: "10px 24px",
  cursor: "pointer",
  transition: "transform 0.1s ease-in-out",
  "&:hover": {
    backgroundColor: theme.buttonHoverBackground,
    outline: theme.borderColor,
  },
  "&:active": {
    transform: "scale(0.9)",
  },

  "@media (max-width: 1024px)": {
    fontSize: "13px",
  },

  "@media (max-width: 800px)": {
    fontSize: "12px",
  },

  "@media (max-width: 400px)": {
    fontSize: "11px",
  },
});

function PageHeader(props) {
  return (
    <Header>
      <div>
        <BrandName>ModelX</BrandName>
      </div>

      <Button sx={{ marginBottom: "3px" }}>Log in</Button>
    </Header>
  );
}

export default PageHeader;
