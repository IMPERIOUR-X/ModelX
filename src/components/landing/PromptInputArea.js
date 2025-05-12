import React, { useRef } from "react";
import theme from "../../theme";
import { styled } from "@mui/material";
import PromptSubmitButton from "../shared/PromptSubmitButton";

const PromptInputContainer = styled("div")({
  background: theme.inputBackground,
  borderRadius: "20px",
  border: "none",
  padding: "20px",
  position: "relative",
  textAlign: "end",
  width: "800px",
  maxWidth: "800px",

  "@media (max-width: 1024px)": {
    width: "650px",
  },

  "@media (max-width: 800px)": {
    width: "500px",
  },

  "@media (max-width: 650px)": {
    width: "350px",
  },

  "@media (max-width: 454px)": {
    width: "300px",
  },

  "@media (max-width: 385px)": {
    width: "250px",
  },

  "@media (max-width: 330px)": {
    width: "200px",
  },
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

  "@media (max-width: 1024px)": {
    fontSize: "15px",
    "&::placeholder": {
      fontSize: "15px",
    },
  },

  "@media (max-width: 800px)": {
    fontSize: "14px",
    "&::placeholder": {
      fontSize: "14px",
    },
  },

  "@media (max-width: 500px)": {
    fontSize: "13px",
    "&::placeholder": {
      fontSize: "13px",
    },
  },

  "@media (max-width: 400px)": {
    fontSize: "12px",
    "&::placeholder": {
      fontSize: "12px",
    },
  },
});

function PromptInputArea(props) {
  const textareaRef = useRef(null);

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Expand to fit content
    }
  };

  return (
    <PromptInputContainer sx={{ margin: "40px 0 0" }}>
      <PromptInputTextarea
        ref={textareaRef}
        onInput={handleInput}
        rows={"auto"}
        placeholder="I’m applying for [e.g. Frontend Developer]"
      />

      <PromptSubmitButton />
    </PromptInputContainer>
  );
}

export default PromptInputArea;
