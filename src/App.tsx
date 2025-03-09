import React from 'react';
import Header from './components/Header';
import ChatBox from './components/ChatBox';
import { ModeSelector } from './components/ModeSelector';
import { CommandInterface } from './components/CommandInterface';
import { DocumentDropBox } from './components/DocumentDropBox';
import { CSSProperties } from 'react';

const App: React.FC = () => {
  return (
    <div className="App" style={styles.app}>
      <Header />
      <div style={styles.main}>
        <ChatBox />
        <div style={styles.content}>
          <ModeSelector mode="Music" setMode={(mode) => {}} />
          <DocumentDropBox mode="Music" />
          <CommandInterface mode="Music" />
        </div>
      </div>
    </div>
  );
};

const styles: { [key: string]: CSSProperties } = {
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
  },
  main: {
    display: 'flex',
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    padding: '20px',
  },
};

export default App;
