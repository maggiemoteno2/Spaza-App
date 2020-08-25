import React, { useState, useEffect } from 'react';
import logIn from './LogIn'
import { Route, Switch, NavLink } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux';
import { register } from './../redux/actions'

const SignUp = () => {
  const [credentials, setCredentials] = useState({ password: '', email: '', name: '' })
  const dispatch = useDispatch()

  const addCredentials = () => {
    console.log(credentials)
    dispatch(register(credentials))
  }

  return (
    <div>
      <div class="signup-form">
        <form>
          <h2>Register</h2>
          <p class="hint-text">Create your account.</p>
          <div class="form-group">
            <div class="row">
              <div class="col"><input type="text" class="form-control" name="name" placeholder="Name" onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })}
                value={credentials.name} required="required" /></div>

            </div>
          </div>
          <div class="form-group">
            <input type="email" class="form-control" name="email" onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })}
              value={credentials.email} placeholder="Email" required="required" />
          </div>
          <div class="form-group">
            <input type="password" class="form-control" onChange={(e) => setCredentials({ ...credentials, [e.target.name]: e.target.value })}
              value={credentials.password} name="password" placeholder="Password" required="required" />
          </div>
          <div class="form-group">
            <label class="form-check-label"><input type="checkbox" required="required" /> I accept the <a href="#">Terms of Use</a> &amp; <a href="#">Privacy Policy</a></label>
          </div>
          <div class="form-group">
            <button type="submit" onClick={() => addCredentials()} class="btn btn-success btn-lg btn-block">Register Now</button>
          </div>
        </form>
        <Router>
          <div class="text-center">Already have an account?  <NavLink to={logIn}>Sign in</NavLink></div>

        </Router>
      </div>

    </div>
  )
}



export default SignUp;