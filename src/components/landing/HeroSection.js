import React from "react";
import theme from "../../theme";
import { styled } from "@mui/material";
import HeroSectionPromptInputArea from "./HeroSectionPromptInputArea";
import { BigHeader, BigSubheading } from "../shared/Typograhpy";
import { useNavigate } from "react-router-dom";

const tags = [
  "First-time Job Seeker",
  "Career Change Candidate",
  "Experienced Professional",
  "Recent Graduate / Student",
];

const HeroSectionWrapper = styled("section")({
  justifyItems: "center",
  padding: "170px 0 50px",

  "@media (max-width: 500px)": {
    padding: "80px 0 0",
  },

  "@media (max-width: 330px)": {
    padding: "60px 0 0",
  },
});

const BagdeContainer = styled("div")({
  padding: "9px 40px",
  borderRadius: "20px",
  border: `1px solid ${theme.borderColor}`,
  width: "fit-content",
  cursor: "pointer",

  "@media (max-width: 1024px)": {
    padding: "7px 16px",
  },

  "@media (max-width: 800px)": {
    padding: "7px 16px",
  },

  "@media (max-width: 600px)": {},
});

const BagdeText = styled("h6")({
  color: theme.secondaryTextColor,
  fontWeight: "400",
  fontSize: "11px",
  width: "fit-content",

  "@media (max-width: 800px)": {
    fontSize: "9px",
  },

  "@media (max-width: 400px)": {
    fontSize: "8px",
  },
});

const TagsWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "800px",

  "@media (max-width: 1024px)": {
    width: "530px",
  },

  "@media (max-width: 600px)": {
    width: "-webkit-fill-available",
  },
});

const TagContainer = styled(BagdeContainer)({
  padding: "9px 20px",
  transition: " transform 0.2s ease",

  "&:hover": {
    transform: "scale(1.03)",
  },

  "&:active": {
    transform: "scale(0.96)",
    backgroundColor: theme.primaryActiveBackgroundColor,
  },

  "@media (max-width: 1024px)": {
    padding: "7px 16px",
  },

  "@media (max-width: 800px)": {
    padding: "7px 16px",
  },

  "@media (max-width: 600px)": {},
});

const TagText = styled("p")({
  color: theme.primaryTextColor,
  fontWeight: "500",
  fontSize: "13px",
  width: "fit-content",

  "@media (max-width: 1024px)": {
    fontSize: "11px",
  },

  "@media (max-width: 800px)": {
    fontSize: "9px",
  },

  "@media (max-width: 400px)": {
    fontSize: "8px",
  },
});

function HeroSection(props) {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <HeroSectionWrapper>
      <BagdeContainer>
        <BagdeText>#1 AI Resume Builder for job seekers</BagdeText>
      </BagdeContainer>

      <BigHeader sx={{ margin: "20px 0 0" }}>
        Create a recruiter-ready resume in minutes
      </BigHeader>
      <BigSubheading sx={{ margin: "7px 0 0" }}>— powered by AI.</BigSubheading>

      <HeroSectionPromptInputArea />

      <TagsWrapper sx={{ margin: "20px" }}>
        {tags.slice(0, props.windowWidth > 338 ? tags.length : 1).map((tag) => {
          return (
            <TagContainer key={tag} onClick={handleClick}>
              <TagText>{tag}</TagText>
            </TagContainer>
          );
        })}
        <TagContainer onClick={handleClick}>
          <TagText>More...</TagText>
        </TagContainer>
      </TagsWrapper>
    </HeroSectionWrapper>
  );
}

export default HeroSection;
