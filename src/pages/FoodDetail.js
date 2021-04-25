import cartIcon from '../images/small-icon/shopping-cart-down.svg'
import bookIcon from '../images/small-icon/order.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useState } from 'react'
import { useHistory } from 'react-router-dom'
import { addCart } from '../store/actions'

const FoodDetail = ({ match }) => {
  // mengambil data semua product dari store
  const dataProducts = useSelector(state => state.products)

  // data sementara untuk nanti dikirim ke dispatch
  const [description, setDescription] = useState('')
  const [quantity, setQuantity] = useState(1)

  // untuk menambahkan jumlah product
  const increment = () => {
    setQuantity(quantity + 1)
  }
  // untuk mengurangi jumlah product
  const decrement = () => {
    setQuantity(quantity - 1)
  }
  // untuk mencari product berdasarkan id dari path url
  const food = (() => {
    return dataProducts.filter(item => item.id === parseInt(match.params.id))[0]
  })()
  // deklarasi useDispatch dan useHistory
  const dispatch = useDispatch()
  const history = useHistory()
  // menambahkan item ke keranjang
  const addToCart = () => {
    dispatch(
      // menggunakan action yang sudah kita buat di action, jadi tinggal panggil saja tanpa memberikan type lagi
      addCart({
        productId: match.params.id,
        description,
        quantity,
      })
    )
    // setelah produk ditambahkan, diarahkan ke halaman keranjang
    history.push('/cart')
  }

  return (
    <div className='promo-hari-ini mt-5'>
      <div className='container'>
        <div className='row text-left'>
          <div className='col'>
            <h5 className='font-weight-bold'>
              Food Order {'  '}
              <img src={bookIcon} alt='' />
            </h5>
          </div>
        </div>
        <div className='row mt-3 text-left'>
          <div className='col'>
            <div className='card border-success'>
              <div className='card-body'>
                <div className='row'>
                  <div className='col'>
                    <img className='img-fluid' src={food.url} alt='' />
                  </div>
                  <div className='col'>
                    <h4 className='card-title'>{food.title}</h4>
                    <p className='card-text'>
                      Rp.{food.price} x {quantity} = Rp.{food.price * quantity}
                    </p>

                    <div>
                      <p>Jumlah Pesanan : </p>
                      <div className='row pl-3 w-50 justify-content-between'>
                        <button
                          onClick={() => decrement()}
                          className='btn btn-secondary'
                          disabled={quantity === 0}>
                          -
                        </button>
                        <input
                          value={quantity}
                          onChange={e =>
                            setQuantity(
                              parseInt(
                                e.target.value !== 0 ? e.target.value : 0
                              )
                            )
                          }
                          className='form-control col mx-2'
                        />
                        <button
                          onClick={() => increment()}
                          className='btn btn-secondary'>
                          +
                        </button>
                      </div>
                      <div className='form-group'>
                        <label>Keterangan:</label>
                        <textarea
                          onChange={e => {
                            setDescription(e.target.value)
                          }}
                          className='form-control'></textarea>
                      </div>
                      <button
                        className='btn btn-success'
                        onClick={() => {
                          addToCart()
                        }}
                        disabled={quantity === 0}>
                        <img src={cartIcon} alt='' />
                        Pesan
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FoodDetail
