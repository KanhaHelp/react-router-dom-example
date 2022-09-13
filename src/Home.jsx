import React from 'react';
import logo from './logo.svg';
import { Link } from "react-router-dom";
import './App.css';
import './Nav.css';

function Home() {
    return (
        <div className="App">
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    <li style={{float:"right"}}><Link className="active" to="signup">Signup</Link></li>
                    <li style={{float:"right"}}><Link to="login">Login</Link></li>
                </ul>
            </nav>
            <header className="App-header">

                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
                <a
                    className="App-link"
                    href="https://reactjs.org"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Learn React
                </a>
            </header>
        </div>
    )
}

export default Home