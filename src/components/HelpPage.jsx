import React from "react";
import "./HelpPage.css";

function HelpPage() {
  return (
    <div className="help-page">
      <h1>How can we help you?</h1>
      <div className="help-section">
        <h2>Getting Started</h2>
        <ul>
          <li>Learn how to browse meals and place orders.</li>
          <li>How to apply coupons during checkout.</li>
        </ul>
      </div>
      <div className="help-section">
        <h2>FAQs</h2>
        <ul>
          <li>How do I cancel an order?</li>
          <li>Can I change my delivery address?</li>
        </ul>
      </div>
      <div className="help-section">
        <h2>Need Personalized Help?</h2>
        <p>Coming soon: Chat with our assistant!</p>
      </div>
    </div>
  );
}

export default HelpPage;
