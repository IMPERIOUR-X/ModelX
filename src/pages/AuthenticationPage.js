import React, { useState } from "react";
import theme from "../theme";
import { BigHeader, SectionSubheading } from "../components/shared/Typograhpy";
import { styled } from "@mui/material";
import { Link, useNavigate } from "react-router-dom";
import OptionDivider from "../components/Authentication/OptionDivider";
import { PrimaryFilledButton } from "../components/shared/Buttons";
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
import { useAuth } from "../context/AuthContext";

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

function AuthenticationPage(props) {
  const [loginDetails, setLoginDetails] = useState({ email: "", password: "" });
  const [createAccount, setCreateAccount] = useState(false);
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const { login } = useAuth();

  const handleChange = (evt) => {
    const { name, value } = evt.target;

    setLoginDetails((prevs) => {
      return { ...prevs, [name]: value };
    });
  };

  const handleClick = () => setCreateAccount((prevs) => !prevs);

  const handleSubmit = (evt) => {
    evt.preventDefault();
    setLoading(true); // start loading animation

    setTimeout(() => {
      // setted a timer to authenticate the user
      login(loginDetails); // saved user info
      setLoading(false); // stop loading animation
      navigate("/home"); // redirect the user to the home page
    }, 5000);
  };

  return (
    <PageWrapper>
      <LoadingOverlay isLoading={loading} />

      <HeadingWrapper>
        <BigHeader sx={{ marginBottom: "8px" }}>
          {createAccount ? "Sign up" : "Login"}
        </BigHeader>
        <SectionSubheading>
          {createAccount
            ? "Create a free Modelx account"
            : "Welcome back!, Enter your details"}
        </SectionSubheading>
      </HeadingWrapper>

      <MainContentWrapper>
        <Form onSubmit={handleSubmit}>
          <TextInput
            sx={{ margin: "0 0 20px" }}
            placeholder="Email"
            type="email"
            name="email"
            onChange={handleChange}
            value={loginDetails.email}
            required
          />
          <TextInput
            sx={{ margin: "0 0 6px" }}
            placeholder="Password"
            type="password"
            name="password"
            onChange={handleChange}
            value={loginDetails.password}
            minLength={8}
            required
          />
          <FormLink
            to={
              createAccount ? "/modelx-privacy_policy" : "/forgotten-password"
            }
          >
            {createAccount ? "Privacy Policy" : "forgotten password?"}
          </FormLink>
          <SubmitButton sx={{ margin: "20px 0 20px" }}>
            {createAccount ? "Continue" : "Log in"}
          </SubmitButton>
        </Form>

        <OptionDivider />

        <GoogleLink to="google-oauthentication_modelx">
          Continue with Google
        </GoogleLink>
        <FormText>
          {createAccount ? "Have an account" : "Create an account"}
        </FormText>

        <PrimaryFilledButton
          sx={{ margin: "20px 0 20px" }}
          onClick={handleClick}
        >
          {createAccount ? "Sign in" : "Sign up"}
        </PrimaryFilledButton>
      </MainContentWrapper>
    </PageWrapper>
  );
}

export default AuthenticationPage;
