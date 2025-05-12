import theme from "../../theme";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

////////////////////////////////// Button styling section /////////////

const buttonActiveState = {
  "&:active": {
    transform: "scale(0.9)",
  },
};

const buttonStyles = {
  outline: "none",
  fontSize: "13px",
  fontWeight: "400",
  borderRadius: "20px",
  border: "none",
  textDecoration: "none",
  padding: "10px 24px",
  cursor: "pointer",
  transition: "transform 0.1s ease-in-out",
};

const buttonResponsiveness = {
  "@media (max-width: 1024px)": {
    fontSize: "13px",
  },

  "@media (max-width: 800px)": {
    fontSize: "12px",
  },

  "@media (max-width: 400px)": {
    fontSize: "11px",
  },
};

const bigButtonStyles = {
  outline: "none",
  fontSize: "16px",
  fontWeight: "500",
  borderRadius: "20px",
  border: "none",
  textDecoration: "none",
  padding: "11px 26px",
  cursor: "pointer",
  width: "fit-content",
  transition: "transform 0.1s ease-in-out",
};

const bigButtonResponsiveness = {
  "@media (max-width: 1024px)": {
    fontSize: "15px",
  },

  "@media (max-width: 800px)": {
    fontSize: "13px",
  },

  "@media (max-width: 400px)": {
    fontSize: "12px",
  },
};

/////////////////////////////////////////////// Button Section //////////////////////////////

///////////////////////////// Primary Filled Button section /////////////////////////

// Normal Sized Button
const PrimaryFilledButton = styled("button")({
  ...buttonStyles,
  backgroundColor: theme.buttonBackground,
  color: theme.buttonTextColor,

  "&:hover": {
    backgroundColor: theme.buttonHoverBackground,
    outline: theme.borderColor,
  },

  ...buttonActiveState,
  ...buttonResponsiveness,
});

// Normal Sized Link Button
const PrimaryFilledLinkButton = styled(Link)({
  ...buttonStyles,
  backgroundColor: theme.buttonBackground,
  color: theme.buttonTextColor,

  "&:hover": {
    backgroundColor: theme.buttonHoverBackground,
    outline: theme.borderColor,
  },

  ...buttonActiveState,
  ...buttonResponsiveness,
});

// Big Sized Button
const PrimaryBigFilledButton = styled("button")({
  ...bigButtonStyles,
  backgroundColor: theme.buttonBackground,
  color: theme.buttonTextColor,

  "&:hover": {
    backgroundColor: theme.buttonHoverBackground,
    outline: theme.borderColor,
  },

  ...buttonActiveState,
  ...bigButtonResponsiveness,
});

// Big Sized Link Button
const PrimaryBigFilledLinkButton = styled(Link)({
  ...bigButtonStyles,
  backgroundColor: theme.buttonBackground,
  color: theme.buttonTextColor,

  "&:hover": {
    backgroundColor: theme.buttonHoverBackground,
    outline: theme.borderColor,
  },

  ...buttonActiveState,
  ...bigButtonResponsiveness,
});

/////////////////////////// Secondary Filled Button section /////////////

// Normal Sized Button
const SecondaryFilledButton = styled("button")({
  ...buttonStyles,
  backgroundColor: theme.buttonBackground,
  color: theme.buttonTextColor,

  "&:hover": {
    backgroundColor: theme.buttonHoverBackground,
    outline: theme.borderColor,
  },

  ...buttonActiveState,
  ...buttonResponsiveness,
});

// Normal Sized Link Button
const SecondaryFilledLinkButton = styled(Link)({
  ...buttonStyles,
  backgroundColor: theme.buttonBackground,
  color: theme.buttonTextColor,

  "&:hover": {
    backgroundColor: theme.buttonHoverBackground,
    outline: theme.borderColor,
  },

  ...buttonActiveState,
  ...buttonResponsiveness,
});

// Big Sized Button
const SecondaryBigFilledButton = styled("button")({
  ...bigButtonStyles,
  backgroundColor: theme.secondaryButtonBackground,
  color: theme.secondaryButtonTextColor,

  "&:hover": {
    backgroundColor: theme.secondaryButtonHoverBackground,
    outline: theme.borderColor,
  },

  ...buttonActiveState,

  ...bigButtonResponsiveness,
});

// Big Sized Link Button
const SecondaryBigFilledLinkButton = styled(Link)({
  ...bigButtonStyles,
  backgroundColor: theme.secondaryButtonBackground,
  color: theme.secondaryButtonTextColor,

  "&:hover": {
    backgroundColor: theme.secondaryButtonHoverBackground,
    outline: theme.borderColor,
  },

  ...buttonActiveState,

  ...bigButtonResponsiveness,
});

export {
  // Normal Buttons
  PrimaryFilledButton,
  PrimaryBigFilledButton,
  SecondaryFilledButton,
  SecondaryBigFilledButton,

  // Link Buttons
  PrimaryFilledLinkButton,
  PrimaryBigFilledLinkButton,
  SecondaryFilledLinkButton,
  SecondaryBigFilledLinkButton,
};
