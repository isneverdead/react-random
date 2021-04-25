import orderReducers from './orderReducers'
import productsReducer from './productsReducers'
import cartReducers from './cartReducers'
import { combineReducers } from 'redux'

const allReducers = combineReducers({
  cart: cartReducers,
  order: orderReducers,
  products: productsReducer,
})

export default allReducers
