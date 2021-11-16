import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../store/session';
import * as sessionActions from '../../store/session';
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

    const demoLogin = async () => {
      setEmail('demo@aa.io');
      setPassword('password');
      return dispatch(
        sessionActions.login({email: 'demo@aa.io', password: 'password'})
      );
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
        <div className="orContainer">
          <div class="line">    </div>
          <div className="or"> OR </div>
          <div class="line">    </div>
        </div>
        <div className="demoBtnn">
        {!user?
        <button className="demoBtn" onClick={demoLogin}>Demo Login</button>
        : null}
        </div>
        </form>
        <div className="registerContainer">
          <p className="dontAccount">Don't have an account?</p>
          <a className="register" href="/sign-up">Register</a>
          </div>
            </div>

            </div>

            </div>
        </div>
    )
}

export default SplashPage
