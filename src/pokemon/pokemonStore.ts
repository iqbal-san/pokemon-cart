import { makeAutoObservable } from 'mobx'
import type { Pokemon } from '../types/pokemon'

class PokemonStore {
  pokemons: Pokemon[] = []

  constructor() {
    makeAutoObservable(this)
  }

  loadPokemons() {
    this.pokemons = [
      { name: 'Pikachu', imageUrl: 'https://img.pokemondb.net/artwork/pikachu.jpg' },
      { name: 'Charmander', imageUrl: 'https://img.pokemondb.net/artwork/charmander.jpg' },
      { name: 'Bulbasaur', imageUrl: 'https://img.pokemondb.net/artwork/bulbasaur.jpg' },
    ]
  }
}

export const pokemonStore = new PokemonStore()