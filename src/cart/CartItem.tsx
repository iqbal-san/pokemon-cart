// src/cart/CartItem.tsx
import type { CartItem as Item } from '../types/cart'

export default function CartItem({ name, imageUrl, quantity }: Item) {
  return (
    <div className="cart-item">
      <img src={imageUrl} alt={name} />
      <div>
        <h4>{name}</h4>
        <p>Quantity: {quantity}</p>
      </div>
    </div>
  )
}
