import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import { Cart } from './cart'
import Header from './layout/Header'
import PokemonDetail from './pokemon/PokemonDetail'

function App() {
  return (
    <>
      <nav>
        <Link to="/">Home</Link> | <Link to="/cart">Cart</Link>
      </nav>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/pokemon/:name" element={<PokemonDetail />} />
      </Routes>
    </>
  )
}

export default App