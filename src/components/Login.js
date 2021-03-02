import React, { useState } from 'react';
import './Login.css';
import { Link, useHistory } from 'react-router-dom';
import { auth } from '../utils/firebase';

const loginLogoImg = 'https://via.placeholder.com/150x90.png?text=Logo';

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = e => {
    e.preventDefault();

    auth
      .signInWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/');
      })
      .catch(e => alert(e.message));
  };

  const register = e => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then(auth => {
        history.push('/');
      })
      .catch(e => alert(e.message));
  };

  return (
    <div className='login'>
      <Link to='/'>
        <img className='login__logo' src={loginLogoImg} alt='logo' />
      </Link>

      <div className='login__container'>
        <h1>Sign in</h1>
        <form>
          <h5>E-mail</h5>
          <input
            value={email}
            onChange={e => setEmail(e.target.value)}
            type='email'
          />
          <h5>Password</h5>
          <input
            value={password}
            onChange={e => setPassword(e.target.value)}
            type='password'
          />
          <button type='submit' className='login__signInBtn' onClick={login}>
            Sing In
          </button>
        </form>
        <button className='login__registerBtn' onClick={register}>
          Create your Account
        </button>
      </div>
    </div>
  );
};

export default Login;
