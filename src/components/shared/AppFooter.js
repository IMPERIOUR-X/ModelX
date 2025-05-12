import React from "react";
import theme from "../../theme";
import { styled } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";
import TelegramIcon from "@mui/icons-material/Telegram";

const icons = [
  InstagramIcon,
  YouTubeIcon,
  TelegramIcon,
  WhatsAppIcon,
  GitHubIcon,
];

const FooterWrapper = styled("footer")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  justifyContent: "space-between",
  padding: " 30px 0 10px",
});

const IconWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  justifyContent: "space-between",
  padding: 0,
  width: "200px",

  "@media (max-width: 1024px)": {
    width: "300px",
  },

  "@media (max-width: 340px)": {
    width: "-webkit-fill-available",
  },
});

const Icon = styled("div")({
  width: "fit-content",
  fontSize: "15px",
  color: theme.highlightColor,
  alignContent: "center",
  cursor: "pointer",
  transition: "transform 0.1s ease-in-out",

  "&:active": {
    transform: "scale(0.9)",
  },
});

const FooterText = styled("p")({
  fontSize: "15px",
  color: theme.highlightColor,
  width: "fit-content",
  alignContent: "center",
});

const LanguageContainer = styled("div")({
  backgroundColor: theme.primaryBackgroundColor,
  padding: "10px 20px",
  display: "flex",
  borderRadius: "20px",
  justifyContent: "space-between",
  width: "161px",
  cursor: "pointer",
  transition: "transform 0.1s ease-in-out",

  "&:active": {
    transform: "scale(0.9)",
  },
});

const LanguageContry = styled(FooterText)({
  color: theme.secondaryTextColor,
});

const Container = styled("div")({
  width: "fit-content",
  justifyItems: "center",
  alignContent: "center",

  "@media (max-width: 1024px)": {
    width: "-webkit-fill-available",
    margin: " 0 0 30px",
  },
});

function AppFooter(props) {
  return (
    <FooterWrapper>
      <Container>
        <IconWrapper>
          {icons.map((CurrentIcon, index) => {
            return (
              <Icon key={index + 1}>
                <CurrentIcon />
              </Icon>
            );
          })}
        </IconWrapper>
      </Container>

      <Container>
        <FooterText>ModelX © 2025–2025</FooterText>
      </Container>

      <Container sx={{ margin: 0 }}>
        <LanguageContainer>
          <FooterText>English</FooterText>
          <LanguageContry>United States</LanguageContry>
        </LanguageContainer>
      </Container>
    </FooterWrapper>
  );
}

export default AppFooter;
