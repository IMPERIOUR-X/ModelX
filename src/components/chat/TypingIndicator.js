import React from "react";
import "./TypingIndicator.css"; // Import the animation styles

const TypingIndicator = () => {
  return (
    <div className="system-bubble typing-indicator">
      <div className="typing-dots">
        <span></span>
        <span></span>
        <span></span>
      </div>
    </div>
  );
};

export default TypingIndicator;
