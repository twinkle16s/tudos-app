
import './App.css';
import Navbar from './Components/navbar/Navbar';
import { BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from './Components/home/Home';

function App() {
  return (
    <>
    <Router>
        <Navbar />
        <Routes>
        <Route path="/" element={<Home />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
