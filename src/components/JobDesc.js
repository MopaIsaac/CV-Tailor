import React from 'react'
import { useState } from 'react';


function JobDesc({ onJobDesc }) {
  return (
    <textarea
      placeholder="Paste job description here..."
      onChange={e => onJobDesc(e.target.value)}
    />
  );
}

// const JobDesc = ({ onJobDesc }) => {
//   return (
//     <div>
//         <h1>Job Description</h1>

//         <textarea
//       placeholder="Paste job description here..."
//       onChange={e => onJobDesc(e.target.value)}
//     />    
//     </div>
//   )
// }

export default JobDesc