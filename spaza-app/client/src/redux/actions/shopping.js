export const addToCart = (purchasedItem) => {
  return async dispatch => {
    dispatch({ type: "ADD_TO_CART", payload: purchasedItem })
    dispatch({ type: 'CALCULATE_TOTAL' })
  }
}

