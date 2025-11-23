// src/pokemon/PokemonCard.tsx
import { cartStore } from '../cart'

function PokemonCard({ data }) {
  const handleAdd = () => {
    cartStore.addItem({ ...data, quantity: 1 })
  }

  return (
    <div>
      <img src={data.imageUrl} alt={data.name} />
      <h3>{data.name}</h3>
      <button onClick={handleAdd}>Add to Cart</button>
    </div>
  )
}