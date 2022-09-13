import React from 'react'
import { Link } from "react-router-dom";

function Navbar(props) {
    return (
        <>
            <nav>
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About</Link></li>
                    <li><Link to="/contact">Contact</Link></li>
                    {props.isLogin ? (
                        <>
                        <li style={{ float: "right" }}><Link to="logout">Logout</Link></li>
                        </>

                    ) : (
                        <>
                        <li style={{ float: "right" }}><Link className="active" to="signup">Signup</Link></li>
                        <li style={{ float: "right" }}><Link to="login">Login</Link></li>
                        </>
                    )}
                </ul>
            </nav>
        </>
    )
}

export default Navbar