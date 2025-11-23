import { observer } from 'mobx-react-lite'
import { cartStore } from './cart'

const Cart = observer(() => {
  const handleRemove = (name: string) => {
    cartStore.removeItem(name)
  }

  const handleIncrement = (name: string) => {
    cartStore.incrementItem(name)
  }

  const handleDecrement = (name: string) => {
    cartStore.decrementItem(name)
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
              <button onClick={() => handleIncrement(item.name)}>+</button>
              <button onClick={() => handleDecrement(item.name)}>-</button>
              <button onClick={() => handleRemove(item.name)}>Remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
})

export default Cart