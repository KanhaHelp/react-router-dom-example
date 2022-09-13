import { Routes, Route, Link } from "react-router-dom";
import React, { useState , useEffect} from 'react';
import Home from "./Home";
import Signup from "./Signup";
import About from './About';
import Contact from './Contact';
import Login from './Login';
import './Nav.css';
import ProtectedRoutes from "./ProtectedRoutes";
import Logout from "./Logout";
function App() {

  // const [login, setLogin] = React.useState(localStorage.getItem('login'));

  // useEffect(() => {
  //   setLogin(localStorage.getItem('login'));
  // });
  return (
    <>
      <div className="App">
        <nav>
          <ul>
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li style={{ float: "right" }}><Link className="active" to="signup">Signup</Link></li>
            <li style={{ float: "right" }}><Link to="login">Login</Link></li>
            <li style={{ float: "right" }}><Link to="logout">Logout</Link></li>

          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ProtectedRoutes Component={Contact} />} />
          <Route path="/logout" element={<ProtectedRoutes Component={Logout} />} />

        </Routes>
      </div>
    </>
  );
}

export default App;