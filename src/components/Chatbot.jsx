import { useState, useRef, useEffect } from 'react';
import { MessageSquare, X, Paperclip, MoreVertical, Send, ChevronDown } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images.jpg';
import './Chatbot.css';

const Chatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    {
      id: 1,
      sender: 'bot',
      text: "Hi! 👋\nHow can we help you today?",
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    }
  ]);
  const [inputValue, setInputValue] = useState('');
  const messagesEndRef = useRef(null);

  const predefinedOptions = [
    "I haven't ordered yet and have a question or need help.",
    "I've placed an order and have a question or need help.",
    "Store Locations and Hours",
    "Dietary & Allergens"
  ];

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (inputValue.trim() === '') return;

    const newUserMsg = {
      id: Date.now(),
      sender: 'user',
      text: inputValue,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };

    setMessages([...messages, newUserMsg]);
    setInputValue('');

    // Simulate bot thinking then replying
    setTimeout(() => {
      const botReply = {
        id: Date.now() + 1,
        sender: 'bot',
        text: "Thanks for reaching out! One of our team members will get back to you shortly.",
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botReply]);
    }, 1000);
  };

  const handleOptionClick = (optionText) => {
    const newUserMsg = {
      id: Date.now(),
      sender: 'user',
      text: optionText,
      timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
    };
    setMessages([...messages, newUserMsg]);

    setTimeout(() => {
      const botReply = {
        id: Date.now() + 1,
        sender: 'bot',
        text: `Here is some information about: "${optionText}". Is there anything else you need?`,
        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
      };
      setMessages(prev => [...prev, botReply]);
    }, 1000);
  };

  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages, isOpen]);

  return (
    <div className="chatbot-wrapper">
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="chatbot-window"
            initial={{ opacity: 0, y: 20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            {/* Header */}
            <div className="chatbot-header">
              <div className="chatbot-header-left">
                <img src={logo} alt="Bot Avatar" className="chatbot-avatar" />
                <span className="chatbot-title">Need Help?</span>
              </div>
              <div className="chatbot-header-right">
                <button className="chatbot-icon-btn"><MoreVertical size={20} /></button>
                <button className="chatbot-icon-btn" onClick={toggleChat}><X size={20} /></button>
              </div>
            </div>

            {/* Messages Area */}
            <div className="chatbot-messages">
              {messages.map((msg) => (
                <div key={msg.id} className={`chat-message-row ${msg.sender === 'user' ? 'user-row' : 'bot-row'}`}>
                  {msg.sender === 'bot' && (
                    <div className="bot-indicator">
                      <div className="bot-eyes">
                        <span></span><span></span>
                      </div>
                    </div>
                  )}
                  <div className={`chat-bubble ${msg.sender}`}>
                    <span className="msg-timestamp">{msg.timestamp}</span>
                    <p>{msg.text}</p>
                  </div>
                </div>
              ))}
              
              {/* Predefined Options (Only show after the first bot message if user hasn't typed) */}
              {messages.length === 1 && (
                <div className="chatbot-options">
                  {predefinedOptions.map((option, idx) => (
                    <button 
                      key={idx} 
                      className="chatbot-option-pill"
                      onClick={() => handleOptionClick(option)}
                    >
                      {option}
                    </button>
                  ))}
                </div>
              )}
              <div ref={messagesEndRef} />
            </div>

            {/* Input Area */}
            <div className="chatbot-input-area">
              <button className="attachment-btn">
                <Paperclip size={20} />
              </button>
              <form className="chatbot-form" onSubmit={handleSendMessage}>
                <input 
                  type="text" 
                  placeholder="Type a message" 
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                />
                <button type="submit" className="send-btn" disabled={!inputValue.trim()}>
                  <Send size={18} />
                </button>
              </form>
            </div>
            
            <div className="chatbot-footer">
              <span>⚡ Built with Wanderlust</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Toggle Button */}
      <AnimatePresence>
        {!isOpen && (
          <motion.button 
            className="chatbot-toggle-btn"
            onClick={toggleChat}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <MessageSquare size={28} />
          </motion.button>
        )}
      </AnimatePresence>
      
      {/* Down arrow toggle when open (mimicking Zendesk style) */}
      {isOpen && (
        <motion.button 
          className="chatbot-toggle-btn close-mode"
          onClick={toggleChat}
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.9 }}
        >
          <ChevronDown size={28} />
        </motion.button>
      )}
    </div>
  );
};

export default Chatbot;
