import { StrictMode, useState } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import List from './List.jsx'
import Classwork from './Classwork.jsx'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';

function Menu() {
  const [isOpen, setIsOpen] = useState(false);
  
  function openNav() {
    setIsOpen(true);
  }
  
  function closeNav() {
    setIsOpen(false);
  }

  return (
    <>
      <div id='mySidebar' className={`sidebar ${isOpen ? 'openSidebar' : 'closedSidebar'}`}>
        <a 
          href='javascript:void(0)' 
          className='closebtn'
          onClick={() => closeNav()}>x</a>
        <Link to='/'>Home</Link>
        <Link to='/list'>TodoList</Link>
        <Link to='/classwork'>Random</Link>
      </div>
      <div id='main' className={`${isOpen ? 'openMain' : 'closedMain'}`}>
        <button className="openbtn" onClick={() => openNav()}>☰ Open Sidebar</button>
      </div>
    </>
  )
}

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Menu />
      <Routes>
        <Route path='/' exact element={<App />} />
        <Route path='/list' element={<List />} />
        <Route path='/classwork' element={<Classwork />} />
      </Routes>
    </Router>
  </StrictMode>,
)
