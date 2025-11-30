import { useParams } from "react-router-dom"
import { observer } from "mobx-react-lite"
import { pokemonStore } from "./pokemonStore"
import { cartStore } from "../cart/cartStore"

const PokemonDetail = observer(() => {
  const { name } = useParams<{ name: string }>()
  const pokemon = pokemonStore.pokemons.find(p => p.name === name)

  if (!pokemon) return <p>Pokémon not found.</p>

  const handleAddToCart = () => {
    cartStore.addItem({ 
        name: pokemon.name, 
        imageUrl: pokemon.imageUrl, 
        price: pokemon.price, 
        quantity: 1 
    })
    cartStore.save()
  }

  const handleRemoveFromCart = () => {
    cartStore.removeItem(pokemon.name)
    cartStore.save()
  }

  const handleIncrement = () => {
    cartStore.addItem({ 
        name: pokemon.name,
        imageUrl: pokemon.imageUrl,
        price: pokemon.price,
        quantity: 1
    })
    cartStore.save()
  }
const handleDecrement = () => { 
    const cartItem = cartStore.items.find(i => i.name === pokemon.name)
    if (cartItem) {
      if (cartItem.quantity > 1) {
        // reduce quantity by 1
        cartItem.quantity -= 1
        cartStore.save()
      } else {
        // remove completely if quantity goes to 0
        cartStore.removeItem(pokemon.name)
      }
    }
  }

  const cartItem = cartStore.items.find(i => i.name === pokemon.name)

  return (
    <div>
      <h2>{pokemon.name}</h2>
      <img src={pokemon.detailImageUrl} alt={pokemon.name} width={300} />
      <p>Element: {pokemon.element}</p>
      <p>Price: ${pokemon.price}</p>
      <p>{pokemon.description}</p>

        {cartItem ? (
        <div style={{ color: "green" }}>
          In Cart: {cartItem.quantity}
          <div>
            <button onClick={handleIncrement}>+</button>
            <button onClick={handleDecrement}>-</button>
            <button onClick={handleRemoveFromCart}>Remove</button>
          </div>
        </div>
      ) : (
        <button onClick={handleAddToCart}>Add to Cart</button>
      )}
    </div>
  )
})

export default PokemonDetail