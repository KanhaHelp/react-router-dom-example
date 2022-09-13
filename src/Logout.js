import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Logout(props) {

    const navigate = useNavigate();

    useEffect(() => {
        let isLogin = localStorage.getItem('login');
        console.log('isLogin' , isLogin);
        if (isLogin) {
            localStorage.removeItem('login');
            props.checkLogout();
            navigate('/');
        }
    });
    return (
        <>

        </>
    )
}

export default Logout