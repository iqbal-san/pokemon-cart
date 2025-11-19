import { cartStore } from '../cart'

type Props = {
  name: string
  imageUrl: string
}

export default function PokemonCard({ name, imageUrl }: Props) {
  const handleAddToCart = () => {
    cartStore.addItem({ name, imageUrl, quantity: 1 })
  }

  return (
    <div className="pokemon-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
      <button onClick={handleAddToCart}>Add to Cart</button>
    </div>
  )
}