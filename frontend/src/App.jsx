import React from 'react'
import { Routes,Route } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import RegisterPage from './pages/registerpage/RegisterPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/registerpage' element={<RegisterPage/>} />
    </Routes>
  )
}

export default App