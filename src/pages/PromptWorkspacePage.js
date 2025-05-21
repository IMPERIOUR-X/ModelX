import React, { useEffect, useState } from "react";
import theme from "../theme";
import { styled } from "@mui/material";
import AppHeader from "../components/shared/AppHeader";
import PromptInputArea from "../components/shared/PromptInputArea";
import mockResumeDB from "../data/mockResumeDB";
import { useParams } from "react-router-dom";
import TypingIndicator from "../components/chat/TypingIndicator";

const bubbleSharedStyles = {
  width: "fit-content",
  padding: 16,
  borderRadius: 10,
  marginBottom: 13,
};

const bubbleSharedResponsiveness = {
  "@media (max-width: 1024px)": {
    padding: 14,
  },

  "@media (max-width: 800px)": {
    padding: 12,
  },

  "@media (max-width: 400px)": {
    padding: 10,
  },
};

const PageWrapper = styled("main")({
  backgroundColor: theme.mainBackgroundColor,
  width: "-webkit-fill-available",
  padding: "30px 0 368px",
  justifyContent: "center",
  minHeight: "50vh",
  position: "relative",
});

const ChatsWrapper = styled("div")({
  width: "-webkit-fill-available",
  maxWidth: "1300px",
  margin: "0 auto 0",
});

const UserChatBubble = styled("div")({
  backgroundColor: theme.userChatBubbleBackgroundColor,
  maxWidth: "300px",
  justifySelf: "end",
  ...bubbleSharedStyles,
  borderBottomRightRadius: 0,

  ...bubbleSharedResponsiveness,
  "@media (max-width: 640px)": {
    maxWidth: "250px",
  },
});

const SystemChatBubble = styled("div")({
  backgroundColor: theme.systemChatBubbleBackgroundColor,

  maxWidth: "290px",
  justifySelf: "start",
  ...bubbleSharedStyles,
  borderBottomLeftRadius: 0,

  ...bubbleSharedResponsiveness,
  "@media (max-width: 640px)": {
    maxWidth: "230px",
  },
});

const ResumeChatBubble = styled("div")({
  backgroundColor: theme.systemChatBubbleBackgroundColor,
  border: `1px solid ${theme.systemChatBubbleBorderColor}`,
  maxWidth: "1000px",
  width: "fit-content",
  padding: 16,
  borderRadius: 14,
  borderBottomLeftRadius: 0,
  justifySelf: "start",
  marginBottom: 20,
});

const ChatBubbleText = styled("p")({
  fontWeight: "400",
  fontSize: "15px",
  width: "fit-content",
  textAlign: "start",
  lineHeight: 1.5,

  "@media (max-width: 1024px)": {
    fontSize: "14px",
  },

  "@media (max-width: 800px)": {
    fontSize: "13px",
  },

  "@media (max-width: 640px)": {
    fontSize: "12px",
  },

  "@media (max-width: 420px)": {
    fontSize: "11px",
  },
});

function PromptWorkspacePage(props) {
  const { resumeId } = useParams();

  const resume = mockResumeDB.allResumes.find(
    (resume) => resume._id.toString() === resumeId
  );

  const [chats, setChats] = useState([]);
  const [isThinking, setIsThinking] = useState(false);

  const simulateUnavailableFeatureResponse = () => {
    setIsThinking(true);

    setTimeout(() => {
      const msg1 = {
        sender: "system",
        message:
          "⚠️ This feature is still under development. Soon you'll be able to generate fully customized resumes by just typing your prompt!",
        timestamp: new Date().toISOString(),
      };

      const msg2 = {
        sender: "system",
        message: "Prosper is still working on this feature",
        timestamp: new Date(Date.now() + 1000).toISOString(),
      };

      const msg3 = {
        sender: "system",
        message: "Full version will be released very soon! from now",
        timestamp: new Date(Date.now() + 2500).toISOString(),
      };

      const msg4 = {
        sender: "system",
        message: `- \`chats --version\` — to see app version`,
        timestamp: new Date(Date.now() + 3500).toISOString(),
      };

      setChats((prev) => [...prev, msg1]);

      setTimeout(() => {
        setChats((prev) => [...prev, msg2]);
      }, 1000);

      setTimeout(() => {
        setChats((prev) => [...prev, msg3]);
      }, 2500);

      setTimeout(() => {
        setChats((prev) => [...prev, msg4]);
      }, 3500);
      setIsThinking(false);
    }, 2000);
  };

  const startThinking = async (prompt) => {
    setIsThinking(true);

    // Simulate system response
    setTimeout(() => {
      const message =
        prompt === "chats --version" || prompt === "chats --version "
          ? "App version: ModelX — Alpha Preview v0.1.0 (Under Development)"
          : "⚠️ This feature is still under development. Soon you'll be able to generate fully customized resumes by just typing your prompt!";

      const systemResponse = {
        sender: "system",
        message: message,
        timestamp: new Date().toISOString(),
      };

      setChats((prev) => [...prev, systemResponse]);

      setIsThinking(false);
    }, 2000);
  };

  useEffect(() => {
    if (resume) {
      setChats(resume.chats);

      if (resume.needsInitialResponse) {
        // ✅ Prevent second response
        simulateUnavailableFeatureResponse();

        // ✅ Simulate backend update so it doesn’t happen again
        resume.needsInitialResponse = false;
      }
    }
  }, [resume]);

  const updateChat = async (prompt) => {
    const newUserMessage = {
      sender: "user",
      message: prompt,
      timestamp: new Date().toISOString(),
    };

    setChats((prev) => [...prev, newUserMessage]); // ✅ immutably update

    startThinking(prompt);
  };

  return (
    <PageWrapper>
      <AppHeader />

      <ChatsWrapper>
        {chats.map(({ message, sender }, index) => {
          return sender === "user" ? (
            <UserChatBubble key={index}>
              <ChatBubbleText sx={{ color: theme.userChatBubbleTextColor }}>
                {message}
              </ChatBubbleText>
            </UserChatBubble>
          ) : (
            <SystemChatBubble key={index}>
              <ChatBubbleText sx={{ color: theme.systemChatBubbleTextColor }}>
                {message}
              </ChatBubbleText>
            </SystemChatBubble>
          );
        })}
        {isThinking && <TypingIndicator />}
      </ChatsWrapper>
      <PromptInputArea
        isNewChat={false}
        updateChat={updateChat}
        isSystemThinking={isThinking}
      />
    </PageWrapper>
  );
}

export default PromptWorkspacePage;
