import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import CvParser from './components/CvParser.js';
import JobDesc from './components/JobDesc.js';
import CvPT from './components/CvPT.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <div className='main-grid'>
        <div className='card'>
          <CvParser/>
          <CvPT/>
        </div>
        <div className='card'>
          <JobDesc/>
        </div>
      </div>
    </div>
  );
}

export default App;
