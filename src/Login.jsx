import { React, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

function Login() {

  const navigate = useNavigate();

  const login = () => {
    localStorage.setItem('login', true);
    navigate('/');
  }

  useEffect(() => {
    let isLogin = localStorage.getItem('login');
    if (isLogin) {
      navigate('/');
    }
  });
  return (
    <>
      <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
        <h1> Please Login </h1><br />
        <div style={{ display: 'block' }}>
          <input type="text" name="" id="" /> <br />
          <input type="text" name="" id="" /> <br />
          <button onClick={login}>Login</button>
        </div>
      </div>

    </>
  )
}

export default Login