import { useEffect } from 'react'
import { PokemonList, pokemonStore } from '../pokemon'
import { cartStore } from '../cart/cartStore'

export function resetAll() {
  pokemonStore.reset()
  cartStore.reset()
}

export default function Home() {
  useEffect(() => {
    pokemonStore.load()
  }, [])

  return (
    <div>
      <h1>Pokémon Card List</h1>
      <button onClick={resetAll}>Reset All</button>

      <PokemonList />
    </div>
  )
}