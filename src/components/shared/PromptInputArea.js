import React, { useRef, useState } from "react";
import theme from "../../theme";
import { styled } from "@mui/material";
import PromptSubmitButton from "./PromptSubmitButton";
import AddIcon from "@mui/icons-material/Add";
import { useNavigate } from "react-router-dom";
import LoadingOverlay from "./LoadingOverlay";
import mockResumeDB from "../../data/mockResumeDB";

//// stying section code section is below ///

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
  color: theme.highlightColor,
  overflow: "hidden",
  border: "none",
  outline: "none",
  resize: "none",
  fontWeight: "500",
  fontSize: "15px",
  width: "-webkit-fill-available",
  "&::placeholder": {
    color: theme.primaryTextColor,
    fontWeight: "400",
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

const PromptInputAreaWrapper = styled("div")({
  width: "-webkit-fill-available",
  position: "fixed",
  left: 0,
  bottom: 0,
  justifyItems: "center",
  backgroundColor: theme.mainBackgroundColor,
});

// Main code //

function PromptInputArea({ isNewChat, updateChat, isSystemThinking }) {
  const textareaRef = useRef(null);
  const [prompt, setPrompt] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleMouseEnter = () => {
    const textarea = textareaRef.current;
    if (textarea) {
      textarea.style.height = "auto"; // Reset height
      textarea.style.height = `${textarea.scrollHeight}px`; // Expand to fit content
    }
    textarea.focus();
  };

  function generateResumeName(prompt) {
    const words = prompt.split(" ").slice(0, 5).join(" ");
    return `${words}...`;
  }

  function generateResumeId() {
    let i = Math.floor(Math.random() * 1000000);
    return i;
  }

  const handleSubmit = (evt) => {
    evt.preventDefault();

    if (isNewChat) {
      const resumeName = generateResumeName(prompt);
      const resumeId = generateResumeId();

      setLoading(true); // start loading animation

      const newResume = {
        _id: resumeId, // you can write this function
        name: resumeName, // you can write this function
        createdAt: new Date().toISOString(),
        chats: [
          {
            sender: "user",
            message: prompt,
            timestamp: new Date().toISOString,
          },
        ],
        needsInitialResponse: true, // 👈 important
      };

      mockResumeDB.allResumes.push(newResume);

      setTimeout(() => {
        setLoading(false); // stop loading animation
        navigate(`/${resumeId}/prompt-workspace`);
      }, 500);
    } else {
      updateChat(prompt);
      setPrompt("");
    }
  };

  return (
    <PromptInputAreaWrapper>
      <LoadingOverlay isLoading={loading} />
      <PromptInputContainer
        action="/prompt-workspace"
        method="Post"
        onSubmit={handleSubmit}
        sx={{ margin: "40px 0 0" }}
      >
        <PromptInputTextarea
          id="prompt"
          onMouseEnter={handleMouseEnter}
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
          <PromptSubmitButton
            disabled={isSystemThinking}
            isPromptNull={prompt === "" || prompt === " " ? true : false}
          />
        </BottomItemsWrapper>
      </PromptInputContainer>
    </PromptInputAreaWrapper>
  );
}

export default PromptInputArea;
