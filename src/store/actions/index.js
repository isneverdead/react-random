const addCart = data => {
  return {
    type: 'add-cart',
    payload: data,
  }
}
const removeCart = id => {
  return {
    type: 'remove-cart',
    payload: { id },
  }
}
const editOrder = data => {
  return {
    type: 'edit-order',
    payload: data,
  }
}
export { addCart, removeCart, editOrder }
