import { cartStore } from '../store/cartStore'

export default function Home() {
  return (
    <div>
      <h1>Welcome to Pokémon Cart</h1>
      <button onClick={() => cartStore.addItem('Pikachu')}>Add Pikachu</button>
    </div>
  )
}