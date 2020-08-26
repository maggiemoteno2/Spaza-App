const initialState = {
  items: [{
    name: "CupC", price: "200",
    image: 'https://cdn.pixabay.com/photo/2013/04/15/14/08/cupcake-104654_960_720.jpg'
  },
    { name: "cappuccino", price: "300", image: "https://cdn.pixabay.com/photo/2015/05/07/13/46/cappuccino-756490_960_720.jpg"},
    { name: "hamburger", price: "300", image: "https://cdn.pixabay.com/photo/2015/10/17/22/14/hamburger-993526_960_720.jpg" },
    { name: "pancake", price: "300", image: "https://cdn.pixabay.com/photo/2018/07/10/21/23/pancake-3529653_960_720.jpg" },
    { name: "eggs", price: "300", image: " https://cdn.pixabay.com/photo/2017/09/28/18/03/food-2796348_960_720.jpg" },
    { name: "headphones", price: "300", image: " https://cdn.pixabay.com/photo/2017/08/06/12/54/headphones-2592263_960_720.jpg" },
    { name: "pink headphones", price: "300", image: " https://cdn.pixabay.com/photo/2020/04/19/16/33/headphones-5064411_960_720.jpg"},
    { name: "earphones", price: "300", image: " https://cdn.pixabay.com/photo/2014/04/05/11/41/earphone-316753_960_720.jpg" },
    { name: "pods", price: "300", image: " https://cdn.pixabay.com/photo/2020/05/14/09/54/earphones-5193970_960_720.jpg"},
    { name: "iphone pods", price: "300", image: " https://cdn.pixabay.com/photo/2017/10/15/16/17/airpods-2854300_960_720.jpg" },
    { name: "watch", price: "300", image: "https://cdn.pixabay.com/photo/2016/11/29/13/39/analog-watch-1869928_960_720.jpg" },
    { name: "female watch", price: "300", image: "https://cdn.pixabay.com/photo/2013/06/21/21/13/watch-140487_960_720.jpg"},
    {
      name: "female watch", price: "300", image: "https://cdn.pixabay.com/photo/2013/07/11/15/30/male-watch-144648_960_720.jpg" },
    { name: "unisex watch", price: "300", image: " https://cdn.pixabay.com/photo/2016/10/03/10/51/the-electronic-watch-1711282_960_720.jpg"  },
    { name: "waterproof watch", price: "300", image: " https://cdn.pixabay.com/photo/2020/02/14/18/33/casio-4849118_960_720.jpg"},
  ],
  isVerified: !true,
  carts: [],
  amount: 0
}

function shoppingReducer (state = initialState, action) {
  switch (action.type) {
    case "ADD_ITEMS": {

      return {
        ...state,
        items: [...state.items, action.payload]
      }
    }
    case "ADD_TO_CART":
      {
        return {
          ...state,
          carts: [...state.carts, action.payload]
        }
      }
    case "CALCULATE_TOTAL":
      {
        var cartAmountTotal = state.carts.reduce((acc, val) => acc + parseInt(val.price), 0)
        return {
          ...state,
          amount: cartAmountTotal
        }
      }
    case "CHANGE_AUTHORIZATION":
      return { ...state, isVerified: action.payload }
    default: {
      return state
    }
  }

}

export default shoppingReducer;