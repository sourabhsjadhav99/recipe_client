import './App.css';
import React from 'react'
import DisplayPage from './components/DisplayPage';
import DisplayOne from './components/DisplayOne';
import Form from './components/Form';
import { BrowserRouter, Route, Routes } from "react-router-dom"
import SignIn from "./components/SignIn_SignUp/SignIn"
import SignUp from "./components/SignIn_SignUp/SignUp"
function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/display" element={<DisplayPage />} />
          <Route path="displayone/:title" element={<DisplayOne />} />
          <Route path="/form" element={<Form />} />

        </Routes>
      </BrowserRouter>


    </div>
  )
}

export default App
