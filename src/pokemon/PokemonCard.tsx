import type { FC } from 'react'
import { cartStore } from '../cart/cartStore'
import { Link } from 'react-router-dom'
import { observer } from "mobx-react-lite"

interface PokemonCardProps {
  name: string
  imageUrl: string
  price: number
}

const PokemonCard: FC<PokemonCardProps> = observer(({ name, imageUrl, price }) => {
  const cartItem = cartStore.items.find(i => i.name === name)

  const handleAddToCart = () => {
    cartStore.addItem({ name, imageUrl, price, quantity: 1 })
  }

  const handleRemoveFromCart = () => {
    cartStore.removeItem(name)
  }

  const handleIncrement = () => {
    cartStore.addItem({ name, imageUrl, price, quantity: 1 })
  }

  const handleDecrement = () => {
    if (cartItem) {
      if (cartItem.quantity > 1) {
        // reduce quantity by 1
        cartItem.quantity -= 1
        cartStore.save()
      } else {
        // remove completely if quantity goes to 0
        cartStore.removeItem(name)
      }
    }
  }

  return (
    <div className="pokemon-card" style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <Link to={`/pokemon/${name}`}>
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
      </Link>
      <p>Price: ${price}</p>
      {cartItem ? (
        <div style={{ color: "green" }}>
          In Cart: {cartItem.quantity}
          <div>
            <button onClick={handleDecrement}>–</button>
            <button onClick={handleIncrement}>+</button>
          </div>
        </div>
      ) : (
        <p style={{ color: "gray" }}>Not in Cart 
        <button onClick={handleAddToCart}>Add Item</button>
        </p>
        
      )}

      {cartItem && <button onClick={handleRemoveFromCart}>Remove All</button>}
    </div>
  )
})

export default PokemonCard