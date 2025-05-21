import React, { useState } from "react";
import theme from "../theme";
import { BigHeader, SectionSubheading } from "../components/shared/Typograhpy";
import OptionDivider from "../components/Authentication/OptionDivider";
import { PrimaryFilledButton } from "../components/shared/Buttons";
import { useNavigate } from "react-router-dom";
import { styled } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import {
  PageWrapper,
  HeadingWrapper,
  MainContentWrapper,
  Form,
  TextInput,
  FormText,
  SubmitButton,
  GoogleLink,
} from "../components/Authentication/Components";
import LoadingOverlay from "../components/shared/LoadingOverlay";

const FeedBackMessageWrapper = styled("div")({
  background: "transparent",
  border: `1px solid ${theme.borderColor}`,
  borderRadius: 10,
  padding: "0 20px",
  height: 100,
  width: "-webkit-fill-available",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  textDecoration: "none",
  textAlign: "center",
  margin: "40px 0 20px",
  transition: "all 0.1s ease-in-out",
});

const FeedBackMessageText = styled("p")({
  color: theme.primaryTextColor,
  fontSize: 16,
  fontWeight: 600,
});

const FeedBackMessageIcon = styled("div")({
  width: "fit-content",
  color: theme.dangerTextColor,
});

const FeedBackButtonContainer = styled("div")({
  width: "-webkit-fill-available",
});

function AuthenticationPage(props) {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [infoSubmitted, setInfoSubmitted] = useState(false);

  function handleChange(evt) {
    const { value } = evt.target;

    setEmail(value);
  }

  function handleFeedback() {
    setLoading(true);

    setTimeout(() => {
      setLoading(false);
      setInfoSubmitted((prevs) => !prevs);
    }, 500);
  }

  return (
    <PageWrapper>
      <LoadingOverlay isLoading={loading} />
      <HeadingWrapper>
        <BigHeader sx={{ marginBottom: "8px" }}>Forgotten Password</BigHeader>
        <SectionSubheading>
          {infoSubmitted ? "invaild email" : "Enter your details"}
        </SectionSubheading>
      </HeadingWrapper>

      <MainContentWrapper>
        {infoSubmitted ? (
          <>
            <FeedBackMessageWrapper>
              <FeedBackMessageText>Email does not exist</FeedBackMessageText>
              <FeedBackMessageIcon>
                <CloseIcon sx={{ fontSize: 50 }} />
              </FeedBackMessageIcon>
            </FeedBackMessageWrapper>

            <FeedBackButtonContainer>
              <SubmitButton
                sx={{ margin: "20px 0 20px", width: "inherit" }}
                onClick={handleFeedback}
              >
                Try again
              </SubmitButton>
            </FeedBackButtonContainer>
          </>
        ) : (
          <>
            <Form
              onSubmit={(evt) => {
                evt.preventDefault();
                handleFeedback();
              }}
            >
              <TextInput
                placeholder="Email"
                type="email"
                name="email"
                onChange={handleChange}
                value={email}
                required
              />
              <SubmitButton sx={{ margin: "20px 0 20px" }}>
                Confirm
              </SubmitButton>
            </Form>

            <OptionDivider />

            <GoogleLink to="google-oauthentication_modelx">
              Continue with Google
            </GoogleLink>
            <FormText>Create an account</FormText>

            <PrimaryFilledButton
              sx={{ margin: "20px 0 20px" }}
              onClick={() => navigate("/auth")}
            >
              Sign up
            </PrimaryFilledButton>
          </>
        )}
      </MainContentWrapper>
    </PageWrapper>
  );
}

export default AuthenticationPage;
