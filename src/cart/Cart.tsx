import { observer } from 'mobx-react-lite'
import { cartStore } from './cartStore'
import CartItem from './CartItem'

const Cart = observer(() => (
  <div>
    <h1>Your Cart</h1>
    {cartStore.items.length === 0 ? (
      <p>No items in cart.</p>
    ) : (
      cartStore.items.map((item, i) => (
        <CartItem key={i} {...item} />
      ))
    )}
  </div>
))

export default Cart