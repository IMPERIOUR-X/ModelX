import React from "react";
import theme from "../../theme";
import { styled } from "@mui/material";

const DescriptionWrapper = styled("section")({
  justifyItems: "center",
  width: "-webkit-fill-available",
  padding: "50px 0",
});

const Description = styled("p")({
  color: theme.primaryTextColor,
  fontSize: "20px",
  textAlign: "center",
  width: "85vw",
  maxWidth: "1300px",
  lineHeight: 1.7,

  "@media (max-width: 1024px)": {
    fontSize: "18px",
  },

  "@media (max-width: 900px)": {
    fontSize: "16px",
  },

  "@media (max-width: 800px)": {
    fontSize: "15px",
  },

  "@media (max-width: 670px)": {},

  "@media (max-width: 385px)": {
    fontSize: "13px",
  },
});

const Highlight = styled("p")({
  color: theme.primaryTextColor,
  display: "inline-block",
});

function ShortDescriptionSection(props) {
  return (
    <DescriptionWrapper>
      <Description>
        ModelX is your personal AI-powered resume builder designed to help you
        create professional, job-ready resumes in minutes. Whether you're a
        student, job seeker, or career switcher , ModelX guides you with smart
        suggestions, proven templates, and recruiter-optimized content — so you
        can focus on landing interviews, not formatting documents.
      </Description>
    </DescriptionWrapper>
  );
}

export default ShortDescriptionSection;
