import React from 'react';

interface ModeSelectorProps {
  mode: 'Music' | 'Literature' | 'Other';
  setMode: React.Dispatch<React.SetStateAction<'Music' | 'Literature' | 'Other'>>;
}

export const ModeSelector: React.FC<ModeSelectorProps> = ({ mode, setMode }) => {
  const modes = ['Music', 'Literature', 'Other'] as const;

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
