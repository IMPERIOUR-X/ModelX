import React from "react";
import theme from "../theme";
import { BigHeader, SectionSubheading } from "../components/shared/Typograhpy";
import { styled } from "@mui/material";
import { Link } from "react-router-dom";
import OptionDivider from "../components/Authentication/OptionDivider";
import { PrimaryFilledButton } from "../components/shared/Buttons";

const PageWrapper = styled("main")({
  backgroundColor: theme.mainBackgroundColor,
  justifyItems: "center",
  padding: "30px 0 0 ",
});

const HeadingWrapper = styled("div")({
  justifyItems: "center",
});

const MainContentWrapper = styled("div")({
  width: "-webkit-fill-available",
  maxWidth: "444px",
  justifyItems: "center",
});

const Form = styled("form")({
  width: "-webkit-fill-available",
  padding: "20px 0",
});

const TextInput = styled("input")({
  color: theme.primaryTextColor,
  background: "transparent",
  border: `1px solid ${theme.borderColor}`,
  borderRadius: 10,
  padding: 20,
  width: "-webkit-fill-available",
  outline: "none",

  "&::placeholder": {
    color: theme.primaryTextColor,
    fontWeight: "400",
    fontSize: "13px",
    opacity: 1,
  },
});

const FormLink = styled(Link)({
  textDecoration: "none",
  color: theme.accentColor,
  cursor: "pointer",
  fontSize: 13,
  width: "fit-content",

  "&:hover": {
    color: theme.accentHoverColor,
  },
});

const FormText = styled("p")({
  textDecoration: "none",
  color: theme.primaryTextColor,
  fontSize: 13,
  fontWeight: 600,
  width: "fit-content",
});

const SubmitButton = styled("button")({
  backgroundColor: theme.buttonBackground,
  color: theme.buttonTextColor,
  border: "none",
  padding: "20px 0",
  width: "-webkit-fill-available",
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

const GoogleLink = styled(Link)({
  color: theme.primaryTextColor,
  background: "transparent",
  border: `1px solid ${theme.borderColor}`,
  borderRadius: 10,
  padding: 20,
  width: "-webkit-fill-available",
  fontSize: 16,
  fontWeight: 600,
  display: "block",
  textDecoration: "none",
  textAlign: "center",
  margin: "40px 0 20px",
  transition: "all 0.1s ease-in-out",

  "&:hover": {
    transform: "scale(1.03)",
  },

  "&:active": {
    transform: "scale(0.9)",
  },
});

function AuthenticationPage(props) {
  return (
    <PageWrapper>
      <HeadingWrapper>
        <BigHeader sx={{ marginBottom: "8px" }}>Login</BigHeader>
        <SectionSubheading>Welcome back!, Enter your details</SectionSubheading>
      </HeadingWrapper>

      <MainContentWrapper>
        <Form>
          <TextInput
            sx={{ margin: "0 0 20px" }}
            placeholder="Email"
            type="email"
          />
          <TextInput
            sx={{ margin: "0 0 6px" }}
            placeholder="Password"
            type="password"
          />
          <FormLink to="/forgotten-password">forgotten password?</FormLink>
          <SubmitButton sx={{ margin: "20px 0 20px" }}>Sign in</SubmitButton>
        </Form>

        <OptionDivider />

        <GoogleLink to="google-oauthentication_modelx">
          Continue with Google
        </GoogleLink>
        <FormText>Create an account</FormText>

        <PrimaryFilledButton sx={{ margin: "20px 0 20px" }}>
          Sign up
        </PrimaryFilledButton>
      </MainContentWrapper>
    </PageWrapper>
  );
}

export default AuthenticationPage;
