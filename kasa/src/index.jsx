import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './index.css'

import Home from './pages/Home'
import About from './pages/About'
import Logement from './pages/Logement'
import Error from './components/Error'
import Footer from './components/Footer'



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Router>
    <Routes>
    <Route path='/' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/logement/' element={<Logement />} />
    <Route path='*' element={<Error />} />
    </Routes>
    <Footer />  
    </Router>
  </React.StrictMode>
);