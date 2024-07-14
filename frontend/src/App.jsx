import { useEffect, useState } from 'react'
import HomePage from './homepage/homepage'
import Sidebar from './sidebar/sidebar'
import { Routes,Route, useLocation } from 'react-router-dom'
import Login from './loginpage/login'
import NavBar from './homepage/NavBar'
import Courses from './Tds_Courses_page/CoursesPage'
import useAuthContext from './context/AuthContext'

function App() {
    const location = useLocation()
    const {user} = useAuthContext()

    useEffect(() => {
      if (location.pathname !== '/') {
        const style = document.createElement('style');
        style.innerHTML = '@media (max-width:514px) { .header { display: none; } }';
        document.head.appendChild(style);
          return () => {
          document.head.removeChild(style);
        };
      }
    }, [location.pathname]);

  return (
    <div className='App'>
      {location.pathname!== "/login" && <NavBar/>}
      <Routes>
        <Route path="/" element = {<HomePage/>}/>
        <Route path="/login" element = {<Login/>}/>
        <Route path="/:semestre/:subject" element = {<Courses/>}/>
        <Route path="*" element = {<HomePage/>}/>
      </Routes>
    </div>
  )
}

export default App
