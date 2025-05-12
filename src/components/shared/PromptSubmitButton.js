import React from "react";
import theme from "../../theme";
import { styled } from "@mui/material";
import NorthIcon from "@mui/icons-material/North";

const Button = styled("button")({
  backgroundColor: theme.promptButtonBackground,
  color: theme.promptButtonTextColor,
  outline: "none",
  alignItems: "center",
  justifyItems: "center",
  fontWeight: "400",
  borderRadius: "50%",
  border: "none",
  padding: "7px",
  cursor: "pointer",
  transition: "all 0.1s ease-in-out",

  "&:hover": {
    backgroundColor: theme.promptButtonHoverBackground,
  },

  "&:active": {
    transform: "scale(0.9)",
  },

  "@media (max-width: 1024px)": {},

  "@media (max-width: 800px)": {
    padding: "5px",
  },

  "@media (max-width: 400px)": {},
});

const Icon = styled(NorthIcon)({
  color: theme.promptButtonTextColor,
  fontSize: "20px",
  fontWeight: 900,

  "@media (max-width: 800px)": {
    fontSize: "18px",
  },

  "@media (max-width: 400px)": {
    fontSize: "15px",
  },
});

function PromptSubmitButton(props) {
  return (
    <Button>
      <Icon />
    </Button>
  );
}

export default PromptSubmitButton;
