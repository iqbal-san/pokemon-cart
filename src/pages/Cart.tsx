import { observer } from 'mobx-react-lite'
import { cartStore } from '../store/cartStore'

const Cart = observer(() => {
  return (
    <div>
      <h1>Your Shopping Cart</h1>
      <ul>
        {cartStore.items.map((item, index) => (
          <li key={index}>
            {item} <button onClick={() => cartStore.removeItem(index)}>Remove</button>
          </li>
        ))}
      </ul>
    </div>
  )
})

export default Cart
