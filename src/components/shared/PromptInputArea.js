import React, { useRef, useState } from "react";
import theme from "../../theme";
import { styled } from "@mui/material";
import PromptSubmitButton from "./PromptSubmitButton";
import AddIcon from "@mui/icons-material/Add";

const PromptInputContainer = styled("form")({
  background: theme.inputBackground,
  borderRadius: 20,
  border: `1px solid ${theme.borderColor}`,
  padding: "20px",
  position: "relative",
  width: "800px",
  maxWidth: "800px",
  cursor: "text",

  "@media (max-width: 1024px)": {
    width: "650px",
  },

  "@media (max-width: 800px)": {
    width: "500px",
  },

  "@media (max-width: 580px)": {
    width: "-webkit-fill-available",
    margin: "0 10px 0",
    padding: 15,
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

const BottomItemsWrapper = styled("div")({
  width: "-webkit-fill-available",
  display: "flex",
  margin: "7px 0 0",
  justifyContent: "space-between",
});

const ImportButton = styled("div")({
  color: theme.highlightColor,
  outline: "none",
  fontWeight: "400",
  borderRadius: "50%",
  border: `1px solid ${theme.borderColor}`,
  cursor: "pointer",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  height: 36,
  width: 36,
  transition: "all 0.1s ease-in-out",

  "&:hover": {
    backgroundColor: theme.promptButtonBackground,
    color: theme.mainBackgroundColor,
  },

  "&:active": {
    transform: "scale(0.9)",
  },
});

const Icon = styled(AddIcon)({
  fontSize: "20px",
  fontWeight: 900,

  "@media (max-width: 800px)": {
    fontSize: "18px",
  },

  "@media (max-width: 400px)": {
    fontSize: "15px",
  },
});

function PromptInputArea(props) {
  const textareaRef = useRef(null);
  const [prompt, setPrompt] = useState("");

  const handleInput = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Expand to fit content
    }
  };

  const handleChange = (evt) => {
    const value = evt.target.value;

    setPrompt(value);
  };

  return (
    <PromptInputContainer
      action="/"
      method="Post"
      onSubmit={(evt) => {
        evt.preventDefault();
      }}
      sx={{ margin: "40px 0 0" }}
    >
      <PromptInputTextarea
        id="prompt"
        ref={textareaRef}
        onInput={handleInput}
        rows={"auto"}
        value={prompt}
        onChange={handleChange}
        name="prompt"
        placeholder="Type your prompt here..."
      />

      <BottomItemsWrapper>
        <ImportButton>
          <Icon />
        </ImportButton>
        <PromptSubmitButton />
      </BottomItemsWrapper>
    </PromptInputContainer>
  );
}

export default PromptInputArea;
