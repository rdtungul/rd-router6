import { BrowserRouter, Routes, Route, useRouteError } from 'react-router-dom'

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
import ProtectedRoute from './pages/ProtectedRoute'
import SharedProductLayout from './pages/SharedProductLayout'

function App() {
  // useNavigate functions
  const [user, setUser] = useState(null)
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />

          {/* Shared Product Layout - Refactored code */}
          <Route path="products" element={<SharedProductLayout />}>
            <Route index element={<Products />} />
            <Route path=":productID" element={<SingleProduct />} />
          </Route>
          <Route path="login" element={<Login setUser={setUser} />} />

          {/* Protected Route (for not letting the user to go to dashboard without logging in) - Refactored code */}
          <Route
            path="dashboard"
            element={
              <ProtectedRoute user={user}>
                <Dashboard user={user} />
              </ProtectedRoute>
            }
          />
          <Route path="*" element={<ErrorMessage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
