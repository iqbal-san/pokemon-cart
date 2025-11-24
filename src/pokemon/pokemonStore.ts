import { makeAutoObservable } from 'mobx'
import type { Pokemon } from '../types/pokemon'

class PokemonStore {
  pokemons: Pokemon[] = []

  constructor() {
    makeAutoObservable(this)
  }

  loadPokemons() {
    this.pokemons = [
      { name: 'Pikachu', imageUrl: 'https://img.pokemondb.net/artwork/pikachu.jpg', price: 10 },
      { name: 'Charmander', imageUrl: 'https://img.pokemondb.net/artwork/charmander.jpg', price: 12 },
      { name: 'Bulbasaur', imageUrl: 'https://img.pokemondb.net/artwork/bulbasaur.jpg', price: 8 },
    ]
  }
}

export const pokemonStore = new PokemonStore()