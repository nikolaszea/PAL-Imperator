import React, { useState, useRef, CSSProperties } from 'react';

const styles: { [key: string]: CSSProperties } = {
  chatBox: {
    flexGrow: 1,
    display: 'flex',
    flexDirection: 'column',
    border: '1px solid #ccc',
    padding: '10px',
  },
  toggleButton: {
    alignSelf: 'flex-end',
  },
  chatLog: {
    flexGrow: 1,
    overflowY: 'auto',
    padding: '10px',
    border: '1px solid #ccc',
  },
  message: {
    marginBottom: '10px',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
  },
  input: {
    marginBottom: '10px',
  },
  submitButton: {
    alignSelf: 'flex-end',
  },
  buttonPanel: {
    display: 'flex',
    justifyContent: 'space-between',
  },
  panelButton: {
    flex: 1,
    margin: '0 5px',
  },
};

const ChatBox: React.FC = () => {
  const [isExpanded, setIsExpanded] = useState(true);
  const [messages, setMessages] = useState<string[]>([]);
  const [input, setInput] = useState('');
  const chatLogRef = useRef<HTMLDivElement>(null);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (input.trim()) {
      setMessages([...messages, input]);
      setInput('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSubmit(e as unknown as React.FormEvent);
    }
  };

  const handleClearChat = () => {
    setMessages([]);
  };

  return (
    <div style={styles.chatBox}>
      <button onClick={handleToggle} style={styles.toggleButton}>
        {isExpanded ? 'Collapse' : 'Expand'}
      </button>
      {isExpanded && (
        <div style={styles.chatLog} ref={chatLogRef}>
          {messages.map((msg, index) => (
            <div key={index} style={styles.message}>
              {msg}
            </div>
          ))}
        </div>
      )}
      <form onSubmit={handleSubmit} style={styles.form}>
        <textarea
          value={input}
          onChange={(e) => setInput(e.target.value)}
          onKeyDown={handleKeyDown}
          style={styles.input}
          rows={2}
        />
        <button type="submit" style={styles.submitButton}>Send</button>
      </form>
      <div style={styles.buttonPanel}>
        <button style={styles.panelButton}>Terminate Process</button>
        <button style={styles.panelButton} onClick={handleClearChat}>Clear Chat</button>
        <button style={styles.panelButton}>Extrapolate</button>
        <button style={styles.panelButton}>Export</button>
        <button style={styles.panelButton}>Chat History</button>
      </div>
    </div>
  );
};

export default ChatBox;
