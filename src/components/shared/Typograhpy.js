import theme from "../../theme";
import { styled } from "@mui/material";

const SectionHeading = styled("h2")({
  color: theme.highlightColor,
  width: "fit-content",
  fontSize: "22px",
  fontWeight: 600,
  margin: "0 0 4px",
  textAlign: "center",
  lineHeight: 1.4,

  "@media (max-width: 1024px)": {
    fontSize: "21px",
  },

  "@media (max-width: 900px)": {
    fontSize: "20px",
  },

  "@media (max-width: 800px)": {
    fontSize: "19px",
  },

  "@media (max-width: 670px)": {
    fontSize: "18px",
  },

  "@media (max-width: 450px)": {
    fontSize: "17px",
  },

  "@media (max-width: 385px)": {
    fontSize: "16px",
  },
});

const SectionSubheading = styled("h3")({
  color: theme.secondaryTextColor,
  width: "fit-content",
  fontSize: "17px",
  fontWeight: 500,
  textAlign: "center",
  lineHeight: 1.3,

  "@media (max-width: 900px)": {
    fontSize: "16px",
  },

  "@media (max-width: 800px)": {
    fontSize: "15px",
  },

  "@media (max-width: 670px)": {
    fontSize: "14px",
  },

  "@media (max-width: 450px)": {
    fontSize: "13px",
  },

  "@media (max-width: 385px)": {
    fontSize: "12px",
  },
});

const CardTitle = styled("h4")({
  color: theme.highlightColor,
  width: "fit-content",
  fontSize: "17px",
  textAlign: "center",
  fontWeight: 500,
  margin: " 0 0 9px",

  "@media (max-width: 800px)": {
    fontSize: "16px",
  },

  "@media (max-width: 450px)": {
    fontSize: "15px",
  },

  "@media (max-width: 385px)": {
    fontSize: "14px",
  },
});

const CardContent = styled("p")({
  color: theme.primaryTextColor,
  textAlign: "center",
  fontSize: "13px",
  lineHeight: 1.5,

  "@media (max-width: 800px)": {
    fontSize: "13px",
  },

  "@media (max-width: 450px)": {
    fontSize: "12px",
  },

  "@media (max-width: 385px)": {
    fontSize: "11px",
  },
});

export { SectionHeading, SectionSubheading, CardTitle, CardContent };
