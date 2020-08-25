const initialState = {
  items: []
}

function rootReducer (state = initialState, action) {
  switch (action.payload) {
    case "ADD_ITEMS": {

      return {
        ...state,
        items: [...state.items, action.payload]

      }

    }
    default: {
      return state
    }
  }

}

export default rootReducer;