import React, { useState } from "react";
// import "./HelpPage.css";

function FAQItem({ question, answer }) {
  const [open, setOpen] = useState(false);

  return (
    <div className="faq-item" onClick={() => setOpen(!open)}>
      <div className="faq-question">
        {question}
        <span className="faq-toggle">{open ? "−" : "+"}</span>
      </div>
      {open && <div className="faq-answer">{answer}</div>}
    </div>
  );
}

function HelpPage() {
  return (
    <div className="help-page">
      <h2>Welcome to Foodiee Help & Support Center <br/>
      We're here to help you out</h2>

      <div className="help-section">
        <h2>Ordering with Foodiee</h2>
        <FAQItem
          question="How do I place an order?"
          answer="Browse your favorite restaurants, add meals to cart, and tap 'Checkout' to place your order."
        />
        <FAQItem
          question="How can I apply promo codes?"
          answer="Enter your promo code at the checkout screen under 'Offers & Promos'."
        />
      </div>

      <div className="help-section">
        <h2>Your Orders</h2>
        <FAQItem
          question="Can I cancel my order?"
          answer="Yes, you can cancel before the restaurant starts preparing your meal. Go to 'My Orders' and select 'Cancel'."
        />
        <FAQItem
          question="How can I track my order?"
          answer="Real-time order tracking is available in the 'My Orders' section after placing your order."
        />
      </div>

      <div className="help-section">
        <h2>Payments & Refunds</h2>
        <FAQItem
          question="Which payment methods are accepted?"
          answer="We accept UPI, debit/credit cards, net banking, and Foodiee wallet."
        />
        <FAQItem
          question="When will I receive my refund?"
          answer="Refunds are processed within 5–7 business days to your original payment method."
        />
      </div>

      <div className="help-section">
        <h2>Need More Help?</h2>
        <p>
          Chat support coming soon! For now, reach us at <b>support@foodiee.app</b>
        </p>
      </div>
    </div>
  );
}

export default HelpPage;
