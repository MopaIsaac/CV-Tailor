import logo from './logo.svg';
import './App.css';
import Header from './components/Header.js';
import CvParser from './components/CvParser.js';
import CvPT from './components/CvPT.js';
import JobDesc from './components/JobDesc.js';

function App() {
  return (
    <div className="App">
      <Header/>
      <div>
        <CvParser/>
        <CvPT/>
        <div>
          <JobDesc/>
        </div>
      </div>
    </div>
  );
}

export default App;
