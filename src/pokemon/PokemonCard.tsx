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
  const handleAddToCart = () => {
    cartStore.addItem({ name, imageUrl, price, quantity: 1 })
  }
  const cartItem = cartStore.items.find(i => i.name === name)

  return (
    <div className="pokemon-card" style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
      <Link to={`/pokemon/${name}`}>
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
      </Link>
      <p>Price: ${price}</p>
      {cartItem ? (
        <p style={{ color: "green" }}>In Cart: {cartItem.quantity}</p>
      ) : (
        <p style={{ color: "gray" }}>Not in Cart</p>
      )}

      <button onClick={handleAddToCart}>Add Item</button>
    </div>
  )
})

export default PokemonCard