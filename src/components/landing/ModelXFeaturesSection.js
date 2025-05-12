import React from "react";
import theme from "../../theme";
import { styled } from "@mui/material";
import {
  CardContent,
  CardTitle,
  SectionHeading,
  SectionSubheading,
} from "../shared/Typograhpy";
import AutoAwesomeIcon from "@mui/icons-material/AutoAwesome";
import AutoFixHighIcon from "@mui/icons-material/AutoFixHigh";
import ArticleIcon from "@mui/icons-material/Article";
import TipsAndUpdatesIcon from "@mui/icons-material/TipsAndUpdates";
import TrackChangesIcon from "@mui/icons-material/TrackChanges";
import CloudDoneIcon from "@mui/icons-material/CloudDone";

const features = [
  {
    title: "AI-powered full-stack prompt generation",
    content:
      "Generate complete, ready-to-use resume content from a single prompt — instantly, intelligently, and with zero friction.",
    icon: AutoAwesomeIcon,
  },
  {
    title: "Smart Prompt-to-Resume Engine",
    content:
      "Our AI instantly converts your job goals or experience into professionally written resume sections.",
    icon: AutoFixHighIcon,
  },
  {
    title: "Customizable, ATS-Friendly Templates",
    content:
      "Choose from modern, recruiter-optimized templates that are easy to personalize and designed to pass Applicant Tracking Systems.",
    icon: ArticleIcon,
  },
  {
    title: "Real-Time AI Suggestions",
    content:
      "Tweak your content with AI-powered editing that gives you better words, phrasing, and structure on the spot.",
    icon: TipsAndUpdatesIcon,
  },
  {
    title: "Job-Specific Resume Targeting",
    content:
      "Tailor every resume to match the exact job description you’re applying for — improve relevance, clarity, and results.",
    icon: TrackChangesIcon,
  },
  {
    title: "Cloud-Synced, Always Accessible",
    content:
      "Your resumes, drafts, and templates stay securely stored online — access them from anywhere, on any device.",
    icon: CloudDoneIcon,
  },
];

const SectionWrapper = styled("section")({
  width: "-webkit-fill-content",
  padding: "80px 0 50px",
});

const HeadingWrapper = styled("div")({
  width: "-webkit-fill-available",
  justifyItems: "center",
});

const CustomSectionSubheading = styled(SectionSubheading)({
  width: "700px",

  "@media (max-width: 772px)": {
    width: "-webkit-fill-available",
  },
});

const CardsWrapper = styled("div")({
  width: "-webkit-fill-available",
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  padding: "50px 0 20px",
  justifyContent: "center",
  gap: "60px",

  "@media (max-width: 722px)": {
    gap: "20px",
  },

  "@media (max-width: 681px)": {
    gap: "40px",
  },
});

const Card = styled("div")({
  background: theme.primaryBackgroundColor,
  borderRadius: "22px",
  padding: "18px 20px",
  justifyItems: "start",
  width: "340px",

  "@media (max-width: 1343px)": {
    width: "fit-content",
  },

  "@media (max-width: 1105px)": {
    width: "261px",
  },
});

const IconContainer = styled("div")({
  width: "fit-content",
  margin: " 20px 0 40px",
});

const CustomCardTitle = styled(CardTitle)({
  textAlign: "start",
  width: "238px",
  lineHeight: 1.5,
  margin: "0 0 16px",

  "@media (max-width: 1105px)": {
    width: "fit-content",
  },
});

const CustomCardContent = styled(CardContent)({
  textAlign: "start",
  width: "261px",

  "@media (max-width: 1105px)": {
    width: "fit-content",
  },
});

function ModelXFeaturesSection(props) {
  return (
    <SectionWrapper>
      <HeadingWrapper>
        <SectionHeading>
          An AI Resume Builder That Feels Like a Career Superpower
        </SectionHeading>
        <CustomSectionSubheading>
          Build, optimize, and tailor your resume with the intelligence of top
          recruiters — without writing a single bullet point from scratch.
        </CustomSectionSubheading>
      </HeadingWrapper>

      <CardsWrapper>
        {features.map((feature) => {
          return (
            <Card key={feature.title}>
              <IconContainer>
                <feature.icon
                  sx={{ fontSize: "55px", color: theme.highlightColor }}
                />
              </IconContainer>
              <CustomCardTitle>{feature.title}</CustomCardTitle>
              <CustomCardContent>{feature.content}</CustomCardContent>
            </Card>
          );
        })}
      </CardsWrapper>
    </SectionWrapper>
  );
}

export default ModelXFeaturesSection;
