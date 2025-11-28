import { makeAutoObservable } from "mobx"
import type { Pokemon } from "../types/pokemon"

const defaultPokemons: Pokemon[] = [
  {
    name: "Pikachu",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png",
    price: 10,
    element: "Electric",
    description: "A lively Electric-type Pokémon known for its powerful Thunderbolt attack."
  },
  {
    name: "Charmander",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/4.png",
    price: 12,
    element: "Fire",
    description: "A Fire-type Pokémon with a flame on its tail that burns brighter when it battles."
  },
  {
    name: "Bulbasaur",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png",
    price: 8,
    element: "Grass",
    description: "A Grass-type Pokémon that grows a plant bulb on its back, storing energy for evolution."
  },
  {
    name: "Squirtle",
    imageUrl: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/7.png",
    price: 9,
    element: "Water",
    description: "A Water-type Pokémon that withdraws into its shell and sprays water at opponents."
  }
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
      const f = this.filter.toLowerCase()
      result = result.filter(
        p =>
          p.name.toLowerCase().includes(f) ||
          p.description.toLowerCase().includes(f)
      )
    }

    if (this.elementFilter) {
      result = result.filter(p => p.element === this.elementFilter)
    }

    // Filter by price range
    const min = this.minPrice ?? 0
    const max = this.maxPrice ?? Infinity
    result = result.filter(p => p.price >= min && p.price <= max)

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