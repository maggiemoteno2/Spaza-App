
import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';

function CartList () {
  const shoppingCart = useSelector(state => state.shopping.carts)
  const totalAmount = useSelector(state => state.shopping.amount)

  return (
    <div>
      <div>
        <h1> Cart List</h1>
  {shoppingCart.map(cartItem => <div>{cartItem.name} {cartItem.price}</div>)}
  total amount :{totalAmount}
      </div>
    </div>
  )
}

export default CartList;