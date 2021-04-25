import Products from '../components/Products'
import Slider from '../components/Slider'
import discountIcon from '../images/small-icon/discount.svg'
import starIcon from '../images/small-icon/star.svg'

const Home = () => {
  return (
    <div>
      <Slider />
      <Products sale={true} title='Promo Hari ini' icon={discountIcon} />
      <Products title='Paling populer' icon={starIcon} />
    </div>
  )
}

export default Home
