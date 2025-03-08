import React from 'react';

interface CommandInterfaceProps {
  mode: string;
}

export const CommandInterface: React.FC<CommandInterfaceProps> = ({ mode }) => {
  const commands = {
    Music: ['Analyze', 'Generate', 'Transform'],
    Literature: ['Summarize', 'Critique', 'Translate'],
    Other: ['Custom Command 1', 'Custom Command 2']
  };

  return (
    <div>
      <h2>Commands</h2>
      {commands[mode]?.map(cmd => (
        <button key={cmd}>
          {cmd}
        </button>
      ))}
    </div>
  );
};
