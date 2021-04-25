const initialState = {
  name: 'akbar',
  tableNumber: 10,
  cartIds: [1, 3],
}
const orderReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'edit-order':
      return {
        name: action.payload.name,
        tableNumber: action.payload.tableNumber,
        cartIds: action.payload.cartIds,
      }
    default:
      return state
  }
}

export default orderReducers
