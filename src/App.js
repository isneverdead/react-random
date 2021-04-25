import './App.css'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import Checkout from './pages/Checkout'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Cart from './pages/Cart'
import FoodDetail from './pages/FoodDetail'
import DaftarMenu from './pages/DaftarMenu'
import Home from './pages/Home'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/daftar-menu' component={DaftarMenu} />
          <Route path='/detail/:id' component={FoodDetail} />
          <Route path='/cart' component={Cart} />
          <Route path='/checkout' component={Checkout} />
        </Switch>

        <Footer />
      </div>
    </Router>
  )
}

export default App
