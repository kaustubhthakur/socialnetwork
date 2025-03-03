import React from 'react'
import {Route ,Routes} from "react-router-dom"
import HomePage from './pages/homepage/HomePage'
import RegisterForm from './pages/registerpage/RegisterForm'
import LoginForm from './pages/login/LoginForm'
const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>} />
      <Route path='/register' element={<RegisterForm/>} />
      <Route path='/login' element={<LoginForm/>} />
    </Routes>
  )
}

export default App