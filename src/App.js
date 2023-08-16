import { BrowserRouter, Routes, Route } from 'react-router-dom'

// routing location inside the pages folder
import Home from './pages/Home'
import About from './pages/About'
import Products from './pages/Products'
import ErrorMessage from './pages/Error'

function App() {
  return (
    // link to the browser router

    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="products" element={<Products />} />
        <Route path="*" element={<ErrorMessage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
