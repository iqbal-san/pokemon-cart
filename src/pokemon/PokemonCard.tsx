type Props = {
  name: string
  imageUrl: string
}

export default function PokemonCard({ name, imageUrl }: Props) {
  return (
    <div className="pokemon-card">
      <img src={imageUrl} alt={name} />
      <h3>{name}</h3>
    </div>
  )
}