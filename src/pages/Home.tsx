import { useEffect } from 'react'
import { observer } from 'mobx-react-lite'
import { pokemonStore } from '../store/pokemonStore'
import PokemonCard from '../components/PokemonCard'

const Home = observer(() => {
  useEffect(() => {
    pokemonStore.loadPokemons()
  }, [])

  return (
    <div>
      <h1>Pokémon Card List</h1>
      <div className="card-list">
        {pokemonStore.pokemons.map((p, index) => (
          <PokemonCard key={index} name={p.name} imageUrl={p.imageUrl} />
        ))}
      </div>
    </div>
  )
})

export default Home