import React from "react";
import { styled, keyframes } from "@mui/material";
import theme from "../../theme";

// Animation for pulsing letters
const pulse = keyframes`
  0% { transform: scale(1); opacity: 0.7; }
  50% { transform: scale(1.3); opacity: 1; }
  100% { transform: scale(1); opacity: 0.7; }
`;

// Full-screen overlay
const Overlay = styled("div")({
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  zIndex: 9999,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  pointerEvents: "auto", // blocks interaction
  opacity: 1,
  transition: "opacity 0.3s ease",
});

const Letter = styled("div")(({ delay, color }) => ({
  fontSize: "48px",
  fontWeight: "bold",
  color: color,
  animation: `${pulse} 1s ${delay}s infinite`,
  margin: "0 10px",
}));

const LoadingOverlay = ({ isLoading }) => {
  if (!isLoading) return null;

  return (
    <Overlay>
      <Letter delay={0} color={theme.loadingColor1}>
        M
      </Letter>
      <Letter delay={0.3} color={theme.loadingColor2}>
        X
      </Letter>
    </Overlay>
  );
};

export default LoadingOverlay;
