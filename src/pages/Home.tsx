import { useEffect } from 'react'
import { PokemonList, pokemonStore } from '../pokemon'

export default function Home() {
  useEffect(() => {
    pokemonStore.load()
  }, [])

  return (
    <div>
      <h1>Pokémon Card List</h1>
      <button onClick={() => pokemonStore.reset()}>Reset Store</button>
      <PokemonList />
    </div>
  )
}