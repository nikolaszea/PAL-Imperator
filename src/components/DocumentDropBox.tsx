import React from 'react';

interface DocumentDropBoxProps {
  mode: 'Music' | 'Literature' | 'Other';
  onFileUpload: (file: File) => void;
}

export const DocumentDropBox: React.FC<DocumentDropBoxProps> = ({ mode, onFileUpload }) => {
  // const [file, setFile] = useState<File | null>(null); // Commented out to avoid unused variable warning

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      // setFile(e.target.files[0]); // Commented out to avoid unused variable warning
      onFileUpload(e.target.files[0]);
    }
  };

  return (
    <div>
      {mode === 'Music' && (
        <input type="file" accept="audio/*" onChange={handleFileChange} />
      )}
    </div>
  );
};
