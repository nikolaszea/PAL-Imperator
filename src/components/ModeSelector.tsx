import React from 'react';

interface ModeSelectorProps {
  mode: string;
  setMode: (mode: string) => void;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({ mode, setMode }) => {
  const modes = ['Music', 'Literature', 'Other'];

  return (
    <div>
      <h2>Select Mode</h2>
      {modes.map(m => (
        <button key={m} onClick={() => setMode(m)} className={mode === m ? 'selected' : ''}>
          {m}
        </button>
      ))}
    </div>
  );
};
