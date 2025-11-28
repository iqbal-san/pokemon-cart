import type { FC } from 'react'
import { cartStore } from '../cart/cartStore'
import { Link } from 'react-router-dom'


interface PokemonCardProps {
  name: string
  imageUrl: string
  price: number
}

const PokemonCard: FC<PokemonCardProps> = ({ name, imageUrl, price }) => {
  const handleAddToCart = () => {
    cartStore.addItem({ name, imageUrl, price, quantity: 1 })
  }

  return (
    <div className="pokemon-card">
      <Link to={`/pokemon/${name}`}>
        <img src={imageUrl} alt={name} />
        <h3>{name}</h3>
      </Link>
      <p>Price: ${price}</p>
      <button onClick={handleAddToCart}>Add Item</button>
    </div>
  )
}

export default PokemonCard