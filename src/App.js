// import logo from './logo.svg';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import './App.css';
import Navbar from './Components/Navbar';
import Home from "./Components/Home.jsx";
// import Charts from "./Components/Charts.jsx";


function App() {
  return (
    <Router>
    <div>
      <Navbar />
      <Routes>
      <Route path="/" element={<Home/>} />
      {/* <Route path="/" element={<Charts/>} /> */}
      </Routes>
    </div>
  </Router>
  );
}

export default App;
