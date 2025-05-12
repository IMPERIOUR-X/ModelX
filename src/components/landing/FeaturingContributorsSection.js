import React from "react";
import { styled } from "@mui/material";
import Contributors from "../shared/Contributors";
import { SectionHeading, SectionSubheading } from "../shared/Typograhpy";

const SectionWrapper = styled("section")({
  width: "-webkit-fill-available",
  padding: "60px 0 120px",
  justifyItems: "center",
});

function FeaturingContributorsSection(props) {
  return (
    <SectionWrapper>
      <SectionHeading>
        Featuring the Developers and Contributors Behind ModelX
      </SectionHeading>

      <SectionSubheading>
        Meet the minds building smarter tools to empower job seekers everywhere.
      </SectionSubheading>

      <Contributors />
    </SectionWrapper>
  );
}

export default FeaturingContributorsSection;
