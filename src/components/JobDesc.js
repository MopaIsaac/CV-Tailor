import React from 'react'

function JobDesc({ onJobDesc }) {
  return (
    <textarea
      placeholder="Paste job description here..."
      onChange={e => onJobDesc(e.target.value)}
    />
  );
}

export default JobDesc