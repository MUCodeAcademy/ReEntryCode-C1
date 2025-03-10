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
import { ThemeProvider } from './Context/ThemeContext.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Products from './Pages/Products.jsx'
import Confirmation from './Pages/Confirmation.jsx'
import Register from './Pages/Register.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <CartProvider>
        <ThemeProvider>
          <Router>
            <Header />
              <Routes>
                {/* 'exact' attribute does not exist anymore in React Router V6 oops */}
                <Route path='/' element={<><Home /><App /></>} />
                {/* Optionally this can go to something like /products/BlueShirt */}
                <Route path='/products/:item?' element={<Products />} />
                <Route path='/cart' element={<Cart />} />
                <Route path='/confirmation' element={<Confirmation />} />
                <Route path='/register' element={<Register />} />
              </Routes>
            <Footer />
          </Router>
        </ThemeProvider>
      </CartProvider>
    </UserProvider>
  </StrictMode>
);