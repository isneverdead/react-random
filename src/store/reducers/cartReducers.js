const initialState = [
  {
    id: 1,
    productId: 2,
    description: 'lorem ipsum',
    quantity: 1,
  },
  {
    id: 3,
    productId: 4,
    description: 'lorem ipsum',
    quantity: 10,
  },
]
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

    // return state.filter(item => item.id != parseInt(action.payload.id))
    default:
      return state
  }
}

export default cartReducers
