import React from "react";
import { Router, Route } from "react-router-dom";
import history from "./history";
import LogIn from './../container/LogIn'
import SignUp from './../container/signUp'
import Navbar from './../container/navBar'
import Profile from './../container/profile'
import { PrivateRoute, PublicRoute } from './routes';
import CartList from './../container/CartList'
import PurchaseItems from './../container/purchaseItems';

export const displayRoutes = () => {
  return (
    <Router history={history}>
      <div>
        <Navbar />
        <PublicRoute
          exact
          path="/signUp"
          component={props => <SignUp {...props} />}
        />

        <PrivateRoute
          exact
          path="/profile"
          component={props => <Profile {...props} />}
        />

        <Route
          exact
          path="/carts"
          component={props => <CartList {...props} />}
        />

        <Route
          exact
          path="/"
          component={props => <PurchaseItems {...props} />}
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