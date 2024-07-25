import { useState } from "react";
import "./homepage.css"
import {AnimatePresence, motion} from "framer-motion";
import Sidebar from "../sidebar/sidebar";
import logo from "./logo.png"

const NavBar = () => {

    const [sidebar,setsidebar] = useState(false)

    const today = new Date();
    const options = { weekday: 'long', day: 'numeric', month: 'long', year: 'numeric' };
    const formattedDate = today.toLocaleDateString('en-GB', options);
    
    console.log(formattedDate); 

    return ( 
            <div className="header">
                <div className="logo">
                    <img src={logo} alt="" />
                </div>
                <div className="date">
                    <p>{formattedDate}</p>
                </div>
                <div onClick={()=>setsidebar(!sidebar)} className="login">
                    <h2><i style={{fontSize:"21px"}} class="fa-solid fa-bars"></i></h2>
                </div>
                <AnimatePresence>
                {sidebar && 
                <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{type:"just"}}
                    className="sidebar">
                    <Sidebar setsidebar={setsidebar}/>
                </motion.div>
                }
                </AnimatePresence>
            </div>
     );
}
 
export default NavBar;