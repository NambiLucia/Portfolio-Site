import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home'
import Hero from './components/Hero'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

function App() {
  return (
    <div>
       <Router>
      <Routes>
        <Route path="/" element={<Home />} />
         <Route path="/" element={<Hero />} />
         <Route path="/projects" element={<Projects/>} />
         <Route path="/skills" element={<Skills/>} />
         <Route path="/contact" element={<Contact/>} />


      </Routes>
    </Router>
    </div>
  )
}

export default App;
