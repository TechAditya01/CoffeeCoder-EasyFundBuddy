// src/components/chat/ChatMessage.jsx
const ChatMessage = ({ message }) => {
  const messageClass = message.isBot 
    ? 'bg-light rounded p-2 mb-2'
    : 'bg-primary text-white rounded p-2 mb-2 text-end';

  return (
    <div className={messageClass} style={{ maxWidth: '80%', marginLeft: message.isBot ? '0' : 'auto' }}>
      {message.text}
    </div>
  );
};

export default ChatMessage;