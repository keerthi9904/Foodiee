import React from "react";

function ChatbotGreeting() {
  return (
    <a href="/help" target="_blank" rel="noopener noreferrer">
      <div className="chatbot-greeting">
        <img src="/chatbot.png" alt="Assistant" className="chatbot-avatar" />
        <div className="chatbot-text">
          Need help? I’m here to guide you!
        </div>
      </div>
    </a>
  );
}

export default ChatbotGreeting;
