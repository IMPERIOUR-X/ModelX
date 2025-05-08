import React, { useRef } from "react";
import theme from "../../theme";
import { styled } from "@mui/material";
import NorthIcon from "@mui/icons-material/North";

const tags = [
  "First-time Job Seeker",
  "Career Change Candidate",
  "Experienced Professional",
  "Recent Graduate / Student",
];

const HeroSectionWrapper = styled("div")({
  justifyItems: "center",
  padding: "100px 0 0",
});

const HeroHeader = styled("h1")({
  fontSize: "32px",
  fontWeight: "600",
  color: theme.highlightColor,
  width: "fit-content",
  textAlign: "center",
});

const HeroSubheading = styled("h1")({
  fontSize: "30px",
  fontWeight: "500",
  color: theme.secondaryTextColor,
  width: "fit-content",
});

const BagdeContainer = styled("div")({
  padding: "9px 40px",
  borderRadius: "20px",
  border: `1px solid ${theme.borderColor}`,
  width: "fit-content",
  cursor: "pointer",
});

const BagdeText = styled("h6")({
  color: theme.secondaryTextColor,
  fontWeight: "400",
  fontSize: "11px",
});

const PromptInputContainer = styled("div")({
  background: theme.inputBackground,
  borderRadius: "20px",
  border: "none",
  padding: "20px",
  position: "relative",
  textAlign: "end",
  width: "800px",
  maxWidth: "800px",
});

const PromptInputTextarea = styled("textarea")({
  background: "transparent",
  color: theme.primaryTextColor,
  overflow: "hidden",
  border: "none",
  outline: "none",
  resize: "none",
  fontWeight: "500",
  fontSize: "15px",
  width: "-webkit-fill-available",
  "&::placeholder": {
    color: theme.secondaryTextColor,
    fontWeight: "600",
    fontSize: "15px",
    opacity: 1,
  },
});

const PromptSendButton = styled("button")({
  backgroundColor: theme.promptButtonBackground,
  color: theme.promptButtonTextColor,
  outline: "none",
  alignItems: "center",
  justifyItems: "center",
  fontWeight: "400",
  borderRadius: "50%",
  border: "none",
  padding: "6px",
  cursor: "pointer",
  transition: "all 0.1s ease-in-out",
  "&:hover": {
    backgroundColor: theme.promptButtonHoverBackground,
  },
  "&:active": {
    transform: "scale(0.9)",
  },
});

const TagsWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  gap: "8px",
  flexWrap: "wrap",
  justifyContent: "center",
  width: "715px",
});

const TagContainer = styled(BagdeContainer)({
  padding: "9px 20px",
});

const TagText = styled(BagdeText)({
  color: theme.primaryTextColor,
  fontWeight: "500",
});

function HeroSection(props) {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Expand to fit content
    }
  };

  return (
    <HeroSectionWrapper>
      <BagdeContainer>
        <BagdeText>#1 AI Resume Builder for job seekers</BagdeText>
      </BagdeContainer>

      <HeroHeader sx={{ margin: "20px 0 0" }}>
        Create a recruiter-ready resume in minutes
      </HeroHeader>
      <HeroSubheading sx={{ margin: "7px 0 0" }}>
        — powered by AI.
      </HeroSubheading>

      <PromptInputContainer sx={{ margin: "40px 0 0" }}>
        <PromptInputTextarea
          ref={textareaRef}
          onInput={handleInput}
          rows={"auto"}
          placeholder="I’m applying for [e.g. Frontend Developer]"
        />

        <PromptSendButton>
          <NorthIcon
            sx={{
              color: theme.promptButtonTextColor,
              fontSize: "20px",
              fontWeight: 600,
            }}
          />
        </PromptSendButton>
      </PromptInputContainer>

      <TagsWrapper sx={{ margin: "20px" }}>
        {tags.map((tag) => {
          return (
            <TagContainer>
              <TagText>{tag}</TagText>
            </TagContainer>
          );
        })}
        <TagContainer>
          <TagText>More...</TagText>
        </TagContainer>
      </TagsWrapper>
    </HeroSectionWrapper>
  );
}

export default HeroSection;
