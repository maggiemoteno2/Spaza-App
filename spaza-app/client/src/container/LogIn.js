
import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Route, Switch, NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import signUp from './signUp'
import history from '../history/history'
import { signIn } from '../redux/actions'


function LogIn () {
  const [loginDetails, setLoginDetails] = useState({});
  const dispatch = useDispatch()


  console.log('loginDetails', loginDetails)
  const submitCredentials = (e) => {
    e.preventDefault();
    dispatch(signIn(loginDetails))
  }

  return (

    <div>
      <div class="login-form">
        <h2 class="text-center">User Login</h2>
        <form>
          <div class="form-group">
            <input type="text" class="form-control input-lg" value={loginDetails.email} name="username" onChange={(e) => setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value })} placeholder="email" required="required" />
          </div>
          <div class="form-group">
            <input type="password" class="form-control input-lg" value={loginDetails.password} name="password" onChange={(e) => setLoginDetails({ ...loginDetails, [e.target.name]: e.target.value })} placeholder="Password" required="required" />
          </div>
          <button type="submit" class="btn btn-primary btn-lg float-right" onClick={(e) => submitCredentials(e)}>Sign in</button>

        </form>
        <div class="hint-text">Don't have an account?
       <Router>
            <NavLink to={`signUp`}>Sign up here</NavLink>
          </Router></div>
      </div>
    </div>
  )
}

export default LogIn;