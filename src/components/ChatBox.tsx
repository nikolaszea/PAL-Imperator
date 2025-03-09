import React, { useState } from 'react';
import { CSSProperties } from 'react';

const ChatBox: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessages([...messages, input]);
    setInput('');
  };

  return (
    <div style={styles.chatBox}>
      <button onClick={handleToggle} style={styles.toggleButton}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      {isExpanded && (
        <div style={styles.chatLog}>
          {messages.map((msg, index) => (
            <div key={index} style={styles.message}>
              {msg}
            </div>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit} style={styles.form}>
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          style={styles.input}
        />
        <button type="submit" style={styles.submitButton}>Send</button>
      </form>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  chatBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '300px',
    border: '1px solid #ccc',
  },
  toggleButton: {
    alignSelf: 'flex-start',
  },
  chatLog: {
    flexGrow: 1,
    overflowY: 'auto',
    maxHeight: 'calc(100vh - 150px)',
    borderBottom: '1px solid #ccc',
  },
  message: {
    padding: '5px',
    borderBottom: '1px solid #eee',
  },
  form: {
    display: 'flex',
    borderTop: '1px solid #ccc',
  },
  input: {
    flexGrow: 1,
    padding: '5px',
  },
  submitButton: {
    padding: '5px 10px',
  },
};

export default ChatBox;
