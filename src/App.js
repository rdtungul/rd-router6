import { BrowserRouter, Routes, Route } from 'react-router-dom'

// routing location inside the pages folder
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ErrorMessage from './pages/Error'
import SharedLayout from './pages/SharedLayout'
import SingleProduct from './pages/SingleProduct'

// useNavigate destinations and boilerplate
import { useState } from 'react'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'

function App() {
  // useNavigate functions
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="products" element={<Products />} />
          <Route path="products/:productID" element={<SingleProduct />} />
          <Route path="login" element={<Login setUser={setUser} />} />
          <Route path="dashboard" element={<Dashboard user={user} />} />
          <Route path="*" element={<ErrorMessage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
