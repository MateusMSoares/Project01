import React, { useState, useContext } from 'react';
// import { useNavigate } from 'react-router-dom';

import { AuthContext } from '../contexts/auth';
import './login.css';

const Login = () => {
  const { authenticated, login } = useContext(AuthContext); /// usando o contexto

  const [isRegisterMode, setIsRegisterMode] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  

  const handleToggleMode = () => {
    setIsRegisterMode(!isRegisterMode);
  };

  const handleSubmit = (e) => {
    e.preventDefault(); //o evento de clicar em login nao executa a açao padrao de retornar na mesma pagina
    login(email, password);//integraçao com a api de autenticação, 
  };

  return (
    <div className="login-container">
      <div><p>{String(authenticated)}</p></div>
      <h2 className="login-title">{isRegisterMode ? 'Register' : 'Login'}</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="login-button" type="submit">
          {isRegisterMode ? 'Register' : 'Login'}
        </button>
      </form>
      <button className="toggle-mode-button" onClick={handleToggleMode}>
        {isRegisterMode ? 'Switch to Login' : 'Create New Account'}
      </button>
    </div>
    
  );
};

export default Login;


