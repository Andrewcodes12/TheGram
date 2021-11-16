import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import './splash.css'


const SplashPage = () => {
    const [errors, setErrors] = useState([]);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const user = useSelector(state => state.session.user);
    const dispatch = useDispatch();

    const onLogin = async (e) => {
      e.preventDefault();
      const data = await dispatch(login(email, password));
      if (data) {
        setErrors(data);
      }
    };

    const updateEmail = (e) => {
      setEmail(e.target.value);
    };

    const updatePassword = (e) => {
      setPassword(e.target.value);
    };

    if (user) {
      return <Redirect to='/feed' />;
    }

    return (
        <div>
            <div className="splash-page">
            <div className="splashImg"></div>
            <div className="loginContainer">
                <div className="login">
                <form onSubmit={onLogin}>
                <div>
                {errors.map((error, ind) => (
                <div key={ind}>{error}</div>
                ))}
            </div>
            <h1 className="appName">The Gram</h1>
            <div className="emailInput">
                <input
                name='email'
                type='text'
                placeholder='Email'
                value={email}
                onChange={updateEmail}
                />
            </div>
            <div className="passwordInput">
                <input
                name='password'
                type='password'
                placeholder='Password'
                value={password}
                onChange={updatePassword}
                />
        </div>
        <button type='submit' className="loginBtn">Login</button>
        </form>
            </div>
            </div>
            </div>
        </div>
    )
}

export default SplashPage
