import React, { useState } from 'react';

interface CommandInterfaceProps {
  mode: 'Music' | 'Literature' | 'Other';
  file: File | null;
}

export const CommandInterface: React.FC<CommandInterfaceProps> = ({ mode, file }) => {
  const [isExtracting, setIsExtracting] = useState(false);

  const handleExtractMidi = async () => {
    if (file) {
      setIsExtracting(true);
      const formData = new FormData();
      formData.append('audio', file);

      try {
        const response = await fetch('/upload', {
          method: 'POST',
          body: formData,
        });

        if (response.ok) {
          const blob = await response.blob();
          const url = URL.createObjectURL(blob);
          const link = document.createElement('a');
          link.href = url;
          link.download = `${file.name.split('.').slice(0, -1).join('.')}-extracted-midi.mid`;
          link.click();
          URL.revokeObjectURL(url);
        } else {
          console.error('Error extracting MIDI:', response.statusText);
        }
      } catch (error) {
        console.error('Error extracting MIDI:', error);
      } finally {
        setIsExtracting(false);
      }
    }
  };

  return (
    <div>
      {mode === 'Music' && (
        <button onClick={handleExtractMidi} disabled={!file || isExtracting}>
          {isExtracting ? 'Extracting...' : 'Extract MIDI'}
        </button>
      )}
    </div>
  );
};
