import React from 'react';
import axios from 'axios';

interface DocumentDropBoxProps {
  mode: string;
}

export const DocumentDropBox: React.FC<DocumentDropBoxProps> = ({ mode }) => {
  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    const formData = new FormData();
    formData.append('document', files[0]);
    formData.append('mode', mode);

    try {
      const response = await axios.post('http://localhost:3000/api/document', formData);
      console.log('Response:', response.data);
    } catch (error) {
      console.error('Error uploading document:', error);
    }
  };

  return (
    <div onDrop={handleDrop} onDragOver={(e) => e.preventDefault()} className="dropbox">
      <h2>Drop your document here ({mode})</h2>
    </div>
  );
};
