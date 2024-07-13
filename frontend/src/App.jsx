import { useState } from 'react'
import HomePage from './homepage/homepage'
import Sidebar from './sidebar/sidebar'
import { Routes,Route, useLocation } from 'react-router-dom'
import Login from './loginpage/login'
import NavBar from './homepage/NavBar'
import Courses from './Tds_Courses_page/CoursesPage'

function App() {
    const location = useLocation()

  return (
    <div className='App'>
      {location.pathname!== "/login" && <NavBar/>}
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/test" element = {<Courses/>}/>
      </Routes>
    </div>
  )
}

export default App
