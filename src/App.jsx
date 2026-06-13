
// import files 
import './index.css'
// import pages 
import Player from './Pages/Player/Player'
import Home from './Pages/Home/Home'
import Login from './Pages/Login/Login'
// import react router dom
import React from 'react'
import { Routes , Route } from 'react-router-dom'


const App = () => {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/login' element={<Login />}/>
        <Route path='/player/:id' element={<Player/>}/>
      </Routes>
     
    </div>
  )
}

export default App
