import food1 from '../../images/img-menu/food1.png'
import food2 from '../../images/img-menu/food2.png'
import food3 from '../../images/img-menu/food3.png'
import food4 from '../../images/img-menu/food4.png'
import food5 from '../../images/img-menu/food5.png'
import food6 from '../../images/img-menu/food6.png'
import food7 from '../../images/img-menu/food7.png'

const initialState = [
  {
    id: 1,
    title: 'Double Steak',
    url: food1,
    price: 85000,
    category: 'food',
    sale: true,
  },
  {
    id: 2,
    title: 'Otak - Otak',
    url: food2,
    price: 25000,
    category: 'food',
    sale: false,
  },
  {
    id: 3,
    title: 'Chocolate Ice',
    url: food3,
    price: 35000,
    category: 'desert',
    sale: true,
  },
  {
    id: 4,
    title: 'Sirloin Steak',
    url: food4,
    price: 90000,
    category: 'food',
    sale: false,
  },
  {
    id: 5,
    title: 'Nasi Goreng, Ayam, Kentang',
    url: food5,
    price: 35000,
    category: 'food',
    sale: true,
  },
  {
    id: 6,
    title: 'Tripple Chocolate Ice',
    url: food6,
    price: 55000,
    category: 'desert',
    sale: false,
  },
  {
    id: 7,
    title: 'Es Coklat',
    url: food7,
    price: 55000,
    category: 'drink',
    sale: false,
  },
]

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'add-product':
      break
    case 'remove-product':
      break
    default:
      return state
  }
}

export default productsReducer
