import { Link } from 'react-router-dom'
import React from 'react'
import shopingCartIcon from '../images/small-icon/shopping-cart-down.svg'

const Product = ({ product }) => {
  return (
    <div className=' col-md-4 col-sm-4 col-xs-4 my-3'>
      <div className='card border-success'>
        <div className='card-body text-left'>
          <img className='img-fluid' src={product.url} alt='' />
          <h4 className='card-title'>{product.title}</h4>
          <p className='card-text'>Rp.{product.price}</p>
          <Link to={'/detail/' + product.id}>
            <div className='btn btn-success'>
              <img src={shopingCartIcon} alt='' />
              Pesan
            </div>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Product
