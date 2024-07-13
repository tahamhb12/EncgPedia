import { useState } from 'react'
import HomePage from './homepage/homepage'
import Sidebar from './sidebar/sidebar'
import { Routes,Route } from 'react-router-dom'
import Login from './loginpage/login'

function App() {
  

  return (
    <div className='App'>
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/login" element = {<Login/>}/>
      </Routes>
    </div>
  )
}

export default App
