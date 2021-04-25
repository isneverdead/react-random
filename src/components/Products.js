import Product from './Product'
import { useSelector } from 'react-redux'

const Products = ({ category = '', sale = '', title, icon }) => {
  let dataProducts = []
  const listProducts = useSelector(state => state.products)
  if (sale !== '') {
    dataProducts = listProducts.filter(item => item.sale === sale)
  } else if (category !== '') {
    dataProducts = listProducts.filter(item => item.category === category)
  } else {
    dataProducts = listProducts
  }

  return (
    <div className='promo-hari-ini mt-5'>
      <div className='container'>
        <div className='row text-left'>
          <div className='col'>
            <h5 className='font-weight-bold'>
              {title}
              <img className='ml-2' src={icon} alt='' />
            </h5>
          </div>
        </div>

        <div className='row mt-3'>
          {dataProducts.map(item => (
            <Product product={item} />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Products
