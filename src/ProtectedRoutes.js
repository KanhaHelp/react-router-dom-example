import { React, useEffect } from 'react'
import { useNavigate , Outlet} from 'react-router-dom';

function ProtectedRoutes() {

    const navigate = useNavigate();
    useEffect(() => {
        let isLogin = localStorage.getItem('login');
        if (!isLogin) {
            navigate('/login');
        }
    });

    return (
        <Outlet />
    )
}

export default ProtectedRoutes