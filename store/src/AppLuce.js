import logo from './logo.svg';
import './App.css';
import LoginPage from "./Pages/LoginPage";
import CartPage from "./Pages/CartPage";
import AdminPage from "./Pages/AdminPage";
import ProductsPage from "./Pages/ProductsPage";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

function App() {

  return (
    <div className="App">
      <Router>
        <nav>
          <Link className='nav-link' to="/">Login</Link>
          <Link className='nav-link' to="/products">Products</Link>
          <Link className='nav-link' to="/cart">Cart</Link>
          <Link className='nav-link' to="/admin">Admin</Link>
        </nav>

        <Routes>
          <Route path='/' element={<LoginPage />} />
          <Route path='/products' element={<ProductsPage />} />
          <Route path='/cart' element={<CartPage />} />
          <Route path='/admin' element={<AdminPage />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
