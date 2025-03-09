import React, { useEffect, useState } from 'react';
import { ModeSelector } from './components/ModeSelector';
import { CommandInterface } from './components/CommandInterface';
import { DocumentDropBox } from './components/DocumentDropBox';

type Mode = 'Music' | 'Literature' | 'Other';

const App: React.FC = () => {
  const [mode, setMode] = useState<Mode>('Music');
  const [wsMessage, setWsMessage] = useState<string | null>(null);

  useEffect(() => {
    const socket = new WebSocket('ws://localhost:3001');

    socket.onopen = () => {
      console.log('WebSocket connection established');
      socket.send('Hello, server');
    };

    socket.onmessage = (event) => {
      console.log('Message from server:', event.data);
      setWsMessage(event.data);
    };

    socket.onclose = () => {
      console.log('WebSocket connection closed');
    };

    socket.onerror = (error) => {
      console.error('WebSocket error:', error);
    };

    return () => {
      socket.close();
    };
  }, []);

  return (
    <div className="App">
      <h1>AI Model Interface</h1>
      <ModeSelector mode={mode} setMode={setMode} />
      <DocumentDropBox mode={mode} />
      <CommandInterface mode={mode} />
      {wsMessage && <p>WebSocket Message: {wsMessage}</p>}
    </div>
  );
};

export default App;
