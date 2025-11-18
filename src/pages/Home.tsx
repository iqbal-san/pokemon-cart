import { useEffect } from 'react'
import { PokemonList, pokemonStore } from '../pokemon'

export default function Home() {
  useEffect(() => {
    pokemonStore.loadPokemons()
  }, [])

  return (
    <div>
      <h1>Pokémon Card List</h1>
      <PokemonList />
    </div>
  )
}