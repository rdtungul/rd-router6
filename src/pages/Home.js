import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <section className="section">
      <h2>Home Page</h2>
      <div>
        <Link to="/about" className="btn">
          About
        </Link>
        <Link to="/products" className="btn">
          Product
        </Link>
      </div>
    </section>
  )
}
export default Home
