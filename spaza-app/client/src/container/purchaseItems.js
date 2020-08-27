import React, { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { addToCart } from '../redux/actions/shopping'


export default function PurchaseItems () {
  const shoppingItems = useSelector(state => state.shopping.items)
  const dispatch = useDispatch()
  return (
    <div>
      <div className="items">
        {shoppingItems.map(shoppingItem => <div>
          <img src={`${shoppingItem.image}`}  />
          <p>name : {shoppingItem.name} </p>
          <p> price :  {shoppingItem.price} </p>
          <button onClick={() => dispatch(addToCart(shoppingItem))}> add to cart </button>
        </div>)}
      </div>


    </div>
  )
}
