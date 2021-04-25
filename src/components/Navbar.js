import { Link } from 'react-router-dom'
import { useSelector } from 'react-redux'
const Navbar = () => {
  const cartList = useSelector(state => state.cart)

  return (
    <nav className='navbar navbar-expand-md bg-light navbar-light px-5'>
      <Link to='/'>
        <div className='navbar-brand font-weight-bold text-success'>
          kuliner.id
        </div>
      </Link>

      <button
        className='navbar-toggler'
        type='button'
        data-toggle='collapse'
        data-target='#collapsibleNavbar'>
        <span className='navbar-toggler-icon'></span>
      </button>

      <div className='collapse navbar-collapse' id='collapsibleNavbar'>
        <ul className='navbar-nav ml-auto'>
          <Link to='/'>
            <li className='nav-item'>
              <div className='nav-link font-weight-bold active'>Home</div>
            </li>
          </Link>
          <Link to='/daftar-menu'>
            <li className='nav-item'>
              <div className='nav-link'>Menu</div>
            </li>
          </Link>
          <Link to='/cart'>
            <li className='nav-item'>
              <div className='nav-link' id='keranjang'>
                Keranjang
                <img src='small-icon/shopping-cart.svg' alt='' />
                <span class='badge badge-pill badge-success'>
                  {cartList.length}
                </span>
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
