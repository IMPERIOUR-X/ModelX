import theme from "../../theme";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";

const PageWrapper = styled("main")({
  backgroundColor: theme.mainBackgroundColor,
  justifyItems: "center",
  padding: "30px 0 0 ",
});

const HeadingWrapper = styled("div")({
  justifyItems: "center",
});

const MainContentWrapper = styled("div")({
  width: "-webkit-fill-available",
  maxWidth: "444px",
  justifyItems: "center",
});

const Form = styled("form")({
  width: "-webkit-fill-available",
  padding: "20px 0",
});

const TextInput = styled("input")({
  color: theme.primaryTextColor,
  background: "transparent",
  border: `1px solid ${theme.borderColor}`,
  borderRadius: 10,
  padding: 20,
  width: "-webkit-fill-available",
  outline: "none",

  "&::placeholder": {
    color: theme.primaryTextColor,
    fontWeight: "400",
    fontSize: "13px",
    opacity: 1,
  },
});

const FormText = styled("p")({
  textDecoration: "none",
  color: theme.primaryTextColor,
  fontSize: 13,
  fontWeight: 600,
  width: "fit-content",
});

const SubmitButton = styled("button")({
  backgroundColor: theme.buttonBackground,
  color: theme.buttonTextColor,
  border: "none",
  padding: "20px 0",
  width: "-webkit-fill-available",
  fontSize: 18,
  fontWeight: 600,
  borderRadius: 10,
  transition: "all 0.1s ease-in-out",

  "&:hover": {
    backgroundColor: theme.buttonHoverBackground,
  },

  "&:active": {
    transform: "scale(0.9)",
  },

  "@media (max-width: 800px)": {
    fontSize: 16,
  },

  "@media (max-width: 400px)": {
    fontSize: 14,
  },
});

const GoogleLink = styled(Link)({
  color: theme.primaryTextColor,
  background: "transparent",
  border: `1px solid ${theme.borderColor}`,
  borderRadius: 10,
  padding: 20,
  width: "-webkit-fill-available",
  fontSize: 16,
  fontWeight: 600,
  display: "block",
  textDecoration: "none",
  textAlign: "center",
  margin: "40px 0 20px",
  transition: "all 0.1s ease-in-out",

  "&:hover": {
    transform: "scale(1.03)",
  },

  "&:active": {
    transform: "scale(0.9)",
  },
});

export {
  PageWrapper,
  HeadingWrapper,
  MainContentWrapper,
  Form,
  TextInput,
  FormText,
  SubmitButton,
  GoogleLink,
};
