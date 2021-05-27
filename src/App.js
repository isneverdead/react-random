import Navbar from './components/Navbar'

import './App.css'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Footer from './components/Footer'
import Home from './pages/Home'
import Checkout from './pages/Checkout'
import FoodDetail from './pages/FoodDetail'
import DaftarMenu from './pages/DaftarMenu'
import Cart from './pages/Cart'

function App() {
  return (
    <Router>
      <div className='App'>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/checkout' component={Checkout} />
          <Route path='/detail/:id' component={FoodDetail} />
          <Route path='/daftar-menu' component={DaftarMenu} />
          <Route path='/cart' component={Cart} />
        </Switch>
        <Footer />
      </div>
    </Router>
  )
}

export default App
