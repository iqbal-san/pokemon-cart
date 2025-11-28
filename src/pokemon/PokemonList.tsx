import { observer } from 'mobx-react-lite'
import { pokemonStore } from './pokemonStore'
import PokemonCard from './PokemonCard'

const PokemonList = observer(() => (
  <div className="card-list">
    {pokemonStore.filteredPokemons.map((p, i) => (
      <PokemonCard
        key={i}
        name={p.name}
        imageUrl={p.imageUrl}
        price={p.price}
      />
    ))}
  </div>
))

export default PokemonList