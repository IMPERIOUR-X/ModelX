import React from "react";
import theme from "../../theme";
import { styled } from "@mui/material";
import NorthIcon from "@mui/icons-material/North";

const Button = styled("button")({
  backgroundColor: theme.promptButtonBackground,
  color: theme.promptButtonTextColor,
  outline: "none",
  fontWeight: "400",
  borderRadius: "50%",
  border: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 36,
  width: 36,
  cursor: "pointer",
  transition: "all 0.1s ease-in-out",

  "&:hover": {
    backgroundColor: theme.promptButtonHoverBackground,
  },

  "&:active": {
    transform: "scale(0.9)",
  },
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

function PromptSubmitButton({ disabled, isPromptNull }) {
  return (
    <>
      {isPromptNull ? (
        <Button disabled={true} sx={{ opacity: 0.4 }}>
          <Icon />
        </Button>
      ) : (
        <Button disabled={disabled} sx={{ opacity: disabled ? 0.4 : 1 }}>
          <Icon />
        </Button>
      )}
    </>
  );
}

export default PromptSubmitButton;
