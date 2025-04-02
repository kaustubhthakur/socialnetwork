import React from 'react'
import { Route, Routes } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import RegisterPage from './pages/registerpage/RegisterPage'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/register' element={<RegisterPage/>} />
    </Routes>
  )
}

export default App