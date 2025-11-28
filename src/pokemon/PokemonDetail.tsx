import { useParams } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { pokemonStore } from "./pokemonStore"

const PokemonDetail = observer(() => {
  const { name } = useParams<{ name: string }>()
  const pokemon = pokemonStore.pokemons.find(p => p.name === name)

  if (!pokemon) return <p>Pokémon not found.</p>

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.detailImageUrl} alt={pokemon.name} width={300} />
      <p>Element: {pokemon.element}</p>
      <p>Price: ${pokemon.price}</p>
      <p>{pokemon.description}</p>
    </div>
  )
})

export default PokemonDetail