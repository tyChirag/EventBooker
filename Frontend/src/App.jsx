import React from 'react'
import AddEvents from './Pages/AddEvents'
import { Route, Routes } from 'react-router-dom'
import HomePage from './Pages/HomePage'
import DetailsPage from './Pages/detailsPage'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<HomePage/>} />
        <Route path='/add-events' element={<AddEvents/>} />
        <Route path='/event/:id' element={<DetailsPage/>} />
        </Routes>
    </div>
  )
}

export default App
