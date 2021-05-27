import { combineReducers } from 'redux'
import cartReducers from './cartReducers'
import orderReducers from './orderReducers'
import productsReducer from './productsReducers'
const allReducers = combineReducers({
  products: productsReducer,
  cart: cartReducers,
  order: orderReducers,
})

export default allReducers
