import React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from 'axios';
import store from './../config/store'




export const PrivateRoute = ({
  component: Component,
  ...rest
}) => {
  return (
    <Route {...rest}
      component={
        props => store.getState().isVerified ? (
          <Component {...rest} {...props} />
        ) : (
            <Redirect to="/signUp" />
          )
      } />
  );
}


export const PublicRoute = ({
  component: Component,
  ...rest
}) => {

  return (
    <Route {...rest}
      component={
        props => !store.getState().isVerified ? (
          <Component {...rest} {...props} />
        ) : (
            <Redirect to="/profile" />
          )
      } />
  );
}
