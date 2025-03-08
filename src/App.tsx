import React, { useState } from 'react';
import { ModeSelector } from './components/ModeSelector';
import { CommandInterface } from './components/CommandInterface';
import { DocumentDropBox } from './components/DocumentDropBox';

const App: React.FC = () => {
  const [mode, setMode] = useState<string>('');

  return (
    <div className="App">
      <h1>AI Model Interface</h1>
      <ModeSelector mode={mode} setMode={setMode} />
      <DocumentDropBox mode={mode} />
      <CommandInterface mode={mode} />
    </div>
  );
};

export default App;
