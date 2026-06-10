import { useState } from 'react';

function Results({ results }) {
  const [activeTab, setActiveTab] = useState('feedback');

  if (!results) return null;

  return (
    <div className="results">
      <div className="tabs">
        <button
          className={activeTab === 'feedback' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('feedback')}
        >
          Feedback
        </button>
        <button
          className={activeTab === 'cv' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('cv')}
        >
          Rewritten CV
        </button>
        <button
          className={activeTab === 'cover' ? 'tab active' : 'tab'}
          onClick={() => setActiveTab('cover')}
        >
          Cover Letter
        </button>
      </div>
      <div className="output-box">
        <pre className="output-text">{results[activeTab]}</pre>
      </div>
    </div>
  );
}

export default Results;