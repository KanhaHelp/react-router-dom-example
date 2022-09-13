import { Routes, Route } from "react-router-dom";
import React from 'react';
import Home from "./Home";
import Signup from "./Signup";
import About from './About';
import Contact from './Contact';
import Login from './Login';
import './Nav.css';
import ProtectedRoutes from "./ProtectedRoutes";
import Logout from "./Logout";
import Navbar from "./Navbar";
function App() {

  const [login, setLogin] = React.useState(localStorage.getItem('login'));

  const checkLogin =()=>{
    let login = localStorage.getItem('login');
    setLogin(login);
  }

  return (
    <>
      <div className="App">
        <Navbar isLogin={login}/>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login checkLogin={checkLogin}/>} />
          <Route path="/about" element={<About />} />

          <Route  element={<ProtectedRoutes />} >
            <Route path="/contact" element={<Contact/>} />
            <Route path="/logout" element={<Logout checkLogout={checkLogin}/>} />
          </Route>

        </Routes>
      </div>
    </>
  );
}

export default App;