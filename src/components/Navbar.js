import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/">homepage</Link>
      <Link to="/about">About</Link>
      <Link to="/products">products</Link>
      <Link to="/login">login</Link>
    </nav>
  )
}

export default Navbar
