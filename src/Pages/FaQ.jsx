import React from 'react';

const FaQ = () => {
  const faqItems = [
    {
      question: 'How do I place an order?',
      answer: 'You can place an order by visiting our online store and selecting the items you wish to purchase. Then, proceed to checkout and follow the instructions to complete your order.'
    },
    {
      question: 'What payment methods do you accept?',
      answer: 'We accept all major credit cards, PayPal, and Apple Pay for online purchases. For in-store purchases, we also accept cash and debit cards.'
    },
    {
      question: 'How can I track my order?',
      answer: 'Once your order has been shipped, you will receive a confirmation email with a tracking number. You can use this tracking number to monitor the status of your delivery.'
    }
    // Add more FAQ items as needed
  ];

  return (
    <div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqItems.map((item, index) => (
        <div key={index} className="faq-item">
          <h3>{item.question}</h3>
          <p>{item.answer}</p>
        </div>
      ))}
    </div>
  );
};

export default FaQ;
