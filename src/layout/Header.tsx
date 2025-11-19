import { observer } from 'mobx-react-lite'
import { cartStore } from '../cart'
import { Link } from 'react-router-dom'

const Header = observer(() => (
  <header style={{ display: 'flex', justifyContent: 'space-between', padding: '1rem' }}>
    <Link to="/" style={{ textDecoration: 'none' }}>
      <h1>Pokémon Shop</h1>
    </Link>
    <Link to="/cart" style={{ textDecoration: 'none' }}>
      🛒 Cart: {cartStore.items.length} items
    </Link>
  </header>
))

export default Header