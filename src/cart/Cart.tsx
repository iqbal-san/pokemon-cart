import { observer } from 'mobx-react-lite'
import { cartStore } from './cartStore'
import type { CartItem } from '../types/cart'

const Cart = observer(() => {
  const handleIncrement = (item: CartItem) => {
    // Pass a full CartItem object with quantity = 1
    cartStore.addItem({ ...item, quantity: 1 })
  }

  const handleDecrement = (item: CartItem) => {
    cartStore.decrementItem(item.name)
  }

  const handleRemove = (item: CartItem) => {
    cartStore.removeItem(item.name)
  }

  return (
    <div>
      <h2>Your Cart</h2>
      {cartStore.items.length === 0 ? (
        <p>No items in cart.</p>
      ) : (
        <ul>
          {cartStore.items.map(item => (
            <li key={item.name}>
              <img src={item.imageUrl} alt={item.name} width={50} />
              <span>{item.name}</span>
              <span>Qty: {item.quantity}</span>
              <span>Price: ${item.price}</span>
              <button onClick={() => handleIncrement(item)}>+</button>
              <button onClick={() => handleDecrement(item)}>-</button>
              <button onClick={() => handleRemove(item)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
      <p>Total Items: {cartStore.totalItems}</p>
      <p>Total Price: ${cartStore.totalPrice}</p>
    </div>
  )
})

export default Cart