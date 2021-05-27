const initialState = []
let number = 1
const cartReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'add-cart':
      return [
        ...state,
        {
          id: number++,
          productId: action.payload.productId,
          description: action.payload.description,
          quantity: action.payload.quantity,
        },
      ]
    case 'remove-cart':
      return state.filter(item => item.id !== action.payload.id)
    default:
      return state
  }
}

export default cartReducers
