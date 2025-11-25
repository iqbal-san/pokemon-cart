import { makeAutoObservable } from "mobx"
import type { Pokemon } from "../types/pokemon"

const defaultPokemons: Pokemon[] = [
  { name: "Charmander", imageUrl: "charmander.png", price: 100 },
  { name: "Squirtle", imageUrl: "squirtle.png", price: 120 },
  { name: "Bulbasaur", imageUrl: "bulbasaur.png", price: 90 }
]

class PokemonStore {
  pokemons: Pokemon[] = []

  constructor() {
    makeAutoObservable(this)
    this.load()
  }

  setPokemons(pokemons: Pokemon[]) {
    this.pokemons = pokemons
    this.save()
  }

  save() {
    localStorage.setItem("pokemons", JSON.stringify(this.pokemons))
  }

  load() {
    const data = localStorage.getItem("pokemons")
    if (data) {
      this.pokemons = JSON.parse(data)
    } else {
      // Seed with defaults if nothing in localStorage
      this.pokemons = defaultPokemons
      this.save()
    }
  }
}

export const pokemonStore = new PokemonStore()