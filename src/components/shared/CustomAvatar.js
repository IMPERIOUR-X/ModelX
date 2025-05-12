import React from "react";
import { styled } from "@mui/material/styles";
import { getInitials, stringToColor } from "../../utils/avatarHelpers";
import theme from "../../theme";

const AvatarWrapper = styled("div")(({ bgcolor, size }) => ({
  width: size || 38,
  height: size || 38,
  borderRadius: "50%",
  backgroundColor: bgcolor,
  color: theme.highlightColor,
  fontWeight: 600,
  fontSize: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "uppercase",
  overflow: "hidden",
  userSelect: "none",
}));

const AvatarImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "50%",
  display: "block",
});

const CustomAvatar = ({ name = "", src = "", size = 38 }) => {
  const initials = getInitials(name);
  const bgColor = stringToColor(name);

  return (
    <AvatarWrapper bgcolor={bgColor} size={size}>
      {src ? <AvatarImage src={src} alt={name} /> : initials}
    </AvatarWrapper>
  );
};

export default CustomAvatar;
