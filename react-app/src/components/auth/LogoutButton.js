import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../store/session';
import {useHistory} from 'react-router-dom';


const LogoutButton = () => {
  const dispatch = useDispatch()
  const history = useHistory()

  const onLogout = async (e) => {
    await dispatch(logout());
    history.push('/');
  };

  return <i onClick={onLogout} className="fas fa-sign-out-alt" id="logout" >  </i>

};

export default LogoutButton;
