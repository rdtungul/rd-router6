import { Link, useParams } from 'react-router-dom'

const SingleProduct = () => {
  // const param = useParams()
  // console.log([param]) // it will show the inputted id in the URL

  const { productID } = useParams()
  return (
    <section className="section product">
      <h4>{productID}</h4>
      <Link to="/products">back to products</Link>
    </section>
  )
}

export default SingleProduct
