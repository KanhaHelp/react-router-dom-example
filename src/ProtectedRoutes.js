import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function ProtectedRoutes(props) {

    const { Component } = props;
    const navigate = useNavigate();

    useEffect(() => {
        let isLogin = localStorage.getItem('login');
        if (!isLogin) {
            console.log('you are not a logged in user', isLogin);
            navigate('/login');
        }
    });

    return (
        <Component />
    )
}

export default ProtectedRoutes