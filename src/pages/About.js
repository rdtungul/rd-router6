import { Link } from 'react-router-dom'

const About = () => {
  return (
    <section className="section">
      <h2>About</h2>
      <div>
        <Link to="/" className="btn">
          Home
        </Link>
        <Link to="/products" className="btn">
          Product
        </Link>
      </div>
    </section>
  )
}
export default About
