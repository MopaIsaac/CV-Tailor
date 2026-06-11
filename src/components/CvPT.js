import React from 'react';

const CvPT = ({ onTextExtracted }) => {
  return (
    <div>
      <textarea
        placeholder="Paste your CV here..."
        onChange={e => onTextExtracted(e.target.value)}
      />
    </div>
  );
}

export default CvPT;