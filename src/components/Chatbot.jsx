import React, { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Send, Bot, User, MapPin, Phone, Mail, CheckCircle2, Sparkles } from 'lucide-react';

export default function Chatbot() {
  const [isOpen, setIsOpen] = useState(false);
  const [inputMsg, setInputMsg] = useState('');
  const [messages, setMessages] = useState([
    {
      sender: 'bot',
      text: '👋 Welcome to PROTEIN HUB NUTRITION! How can I assist you today? Ask me about our store address, contact number, authentic products, or deals!'
    }
  ]);

  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen) {
      scrollToBottom();
    }
  }, [messages, isOpen]);

  const quickQuestions = [
    '📍 Store Address',
    '📞 Phone / WhatsApp',
    '💯 Authenticity Guarantee',
    '💊 Products & Supplements'
  ];

  const getBotResponse = (query) => {
    const q = query.toLowerCase();

    if (q.includes('address') || q.includes('location') || q.includes('where') || q.includes('dukan') || q.includes('store') || q.includes('kahan') || q.includes('pata')) {
      return `📍 **Store Address**:\nR-280/4, Street 7, Near Qadri Masjid, Jogabai Ext., Zakir Nagar, Okhla, New Delhi-25.`;
    }

    if (q.includes('phone') || q.includes('number') || q.includes('call') || q.includes('contact') || q.includes('whatsapp') || q.includes('mobile') || q.includes('nuber')) {
      return `📞 **Call / WhatsApp**:\n+91 9958417463\n\n✉️ **Email**:\nproteinhubnutrition@gmail.com`;
    }

    if (q.includes('authentic') || q.includes('genuine') || q.includes('real') || q.includes('asli') || q.includes('guarantee') || q.includes('original') || q.includes('fake')) {
      return `💯 **100% Authentic Guarantee**:\nPROTEIN HUB NUTRITION deals exclusively in 100% genuine & authentic supplements sourced directly from official brand importers with verified scratch code seals.`;
    }

    if (q.includes('product') || q.includes('protein') || q.includes('gainer') || q.includes('whey') || q.includes('creatine') || q.includes('bcaa') || q.includes('supplement') || q.includes('price')) {
      return `💪 **Our Product Range**:\n• Gold Standard Whey & Isolates\n• Mass Gainers & Weight Gainers\n• Pre-Workout & Creatine Monohydrate\n• Multivitamins, Fish Oil & BCAAs\n\nVisit our store at Zakir Nagar, New Delhi-25 or call +91 9958417463 for current stock & best prices!`;
    }

    if (q.includes('hi') || q.includes('hello') || q.includes('hey') || q.includes('kaise')) {
      return `Hello! How can I help you today? You can ask for our store address, phone number, product availability, or authenticity details!`;
    }

    return `Thank you for reaching out! For detailed stock availability and direct orders, please call us at **+91 9958417463** or visit our store at **R-280/4, Street 7, Near Qadri Masjid, Zakir Nagar, Okhla, New Delhi-25**.`;
  };

  const handleSend = (textToSend = null) => {
    const text = textToSend || inputMsg;
    if (!text.trim()) return;

    // Add User Message
    const userMsgObj = { sender: 'user', text };
    setMessages(prev => [...prev, userMsgObj]);
    if (!textToSend) setInputMsg('');

    // Generate Bot Response with slight natural delay
    setTimeout(() => {
      const replyText = getBotResponse(text);
      setMessages(prev => [...prev, { sender: 'bot', text: replyText }]);
    }, 400);
  };

  return (
    <div className="chatbot-wrapper">
      {/* Floating Toggle Button */}
      <button 
        className={`chatbot-toggle-btn ${isOpen ? 'active' : ''}`}
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle Assistant Chatbot"
      >
        {isOpen ? <X size={24} /> : <MessageSquare size={24} />}
        {!isOpen && <span className="chatbot-badge">Assistant</span>}
      </button>

      {/* Chat Window Box */}
      {isOpen && (
        <div className="chatbot-window">
          {/* Header */}
          <div className="chatbot-header">
            <div className="chatbot-header-info">
              <div className="chatbot-avatar">
                <Bot size={20} className="gold-icon" />
              </div>
              <div>
                <h4>PROTEIN HUB ASSISTANT</h4>
                <span className="online-indicator">🟢 Online | 100% Authentic</span>
              </div>
            </div>
            <button className="chatbot-close-icon" onClick={() => setIsOpen(false)}>
              <X size={18} />
            </button>
          </div>

          {/* Messages Body */}
          <div className="chatbot-messages">
            {messages.map((msg, index) => (
              <div key={index} className={`chat-bubble-row ${msg.sender}`}>
                <div className="chat-bubble">
                  {msg.text.split('\n').map((line, i) => (
                    <p key={i}>{line}</p>
                  ))}
                </div>
              </div>
            ))}
            <div ref={messagesEndRef} />
          </div>

          {/* Quick Chip Questions */}
          <div className="chatbot-quick-chips">
            {quickQuestions.map((q, idx) => (
              <button 
                key={idx} 
                className="chip-btn"
                onClick={() => handleSend(q)}
              >
                {q}
              </button>
            ))}
          </div>

          {/* Input Form */}
          <form 
            className="chatbot-input-form"
            onSubmit={(e) => {
              e.preventDefault();
              handleSend();
            }}
          >
            <input 
              type="text"
              placeholder="Ask address, phone, products..."
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
            />
            <button type="submit" className="chatbot-send-btn" disabled={!inputMsg.trim()}>
              <Send size={16} />
            </button>
          </form>
        </div>
      )}
    </div>
  );
}
