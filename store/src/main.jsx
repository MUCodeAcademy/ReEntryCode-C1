import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './CSS/index.css'
import App from './Pages/App.jsx'
import Menu from './Pages/Menu.jsx'
import Header from './Pages/Header.jsx'
import { UserProvider } from './Context/UserContext.jsx'
import Home from './Pages/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <UserProvider>
      <Header />
      <Home />
      <App />
    </UserProvider>
  </StrictMode>
);