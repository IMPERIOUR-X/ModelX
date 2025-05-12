import React from "react";
import theme from "../../theme";
import { styled } from "@mui/material";
import Avatar from "./Avatar";
import IMPERIOURX from "../../assets/IMPERIOURX.png";
import NwaolisaProsperEmmanuel from "../../assets/NwaolisaProsperEmmanuel.jpg";
import VisionX from "../../assets/VisionX.png";

const ContributorsWrapper = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "wrap",
  gap: 18,
  backgroundColor: theme.primaryBackgroundColor,
  padding: "13px 17px",
  borderRadius: "10px",
  width: "fit-content",
  margin: "25px 0 0",
  justifyContent: "center",
});

const ContributorInfo = styled("div")({
  display: "flex",
  flexDirection: "row",
  flexWrap: "nowrap",
  gap: 12,
  cursor: "pointer",
});

const Divider = styled("div")({
  height: "40px",
  width: "2px",
  backgroundColor: theme.mainBackgroundColor,

  "@media (max-width: 589px)": {
    width: "-webkit-fill-available",
    height: "2px",
  },
});

const MultiAvatarWrapper = styled("div")({
  position: "relative",
  width: "65px",
});

const ContributorTextWrapper = styled("div")({
  alignContent: "center",
});

const ContributorsName = styled("p")({
  color: theme.primaryTextColor,
  fontSize: "12px",
  fontWeight: 600,
  width: "fit-content",
});

const ContributorsRole = styled("p")({
  color: theme.secondaryTextColor,
  fontSize: "12px",
  fontWeight: 200,
  width: "fit-content",
  textTransform: "uppercase",
});

function Contributors(props) {
  return (
    <ContributorsWrapper>
      <ContributorInfo>
        <Avatar src={NwaolisaProsperEmmanuel} alt="NwaolisaProsperEmmanuel " />
        <ContributorTextWrapper>
          <ContributorsName>Nwaolisa Prosper Emmanuel</ContributorsName>
          <ContributorsRole>CEO & FOUNDER, SENIOR DEV</ContributorsRole>
        </ContributorTextWrapper>
      </ContributorInfo>

      <Divider></Divider>

      <ContributorInfo>
        <MultiAvatarWrapper>
          <Avatar src={IMPERIOURX} alt="IMPERIOURX logo" />
          <Avatar
            sx={{
              position: "absolute",
              right: 0,
            }}
            src={VisionX}
            alt="VisionX logo"
          />
        </MultiAvatarWrapper>
        <ContributorTextWrapper>
          <ContributorsName>Form other sources</ContributorsName>
          <ContributorsRole>ALSO OWN BY EMMANUEL.</ContributorsRole>
        </ContributorTextWrapper>
      </ContributorInfo>
    </ContributorsWrapper>
  );
}

export default Contributors;
