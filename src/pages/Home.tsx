import { observer } from "mobx-react-lite"
import { useEffect } from 'react'
import { PokemonList, pokemonStore } from '../pokemon'
import { cartStore } from '../cart/cartStore'

export function resetAll() {
  pokemonStore.reset()
  cartStore.reset()
}


const Home = observer(() => {

  useEffect(() => {
    pokemonStore.load()
  }, [])

  return (
    <div>
      <h1>Pokémon Card List</h1>
      <button onClick={resetAll}>Reset Site</button>
      <br /><br />

      {/* Search filter */}
      <input
        type="text"
        placeholder="Search Pokémon..."
        value={pokemonStore.filter}
        onChange={e => pokemonStore.setFilter(e.target.value)}
      />

      {/* Attribute filter */}
      <select
        value={pokemonStore.elementFilter}
        onChange={e => pokemonStore.setElementFilter(e.target.value)}
      >
        <option value="">All Elements</option>
        <option value="Fire">Fire</option>
        <option value="Water">Water</option>
        <option value="Grass">Grass</option>
        <option value="Electric">Electric</option>
      </select>

      {/* Price range filter */}
      <input
        type="number"
        placeholder="Min Price"
        value={pokemonStore.minPrice ?? ""}
        onChange={e => pokemonStore.setMinPrice(e.target.value)}
      />
      <input
        type="number"
        placeholder="Max Price"
        value={pokemonStore.maxPrice ?? ""}
        onChange={e => pokemonStore.setMaxPrice(e.target.value)}
      />

      <PokemonList />
    </div>
  );
})

export default Home