import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import LandingPage from './Pages/LandingPage'
import Aboutus from './Pages/About Us'
import Contact from './Pages/Contact'
import Products from './Pages/Products'
import NotFound from './Pages/NotFound'
import NavBar from './Compoments/NavBar'
import { BrowserRouter } from 'react-router-dom'
import { Routes, Route } from 'react-router-dom'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <NavBar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/about" element={<Aboutus />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<Products />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
)
