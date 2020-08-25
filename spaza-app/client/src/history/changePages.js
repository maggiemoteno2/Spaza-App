import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history.js";
import LogIn from './../container/logIn'
import SignUp from './../container/signUp'

export const displayRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Navbar />
        <PublicRoute
          exact
          path="/signup"
          component={props => <SignUp {...props} />}
        />

        <PrivateRoute
          exact
          path="/profile"
          component={props => <Profile {...props} />}
        />

        <PublicRoute
          exact
          path="/signIn"
          component={props => <LogIn {...props} />}
        />


      </div>
    </Router>
  )
}