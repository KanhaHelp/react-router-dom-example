import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import Signup from "./Signup";
import About from './About';
import Contact from './Contact';
import Login from './Login';

function App() {
  return (
      <Routes>
        <Route path="/" element={ <Home/> } />
        <Route path="/signup" element={ <Signup/> } />
        <Route path="/login" element={ <Login/> } />
        <Route path="/about" element={ <About/> } />
        <Route path="/contact" element={ <Contact/> } />
      </Routes>
  );
}

export default App;