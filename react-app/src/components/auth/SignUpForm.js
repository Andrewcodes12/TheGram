import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { NavLink, Redirect } from 'react-router-dom';
import { signUp } from '../../store/session';


import './signupForm.css'


const SignUpForm = () => {
  const [errors, setErrors] = useState([]);
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [repeatPassword, setRepeatPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const data = await dispatch(signUp(username, email, password));
      if (data) {
        setErrors(data)
      } else{
        setErrors(["Password must match Repeat Password"])
      }
    }
    if (password !== repeatPassword) {
      setErrors(["Password must match Repeat Password"])
    }

  };

  const updateUsername = (e) => {
    setUsername(e.target.value);
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  const updateRepeatPassword = (e) => {
    setRepeatPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  //onclick redirect to login page
  const onClick = () => {
    Redirect('/login');
  };



  return (
    <div>
    <div className="splash-page">
    <div className="splashImg"></div>
    <div className="loginContainer">
        <div className="login">
    <form onSubmit={onSignUp}>
      <div className="signupErrors">
        {errors.map((error, ind) => (
          <div key={ind}>{error}</div>
        ))}
      </div>
      <h1 className="appName">The Gram</h1>
      <h6 className="appTagline"> Its like Instagram, but with slightly less letters…</h6>
      <div className="signupInputs">
      <div className="emailInput">
        <input
          type='text'
          name='username'
          onChange={updateUsername}
          value={username}
          placeholder='Username'
        ></input>
      </div>
      <div className="emailInput">

        <input
          type='text'
          name='email'
          onChange={updateEmail}
          value={email}
          placeholder='Email'
        ></input>
      </div>
      <div className="passwordInput">

        <input
          type='password'
          name='password'
          onChange={updatePassword}
          value={password}
          placeholder='Password'
        ></input>
      </div>
      <div className="passwordInputRepeat">

        <input
          type='password'
          name='repeatPassword'
          onChange={updateRepeatPassword}
          value={repeatPassword}
          placeholder='Repeat Password'
          // required={true}
        ></input>
      </div>
      </div>
      <button type='submit' className="loginBtn">Sign Up</button>
      <div className="registerContainer">
      <p className="dontAccount">Already have an account?</p>
      <a className="register" href="/">Log in</a>
      </div>

    </form>
    </div>
    </div>
    </div>
    </div>
  );
};

export default SignUpForm;
