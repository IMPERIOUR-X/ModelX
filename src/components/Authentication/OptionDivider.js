import React from "react";
import theme from "../../theme";
import { styled } from "@mui/material";

const DividerContainer = styled("div")({
  position: "relative",
  width: "-webkit-fill-available",
});

const Line = styled("hr")({
  border: 0,
  borderTop: `2px solid ${theme.accentColor}`,
  opacity: 1,
});

const DividerTitle = styled("p")({
  position: "absolute",
  top: "-7px",
  left: "44.5%",
  padding: "0px 18px",
  borderRadius: "5px",
  fontSize: 15,
  textTransform: "uppercase",
  fontWeight: 500,
  backgroundColor: theme.mainBackgroundColor,
  color: theme.primaryTextColor,
});

function OptionDivider(props) {
  return (
    <DividerContainer>
      <Line />
      <DividerTitle>OR</DividerTitle>
    </DividerContainer>
  );
}

export default OptionDivider;
