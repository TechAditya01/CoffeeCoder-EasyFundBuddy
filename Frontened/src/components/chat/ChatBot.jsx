// src/components/chat/ChatBot.jsx
import { useState } from 'react';
import ChatMessage from './ChatMessage';

const ChatBot = ({ onClose }) => {
  const [messages, setMessages] = useState([
    { text: 'Hello! How can I help you today?', isBot: true }
  ]);
  const [inputText, setInputText] = useState('');

  const handleSend = () => {
    if (!inputText.trim()) return;

    // Add user message
    setMessages(prev => [...prev, { text: inputText, isBot: false }]);

    // Simulate bot response
    setTimeout(() => {
      setMessages(prev => [...prev, {
        text: "Thank you for your message. Our team will assist you shortly.",
        isBot: true
      }]);
    }, 1000);

    setInputText('');
  };

  return (
    <div className="card" style={{ width: '300px', height: '400px' }}>
      <div className="card-header bg-primary text-white d-flex justify-content-between align-items-center">
        <h5 className="mb-0">Chat Support</h5>
        <button 
          className="btn-close btn-close-white"
          onClick={onClose}
        ></button>
      </div>
      
      <div className="card-body p-3" style={{ overflowY: 'auto', height: '300px' }}>
        {messages.map((msg, index) => (
          <ChatMessage key={index} message={msg} />
        ))}
      </div>

      <div className="card-footer bg-light">
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Type a message..."
            value={inputText}
            onChange={(e) => setInputText(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
          />
          <button 
            className="btn btn-primary"
            onClick={handleSend}
          >
            <i className="bi bi-send"></i>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatBot;
