import React from 'react';

interface CommandInterfaceProps {
  mode: 'Music' | 'Literature' | 'Other';
}

const commands: { [key in CommandInterfaceProps['mode']]: string[] } = {
  Music: ['Analyze', 'Generate', 'Transform'],
  Literature: ['Summarize', 'Critique', 'Translate'],
  Other: ['Process', 'Evaluate', 'Report'],
};

export const CommandInterface: React.FC<CommandInterfaceProps> = ({ mode }) => {
  return (
    <div>
      <h2>Commands</h2>
      {commands[mode]?.map((cmd: string) => (
        <button key={cmd}>
          {cmd}
        </button>
      ))}
    </div>
  );
};
