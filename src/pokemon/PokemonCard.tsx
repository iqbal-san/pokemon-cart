import type { FC } from 'react'

interface PokemonCardProps {
  name: string
  imageUrl: string
  price: number
}

const PokemonCard: FC<PokemonCardProps> = ({ name, imageUrl, price }) => (
  <div className="pokemon-card">
    <img src={imageUrl} alt={name} />
    <h3>{name}</h3>
    <p>Price: ${price}</p>
  </div>
)

export default PokemonCard  