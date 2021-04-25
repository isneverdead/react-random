import thankyouImage from '../images/thankyou.png'
import { useSelector } from 'react-redux'
const Checkout = () => {
  // mengambil list product dari state management
  const dataProducts = useSelector(state => state.products)
  // mengambil list cart dari state management
  const cartList = useSelector(state => state.cart)
  const detailOrder = useSelector(state => state.order)

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
  let number = 1

  return (
    <div className='promo-hari-ini mt-5'>
      <div className='container'>
        <div className='row text-center'>
          <div className='col'>
            <img className='img-fluid' src={thankyouImage} alt='' />
            <h2 className='font-weight-bold'>Sukses</h2>
            <h5 className='display-5'>Pesanan Anda Sedang Diproses</h5>
            <h6 className='display-5'>Selamat Menunggu</h6>
          </div>
        </div>
        <h3 className='text-left'>Order Details</h3>
        <div className='row'>
          <div className='col'>
            <table class='table'>
              <thead>
                <tr>
                  <th scope='col'>No</th>
                  <th scope='col'>Nama Menu</th>
                  <th scope='col'>Jumlah</th>
                  <th scope='col'>Total</th>
                </tr>
              </thead>
              <tbody>
                {cartList.map(cart => (
                  <tr key={cart.id}>
                    <th scope='row'>{number++}</th>
                    <td>{food(cart.productId).title}</td>

                    <td>{cart.quantity}</td>

                    <td>Rp.{food(cart.productId).price * cart.quantity}</td>
                  </tr>
                ))}
                <tr>
                  <th colSpan='3' scope='row'>
                    {' '}
                    Total Semua
                  </th>
                  <td>Rp.{totalPrice}</td>
                </tr>
              </tbody>
            </table>
            <div className='text-left'>
              <h4>Dipesan oleh : {detailOrder.name}</h4>
              <h4>Nomor meja : {detailOrder.tableNumber}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout
