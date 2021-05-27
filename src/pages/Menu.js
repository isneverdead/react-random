import Products from '../components/Products'
import discountIcon from '../images/small-icon/discount.svg'
import foodIcon from '../images/small-icon/cover-food.svg'
import drinkIcon from '../images/small-icon/drink-cup.svg'
const DaftarMenu = () => {
  return (
    <div>
      <Products title='Promo Hari ini' icon={discountIcon} />
      <Products title='Makanan' icon={foodIcon} />
      <Products title='Hidangan Penutup' icon={foodIcon} />
      <Products title='Minuman' icon={drinkIcon} />
    </div>
  )
}

export default DaftarMenu
