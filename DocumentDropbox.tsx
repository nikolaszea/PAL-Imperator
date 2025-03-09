import React from 'react';
import axios from 'axios';

interface DocumentDropBoxProps {
  mode: 'Music' | 'Literature' | 'Other';
}

export const DocumentDropBox: React.FC<DocumentDropBoxProps> = ({ mode }) => {
  const handleDrop = async (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const formData = new FormData();
      for (let i = 0; i < files.length; i++) {
        formData.append('file', files[i]);
      }

      try {
        const response = await axios.post('http://localhost:3001/api/upload', formData, {
          headers: {
            'Content-Type': 'multipart/form-data',
          },
        });
        console.log('Document uploaded successfully', response.data);
        alert('Document uploaded successfully');
      } catch (error) {
        console.error('Error uploading document:', error);
        alert('Error uploading document');
      }
    }
  };

  return (
    <div 
      onDrop={handleDrop} 
      onDragOver={(e) => e.preventDefault()} 
      className="dropbox"
    >
      <h2>Drop your document here ({mode})</h2>
    </div>
  );
};
