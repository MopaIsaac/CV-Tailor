import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Header from './components/Header.js';
import CvParser from './components/CvParser.js';
import JobDesc from './components/JobDesc.js';
import CvPT from './components/CvPT.js';
import Results from './components/Results';

function App() {

  const [cvText, setCvText] = useState('');
  const [jobDesc, setJobDesc] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState(null);
  const [activeTab, setActiveTab] = useState('feedback');

  console.log('CV:', cvText);
  console.log('JD:', jobDesc);

  async function handleSubmit() {
  if (!cvText) { alert('Please add your CV'); return; }
  if (!jobDesc) { alert('Please add a job description'); return; }

  setLoading(true);
  try {
    const response = await fetch('http://localhost:8000/analyse', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        cv_text: cvText,
        job_description: jobDesc
      })
    });
    const data = await response.json();
    setResults(data);
  } catch (err) {
    alert('Something went wrong — is the backend running?');
  } finally {
    setLoading(false);
  }
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

    {loading && (
      <div className="loading">
        <p>Analysing your CV...</p>
      </div>
    )}

    <Results results={results} />

  </div>
  );
}

export default App;
