import React from "react";
import { styled } from "@mui/material/styles";
import { getInitials, stringToColor } from "../../utils/avatarHelpers";
import theme from "../../theme";

const AvatarWrapper = styled("div")(({ bgcolor, size }) => ({
  width: size || 40,
  height: size || 40,
  borderRadius: "50%",
  backgroundColor: bgcolor,
  color: theme.highlightColor,
  cursor: "pointer",
  fontWeight: 600,
  fontSize: 16,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  textTransform: "uppercase",
  overflow: "hidden",
  userSelect: "none",
  transition: "transform 0.1s ease-in-out",

  "&:active": {
    transform: "scale(0.9)",
  },

  "@media (max-width: 1024px)": {
    width: 36,
    height: 36,
    fontSize: 14,
  },

  "@media (max-width: 800px)": {
    width: 34,
    height: 34,
    fontSize: 12,
  },

  "@media (max-width: 400px)": {
    width: 30,
    height: 30,
    fontSize: 10,
  },
}));

const AvatarImage = styled("img")({
  width: "100%",
  height: "100%",
  objectFit: "cover",
  borderRadius: "50%",
  display: "block",
});

const CustomAvatar = ({ name = "", src = "", size = 40 }) => {
  const initials = getInitials(name);
  const bgColor = stringToColor(name);

  return (
    <AvatarWrapper bgcolor={bgColor} size={size}>
      {src ? <AvatarImage src={src} alt={name} /> : initials}
    </AvatarWrapper>
  );
};

export default CustomAvatar;
