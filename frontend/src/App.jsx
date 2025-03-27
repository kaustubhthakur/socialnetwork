import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/homepage/HomePage";
import RegisterPage from "./pages/registerpage/RegisterPage";
import LoginPage from "./pages/loginpage/LoginPage";
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path='/registerpage' element={<RegisterPage/>} />
      <Route path='/loginpage' element={<LoginPage/>} />
    </Routes>
  );
};

export default App;
