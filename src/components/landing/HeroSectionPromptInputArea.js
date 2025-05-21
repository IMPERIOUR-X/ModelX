import React, { useRef, useState } from "react";
import theme from "../../theme";
import { styled } from "@mui/material";
import PromptSubmitButton from "../shared/PromptSubmitButton";
import { Navigate, useNavigate } from "react-router-dom";

const PromptInputContainer = styled("form")({
  background: theme.inputBackground,
  borderRadius: "20px",
  border: "none",
  padding: "20px",
  position: "relative",
  textAlign: "end",
  width: "800px",
  maxWidth: "800px",
  cursor: "text",

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

function HeroSectionPromptInputArea(props) {
  const textareaRef = useRef(null);
  const [prompt, setPrompt] = useState("");

  const navigate = useNavigate();

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
      method="post"
      onSubmit={(evt) => {
        evt.preventDefault();
        navigate("/home");
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
        placeholder="I’m applying for [e.g. Frontend Developer]"
      />

      <div
        style={{
          width: "-webkit-fill-available",
          justifyContent: "end",
          display: "flex",
        }}
      >
        <PromptSubmitButton />
      </div>
    </PromptInputContainer>
  );
}

export default HeroSectionPromptInputArea;
