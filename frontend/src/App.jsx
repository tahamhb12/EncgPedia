import { useEffect, useState } from 'react'
import HomePage from './homepage/homepage'
import Sidebar from './sidebar/sidebar'
import { Routes,Route, useLocation } from 'react-router-dom'
import Login from './loginpage/login'
import NavBar from './homepage/NavBar'
import Courses from './Tds_Courses_page/CoursesPage'
import useAuthContext from './context/AuthContext'
import Dash_sidebar from './dashboad_sidebar/dash_sidebar'
import Admin_dashboard from './admin_dashboard/Admin_dashboard'
import Phone_dashboard from './admin_dashboard/phone_dashboard/phone_dashboard'
import Phone_admin_dashboard from './admin_dashboard/phone_admin_dashboard'
import Publish_new_course_page from './admin_dashboard/phone_dashboard/publish_new_course'
import Assigned_dashboad from './admin_dashboard/assigned_dashboard/assigned_dashboad'
import Authlayout from './layout/authlayout'
import Guestlayout from './layout/GuestLayout'

function App() {
    const location = useLocation()
    const {user,getuser} = useAuthContext()


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
      {location.pathname!== "/login" &&
      location.pathname!== "/admin" &&
       <NavBar/>}
      <Routes>
        <Route exact path="/" element = {<HomePage/>}/>
        <Route path="/:semestre/:subject" element = {<Courses/>}/>
        <Route element={<Authlayout/>}>
          <Route path="/admin" element = {<><Admin_dashboard/><Phone_admin_dashboard/></>}/>
        </Route>
        <Route element={<Guestlayout/>}>
          <Route path="/login" element = {<Login/>}/> 
        </Route>
      </Routes>
    </div>
  )
}

export default App
