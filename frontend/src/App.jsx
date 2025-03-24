import React from 'react'
import { Route,Routes } from 'react-router-dom'
import HomePage from './pages/homepage/HomePage'
import RegisterPage from './pages/registerpage/RegisterPage'
import LoginPage from './pages/loginpage/LoginPage'
import CreatePost from './components/createpost/CreatePost'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<HomePage/>}/>
      <Route path='/registerpage' element={<RegisterPage/>} />
      <Route path='/loginpage' element={<LoginPage/>} />
      <Route path='/createpost' element={<CreatePost/>} />
    </Routes>
  )
}

export default App