import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import Home from './Pages/Home.jsx'
import App from './Pages/App.jsx'
import Menu from './Pages/Menu.jsx'
import Cart from './Pages/Cart.jsx'
import Header from './Pages/Header.jsx'
import Footer from './Pages/Footer.jsx'
import { UserProvider } from './Context/UserContext.jsx'
import { CartProvider } from './Context/CartContext.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './Pages/Products.jsx'
import Confirmation from './Pages/Confirmation.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <CartProvider>
        <Router>
          <Header />
            <Routes>
              <Route path='/' exact element={<><Home /><App /></>} />
              <Route path='/products' element={<Products />} />
              <Route path='/cart' element={<Cart />} />
              <Route path='/confirmation' element={<Confirmation />} />
            </Routes>
          <Footer />
        </Router>
      </CartProvider>
    </UserProvider>
  </StrictMode>
);