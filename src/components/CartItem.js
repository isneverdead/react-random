import trashIcon from '../images/small-icon/trash.svg'
import { useSelector, useDispatch } from 'react-redux'
import { removeCart } from '../store/actions'

const CartItem = () => {
  const dispatch = useDispatch()
  const dataProducts = useSelector(state => state.products)
  const cartList = useSelector(state => state.cart)

  let number = 1

  const food = id => {
    return dataProducts.filter(item => item.id === parseInt(id))[0]
  }

  const deleteCartItem = id => {
    dispatch(removeCart(id))
    console.log('executed' + id)
  }

  return (
    <>
      {cartList.map(cart => (
        <tr key={cart.id}>
          <td>{number++}</td>
          <td>
            <img width='120' src={food(cart.productId).url} alt='' />
          </td>

          <td>{food(cart.productId).title}</td>
          <td>{cart.description}</td>
          <td>{cart.quantity}</td>
          <td>Rp {food(cart.productId).price}</td>
          <td>Rp {food(cart.productId).price * cart.quantity}</td>
          <td>
            <div onClick={() => deleteCartItem(cart.id)}>
              <img src={trashIcon} alt='' />
            </div>
          </td>
        </tr>
      ))}
    </>
  )
}

export default CartItem
