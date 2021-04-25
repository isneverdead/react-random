import Products from '../components/Products'
import discountIcon from '../images/small-icon/discount.svg'
import foodIcon from '../images/small-icon/cover-food.svg'
import drinkIcon from '../images/small-icon/drink-cup.svg'
const DaftarMenu = () => {
  return (
    <div>
      <Products title='Promo Hari ini' sale={true} icon={discountIcon} />
      <Products title='Makanan' category='food' icon={foodIcon} />
      <Products title='Hidangan Penutup' category='desert' icon={foodIcon} />
      <Products title='Minuman' category='drink' icon={drinkIcon} />
    </div>
  )
}

export default DaftarMenu
