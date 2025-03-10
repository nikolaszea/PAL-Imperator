import React, { useState, CSSProperties } from 'react';
import Header from './components/Header';
import ChatBox from './components/ChatBox';
import { CommandInterface } from './components/CommandInterface';
import { DocumentDropBox } from './components/DocumentDropBox';

const styles: { [key: string]: CSSProperties } = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  sidebar: {
    width: '250px',
    backgroundColor: '#f4f4f4',
    padding: '10px',
  },
  titleBox: {
    padding: '20px',
    textAlign: 'center',
  },
  title: {
    margin: '0',
  },
  speakerName: {
    color: '#888',
    fontSize: '14px',
  },
  mainContent: {
    display: 'flex',
    flexDirection: 'column',
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
};

const App: React.FC = () => {
  const [mode, setMode] = useState<'Music' | 'Literature' | 'Other'>('Music');
  const [theme, setTheme] = useState<'light' | 'dark'>('light');
  const [file, setFile] = useState<File | null>(null);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  const handleFileUpload = (uploadedFile: File) => {
    setFile(uploadedFile);
  };

  return (
    <div className="App" style={styles.app}>
      <div style={styles.sidebar}>
        <div style={styles.titleBox}>
          <h1 style={styles.title}>PAL-Imperator</h1>
          <div style={styles.speakerName}>Augustus</div>
        </div>
        <ChatBox />
      </div>
      <div style={styles.mainContent}>
        <Header mode={mode} setMode={setMode} theme={theme} toggleTheme={toggleTheme} />
        <div style={styles.content}>
          <DocumentDropBox mode={mode} onFileUpload={handleFileUpload} />
          <CommandInterface mode={mode} file={file} />
        </div>
      </div>
    </div>
  );
};

export default App;
