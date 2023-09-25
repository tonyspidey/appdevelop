import React, { useState } from 'react';
import '../assets/css/Faq.css';

function Faq() {
  const initialQuestions = [
    {
      id: 1,
      question: 'How do I place an order?',
      answer: 'You can place an order by selecting the book you want, adding it to your cart, and proceeding to checkout.',
      isOpen: false,
    },
    {
      id: 2,
      question: 'What payment methods do you accept?',
      answer: 'We accept credit/debit cards and PayPal as our primary payment methods.',
      isOpen: false,
    },
    {
      id: 3,
      question: 'How long does shipping take?',
      answer: 'Shipping times may vary, but we typically deliver orders within 5-7 business days.',
      isOpen: false,
    },
    {
      id: 4,
      question: 'Do you offer returns or refunds?',
      answer: 'Yes, we have a hassle-free return policy. If you are not satisfied with your purchase, please review our Return and Refund Policy for details.',
      isOpen: false,
    },
    {
      id: 5,
      question: 'Can I track my order?',
      answer: 'Yes, once your order is shipped, you will receive a tracking number that you can use to track the status of your delivery.',
      isOpen: false,
    },
  ];

  const [questions, setQuestions] = useState(initialQuestions);

  const toggleAnswer = (id) => {
    const updatedQuestions = questions.map((q) => {
      if (q.id === id) {
        return { ...q, isOpen: !q.isOpen };
      }
      return q;
    });
    setQuestions(updatedQuestions);
  };

  return (
    <div className="faq-container">
      <h1>Frequently Asked Questions</h1>
      <div className="faq-list">
        {questions.map((q) => (
          <div className="faq-item" key={q.id}>
            <div
              className={`faq-question ${q.isOpen ? 'open' : ''}`}
              onClick={() => toggleAnswer(q.id)}
            >
              <span className="faq-icon">
                {q.isOpen ? '-' : '+'}
              </span>
              {q.question}
            </div>
            {q.isOpen && <div className="faq-answer">{q.answer}</div>}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Faq;
