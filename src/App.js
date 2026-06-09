import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import CvParser from './components/CvParser.js';
import JobDesc from './components/JobDesc.js';
import CvPT from './components/CvPT.js';

function App() {

  const [cvText, setCvText] = useState('');
  const [jobDesc, setJobDesc] = useState('');

  console.log('CV:', cvText);
  console.log('JD:', jobDesc);

    function handleSubmit() {
    if (!cvText) { alert('Please add your CV'); return; }
    if (!jobDesc) { alert('Please add a job description'); return; }
    console.log('ready to send to backend');
  }

  return (
    <div className="App">
      <Header/>
      <div className='main-grid'>
        <div className='card'>
          <CvParser onTextExtracted={setCvText}/>
          <CvPT onTextExtracted={setCvText}/>
        </div>
        <div className='card'>
          <JobDesc onJobDesc={setJobDesc}/>
        </div>
      </div>
      <div className="submit-row">
        <button className="btn-primary" onClick={handleSubmit}>
          Analyse & generate →
        </button>
      </div>
    </div>
  );
}

export default App;
