import { Link, useParams } from 'react-router-dom'
import products from '../data'

const SingleProduct = () => {
  // const param = useParams()
  // console.log([param]) // it will show the inputted id in the URL

  const { productID } = useParams()

  // displaying single products on the page
  const product = products.find((product) => product.id === productID)
  const { image, name } = product

  return (
    <section className="section product">
      <img src={image} alt={name} />
      <h5>{name}</h5>
      <Link to="/products">back to products</Link>
    </section>
  )
}

export default SingleProduct
