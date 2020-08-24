import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import signUp from './signUp'
export default function logIn() {
  return (
    <div>
      <div class="login-form">
        <h2 class="text-center">User Login</h2>
        <form action="/examples/actions/confirmation.php" method="post">
          <div class="form-group">
            <input type="text" class="form-control input-lg" name="username" placeholder="Username" required="required"/>	
          </div>
          <div class="form-group">
            <input type="password" class="form-control input-lg" name="password" placeholder="Password" required="required"/>
        </div>
          <button type="submit" class="btn btn-primary btn-lg float-right">Sign in</button>

        </form>
       <div class="hint-text">Don't have an account? <a href="">Sign up here</a></div>
      </div>
    </div>
  )
}
