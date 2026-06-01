import React from 'react'
import './index.css'
import Home from './Pages/Home/Home'
import login from './Pages/Login/Login'
import { Routes , Route } from 'react-router-dom'

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<login />}/>
      </Routes>
     
    </div>
  )
}

export default App
