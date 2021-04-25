import cartIcon from '../images/small-icon/shopping-cart.svg'
import cartIconDown from '../images/small-icon/shopping-cart-down.svg'
import CartItem from '../components/CartItem'
import { useSelector, useDispatch } from 'react-redux'
import { useState } from 'react'
import { editOrder } from '../store/actions'
import { useHistory } from 'react-router-dom'
const Cart = () => {
  // mengambil list product dari state management
  const dataProducts = useSelector(state => state.products)
  // mengambil list cart dari state management
  const cartList = useSelector(state => state.cart)
  // membuat state nama
  const [name, setName] = useState('')
  // membuat state nomor meja
  const [tableNumber, setTableNumber] = useState('')
  // memasukkan kedalam variable agar lebih singkat
  const dispatch = useDispatch()
  const history = useHistory()
  // berfungsi untuk mengambil product berdasarkan id product
  const food = id => {
    return dataProducts.filter(item => item.id === parseInt(id))[0]
  }
  // menghitung total harga di keranjang
  const totalPrice = (() => {
    let total = 0
    cartList.map(
      cart => (total = total + food(cart.productId).price * cart.quantity)
    )
    return total
  })()
  // berfungsi untuk mengedit state order dan jika berhasil akan mengarahkan ke halaman checkout
  const handleOrder = () => {
    let cartIds = []
    cartList.map(item => {
      return cartIds.push(item.id)
    })
    dispatch(
      editOrder({
        name,
        tableNumber,
        cartIds,
      })
    )
    history.push('/checkout')
  }
  return (
    <div className='promo-hari-ini mt-5'>
      <div className='container'>
        <div className='row'>
          <div className='col text-left'>
            <h5 className='font-weight-bold'>
              Keranjang
              <img src={cartIcon} alt='' />
            </h5>
          </div>
        </div>
        <div className='row mt-3'>
          <div className='col'>
            <table className='table table-hover'>
              <thead>
                <tr>
                  <th>No</th>
                  <th>Foto</th>
                  <th>Nama Menu</th>
                  <th>Keterangan</th>
                  <th>Jumlah</th>
                  <th>Harga</th>
                  <th>Total Harga</th>
                  <th>Hapus</th>
                </tr>
              </thead>
              <tbody>
                <CartItem />
                {cartList.length === 0 ? (
                  <tr>
                    <td colspan='8' className='text-center'>
                      Belum ada item
                    </td>
                  </tr>
                ) : (
                  <tr>
                    <td colspan='5'></td>
                    <td colspan='3' className='font-weight-bold'>
                      Total Harga : Rp.{totalPrice}
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
        <div className='row'>
          <div className='col-8'></div>
          <div className='col-4'>
            <div className='text-left'>
              <div className='form-group'>
                <label>Nama:</label>
                <input
                  onChange={e => setName(e.target.value)}
                  type='text'
                  className='form-control'
                />
              </div>
              <div className='form-group'>
                <label>Nomor Meja:</label>
                <input
                  onChange={e => setTableNumber(e.target.value)}
                  className='form-control'></input>
              </div>
              <button
                onClick={() => handleOrder()}
                className='btn btn-success'
                disabled={
                  cartList.length === 0 ||
                  name.length === 0 ||
                  tableNumber.length === 0
                }>
                <img src={cartIconDown} alt='' /> {'  '}
                Pesan
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Cart
