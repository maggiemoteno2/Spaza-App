import React from "react";
import { Router, Route, Redirect } from "react-router-dom";
import jwtDecode from "jwt-decode";
import axios from 'axios';
import store from './../config/store'



export const checkVerifiedState = async () => {
  var token = localStorage.getItem('token');
  if (token) {
    const decodedToken = jwtDecode(token)
    console.log(decodedToken)
    if (decodedToken.lat < decodedToken.expireDate) {
      const { data } = await axios.post(`http://localhost:3003/refreshToken/${store.getState().auth.user.userId}`)
      localStorage.removeItem("token");
      localStorage.setItem("token", data.token)
    }
    store.dispatch({ type: "AUTH_SAVE_USER", payload: decodedToken })
    store.dispatch({
      type: "CHANGE_AUTHORIZATION",
      payload: true
    })

  }
}


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
  checkVerifiedState()
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
