import { BrowserRouter, Routes, Route } from 'react-router-dom'

// routing location inside the pages folder
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ErrorMessage from './pages/Error'
import SharedLayout from './pages/SharedLayout'
import SingleProduct from './pages/SingleProduct'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productID" element={<SingleProduct />} />
          <Route path="*" element={<ErrorMessage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
