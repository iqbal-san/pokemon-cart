import { Routes, Route, Link } from 'react-router-dom'
import Home from './pages/Home'
import { Cart } from './cart'
import Header from './layout/Header'

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
      </Routes>
    </>
  )
}

export default App