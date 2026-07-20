import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import LandingPage from './Pages/LandingPage'
import HomePage from './Pages/HomePage'
import Details from './Pages/Details'
import AddEvent from './Pages/AddEvent'
import AboutPage from './Pages/AboutPage'
import ContactPage from './Pages/ContactPage'

const App = () => {
  const [theme, setTheme] = useState('black')
  return (
    <div>
      <Routes>
        <Route path='/' element={<LandingPage />} />
        <Route path='/home' element={<HomePage theme={theme} setTheme={setTheme} />} />
        <Route path='/details/:eventId' element={<Details />} />
        <Route path='/addEvents' element={<AddEvent />} />
        <Route path='/about' element={<AboutPage />} />
        <Route path='/contact' element={<ContactPage />} />
      </Routes>
    </div>
  )
}

export default App
