import React, { useEffect } from 'react'
import history from './../history/history'
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../redux/verify'
import Purchase from './purchaseItems'



const Navbar = () => {
  const isVerified = useSelector(state => state.isVerified)
  const carts = useSelector(state => state.shopping.carts)
  const dispatch = useDispatch()
  const navigatePage = (routeName) => {
    if (routeName == "logout") {
      dispatch(logout())
      return
    }
    history.push(routeName)
  }

  return (
    <div className="navbar" >
      {!isVerified ? <button onClick={() => navigatePage('/signUp')}> signUp </button> : null}
      {!isVerified ? <button onClick={() => navigatePage('signIn')}> LogIn</button> : null}
      {isVerified ? <button onClick={() => navigatePage('logout')}> logout </button> : null}
      {!isVerified ? <button onClick={() => navigatePage('/carts')}> carts {carts.length} </button> : null}
      
    </div>
  )
}


export default Navbar