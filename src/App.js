// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Components/Home.jsx"
import Analytics from "./Components/Analytics.jsx";

function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/analytics" element={<Analytics/>}/>
      </Routes>
    </div>
  </Router>
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
  );
}

export default App;
