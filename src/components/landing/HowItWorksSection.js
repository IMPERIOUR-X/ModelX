import React from "react";
import theme from "../../theme";
import {
  SectionHeading,
  SectionSubheading,
  CardTitle,
  CardContent,
} from "../shared/Typograhpy";
import { styled } from "@mui/material";

const guides = [
  {
    title: "Enter your prompt",
    content:
      "Describe the type of job you're applying for or paste your experience — ModelX will handle the rest.",
  },
  {
    title: "Get first draft instantly",
    content:
      "AI generates a clean, recruiter-optimized resume tailored to your role and skills.",
  },
  {
    title: "Customize responses",
    content:
      "Edit, tweak, and enhance your content with real-time suggestions and formatting.",
  },
  {
    title: "Export or share",
    content:
      "Download in PDF, DOCX, or share your resume link with recruiters instantly.",
  },
];

const SectionWrapper = styled("section")({
  width: "-webkit-fill-available",
  padding: "60px 0 50px",
  borderRadius: "20px",
});

const HeadingWrapper = styled("div")({
  width: "-webkit-fill-available",
  justifyItems: "center",
});

const CardsWrapper = styled("div")({
  width: "-webkit-fill-available",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  padding: "50px 0 0",
  justifyContent: "center",
  gap: "30px",
});

const Card = styled("div")({
  background: theme.secondaryBackgroundColor,
  border: `1px solid ${theme.borderColor}`,
  borderRadius: "22px",
  padding: "18px 20px",
  justifyItems: "center",
  width: "244px",
});

const NumberAvatar = styled("div")({
  border: `1px solid ${theme.borderColor}`,
  borderRadius: "50%",
  margin: "0 0 40px",
  display: "flex",
  height: "50px",
  width: "50px",
  justifyContent: "center",
  alignItems: "center",
});

const Number = styled("h3")({
  color: theme.highlightColor,
  width: "fit-content",
  fontWeight: 800,
  fontSize: "24px",

  "@media (max-width: 1024px)": {
    fontSize: "23px",
  },

  "@media (max-width: 900px)": {
    fontSize: "22px",
  },

  "@media (max-width: 800px)": {
    fontSize: "21px",
  },

  "@media (max-width: 670px)": {
    fontSize: "20px",
  },

  "@media (max-width: 450px)": {
    fontSize: "19px",
  },

  "@media (max-width: 385px)": {
    fontSize: "18px",
  },
});

const ButtonWrapper = styled("div")({
  width: "-webkit-fill-available",
  display: "flex",
  justifyContent: "center",
  margin: "50px 0 10px",
});

const Button = styled("button")({
  backgroundColor: theme.secondaryButtonBackground,
  color: theme.secondaryButtonTextColor,
  outline: "none",
  fontSize: "16px",
  fontWeight: "500",
  borderRadius: "20px",
  border: "none",
  padding: "11px 26px",
  cursor: "pointer",
  width: "fit-content",
  transition: "transform 0.1s ease-in-out",
  "&:hover": {
    backgroundColor: theme.secondaryButtonHoverBackground,
    outline: theme.borderColor,
  },
  "&:active": {
    transform: "scale(0.9)",
  },

  "@media (max-width: 1024px)": {
    fontSize: "15px",
  },

  "@media (max-width: 800px)": {
    fontSize: "13px",
  },

  "@media (max-width: 400px)": {
    fontSize: "12px",
  },
});

function HowItWorksSection(props) {
  return (
    <SectionWrapper>
      <HeadingWrapper>
        <SectionHeading>How ModelX Works</SectionHeading>
        <SectionSubheading>
          From idea to interview-ready resume — here’s how ModelX helps you
          build smarter, faster.
        </SectionSubheading>
      </HeadingWrapper>

      <CardsWrapper>
        {guides.map((guide, index) => {
          return (
            <Card>
              <NumberAvatar>
                <Number>{index + 1}</Number>
              </NumberAvatar>

              <CardTitle>{guide.title}</CardTitle>

              <CardContent>{guide.content}</CardContent>
            </Card>
          );
        })}
      </CardsWrapper>

      <ButtonWrapper>
        <Button>Try it now</Button>
      </ButtonWrapper>
    </SectionWrapper>
  );
}

export default HowItWorksSection;
