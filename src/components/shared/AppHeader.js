import React from "react";
import theme from "../../theme";
import { styled } from "@mui/material";
import { PrimaryFilledLinkButton } from "./Buttons";
import CustomAvatar from "./CustomAvatar";
import { useAuth } from "../../context/AuthContext";

const Header = styled("header")({
  backgroundColor: theme.mainBackgroundColor,
  display: "flex",
  position: "fixed",
  top: 0,
  width: "-webkit-fill-available",
  zIndex: 100,
});

const BrandWrapper = styled("div")({
  alignContent: "center",
});

const BrandName = styled("h1")({
  color: theme.highlightColor,
  fontWeight: "500",
  fontSize: "26px",
  width: "fit-content",
  cursor: "pointer",

  "@media (max-width: 1024px)": {
    fontSize: "26px",
  },

  "@media (max-width: 800px)": {
    fontSize: "24px",
  },

  "@media (max-width: 400px)": {
    fontSize: "22px",
  },
});

const AvatarWrapper = styled("div")({
  width: "fit-content",
  marginBottom: "3px",
  marginLeft: "auto",
});

function AppHeader() {
  const { user } = useAuth();

  return (
    <Header>
      <BrandWrapper>
        <BrandName>ModelX</BrandName>
      </BrandWrapper>

      {user !== null ? (
        <AvatarWrapper>
          <CustomAvatar name="Unknown" />
        </AvatarWrapper>
      ) : (
        <PrimaryFilledLinkButton
          to="/auth"
          sx={{ marginBottom: "3px", marginLeft: "auto" }}
        >
          Log in
          {console.log(user)}
        </PrimaryFilledLinkButton>
      )}
    </Header>
  );
}

export default AppHeader;
