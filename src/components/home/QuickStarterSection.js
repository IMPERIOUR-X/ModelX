import React, { useEffect, useRef } from "react";
import theme from "../../theme";
import { styled } from "@mui/material";

const starterItems = [
  "Write a resume for a frontend developer job",
  "Optimize my resume for a marketing role in tech",
  "Create an ATS-compliant resume for a software engineer",
  "Generate a resume for a data analyst with 2 years experience",
  "I am applying for a teacher job",
  "Optimize for a product manager role",
  "I want a resume for internship",
  "Craft a leadership-oriented resume",
  "Create resume for finance analyst",
  "Make a resume for HR position",
  "Resume for healthcare sector",
  "Resume for startup founder role",
  "Resume with 10+ years experience",
  "Resume for entry-level data scientist",
];

const QuickStarterWrapper = styled("div")({
  width: "-webkit-fill-available",
  padding: "10px 30px",
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  gap: "16px",
  overflowX: "auto",
  whiteSpace: "nowrap",
  scrollbarWidth: "none", // Firefox
  msOverflowStyle: "none", // IE

  "&::-webkit-scrollbar": {
    display: "none", // Chrome/Safari
  },
});

const QuickStarter = styled("div")({
  backgroundColor: theme.primaryBackgroundColor,
  padding: "14px",
  borderRadius: "10px",
  cursor: "pointer",
  transition: "background-color 0.3s ease, transform 0.2s ease",

  "&:hover": {
    backgroundColor: theme.primaryHoverBackgroundColor,
    transform: "scale(1.03)",
  },

  "&:active": {
    transform: "scale(0.96)",
    backgroundColor: theme.primaryActiveBackgroundColor,
  },
});

const QuickStarterText = styled("h6")({
  color: theme.primaryTextColor,
  fontWeight: 400,
  fontSize: "15px",
  textAlign: "start",
  lineHeight: 1.3,

  "@media (max-width: 1024px)": { fontSize: "14px" },
  "@media (max-width: 900px)": { fontSize: "13px" },
  "@media (max-width: 800px)": { fontSize: "12px" },
  "@media (max-width: 670px)": { fontSize: "11px" },
  "@media (max-width: 580px)": { fontSize: "10px" },
  "@media (max-width: 420px)": { fontSize: "9px" },
  "@media (max-width: 385px)": { fontSize: "8px" },
});

function QuickStarterSection() {
  const scrollRef = useRef(null);
  const intervalRef = useRef(null);

  // Auto-scroll logic
  useEffect(() => {
    const startAutoScroll = () => {
      if (scrollRef.current) {
        intervalRef.current = setInterval(() => {
          scrollRef.current.scrollLeft += 1;
        }, 20);
      }
    };

    const stopAutoScroll = () => {
      clearInterval(intervalRef.current);
    };

    startAutoScroll();
    return stopAutoScroll;
  }, []);

  const handleHover = () => clearInterval(intervalRef.current);

  const handleLeave = () => {
    intervalRef.current = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
      }
    }, 20);
  };

  return (
    <QuickStarterWrapper ref={scrollRef}>
      {starterItems.map((value, index) => (
        <QuickStarter
          key={index}
          onMouseEnter={handleHover}
          onMouseLeave={handleLeave}
        >
          <QuickStarterText>{value}</QuickStarterText>
        </QuickStarter>
      ))}
    </QuickStarterWrapper>
  );
}

export default QuickStarterSection;
