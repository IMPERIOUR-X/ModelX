import React from "react";
import theme from "../theme";
import { styled } from "@mui/material";
import {
  SectionHeading,
  SectionSubheading,
} from "../components/shared/Typograhpy";
import { useNavigate } from "react-router-dom";

const PageWrapper = styled("main")({
  backgroundColor: theme.mainBackgroundColor,
  justifyContent: "center",
  display: "flex",
});

const MainWrapper = styled("div")({
  width: "fit-content",
  margin: "80px 0 0",
});

const ErrorCode = styled("h1")({
  fontSize: 50,
  color: theme.dangerTextColor,
  fontWeight: 600,
  margin: "0 0 20px",

  "@media (max-width: 1024px)": {
    fontSize: "40px",
  },

  "@media (max-width: 800px)": {
    fontSize: "30px",
  },

  "@media (max-width: 400px)": {
    fontSize: "20px",
  },
});

const ErrorBadMessage = styled(SectionHeading)({
  color: theme.dangerTextColor,
  textAlign: "start",
});

const ErrorGoodMessage = styled(SectionSubheading)({
  color: theme.successTextColor,
  textAlign: "start",
});

const NavButton = styled("button")({
  backgroundColor: theme.buttonBackground,
  color: theme.buttonTextColor,
  border: "none",
  padding: "16px",
  margin: "40px 0 0",
  width: "fit-content",
  fontSize: 18,
  fontWeight: 600,
  borderRadius: 10,
  transition: "all 0.1s ease-in-out",

  "&:hover": {
    backgroundColor: theme.buttonHoverBackground,
  },

  "&:active": {
    transform: "scale(0.9)",
  },

  "@media (max-width: 800px)": {
    fontSize: 16,
  },

  "@media (max-width: 400px)": {
    fontSize: 14,
  },
});

function ErrorPage(props) {
  const navigate = useNavigate();

  return (
    <PageWrapper>
      <MainWrapper>
        <ErrorCode>Error code: 500</ErrorCode>
        <ErrorBadMessage>Ooops, Server still under development</ErrorBadMessage>
        <ErrorGoodMessage>
          Prosper is still work on the backend servers please stay toned
        </ErrorGoodMessage>

        <NavButton onClick={() => navigate("/auth")}>Go Back</NavButton>
      </MainWrapper>
    </PageWrapper>
  );
}

export default ErrorPage;
