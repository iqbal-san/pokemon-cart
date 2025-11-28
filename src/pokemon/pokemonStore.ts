import { makeAutoObservable } from "mobx"
import type { Pokemon } from "../types/pokemon"

const defaultPokemons: Pokemon[] = [
  { name: "Pikachu", imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png", price: 10, element: "Electric" },
  { name: "Charmander", imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png", price: 12, element: "Fire" },
  { name: "Bulbasaur", imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png", price: 8, element: "Grass" },
  { name: "Squirtle", imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png", price: 9, element: "Water" }
]

class PokemonStore {
  pokemons: Pokemon[] = []
  filter: string = ""
  elementFilter: string = ""
  minPrice: number | null = null
  maxPrice: number | null = null

  constructor() {
    makeAutoObservable(this)
    this.load()
  }

  setPokemons(pokemons: Pokemon[]) {
    this.pokemons = pokemons
    this.save()
  }

  setFilter(value: string) {
    this.filter = value.toLowerCase()
  }

  setElementFilter(element: string) {
    this.elementFilter = element
  }

  setMinPrice(value: string) {
    this.minPrice = value ? parseFloat(value) : null
  }

  setMaxPrice(value: string) {
    this.maxPrice = value ? parseFloat(value) : null
  }

  get filteredPokemons() {
    let result = this.pokemons

    if (this.filter) {
      result = result.filter(p => p.name.toLowerCase().includes(this.filter))
    }

    if (this.elementFilter) {
      result = result.filter(p => p.element === this.elementFilter)
    }

    // Filter by price range
    if (this.minPrice !== null) {
      result = result.filter(p => p.price >= this.minPrice)
    }
    if (this.maxPrice !== null) {
      result = result.filter(p => p.price <= this.maxPrice)
    }

    return result
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

  reset() {
    localStorage.removeItem("pokemons")
    this.pokemons = defaultPokemons
    this.save()
  }
}

export const pokemonStore = new PokemonStore()