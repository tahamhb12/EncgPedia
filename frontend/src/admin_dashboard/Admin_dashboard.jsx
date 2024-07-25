import { useState } from "react";
import Dash_sidebar from "../dashboad_sidebar/dash_sidebar";
import Dashboard_interface from "./dashboard_intefrace/dashboard_intefrace";
import "./dashboard_intefrace/dashboard_intefrace.css"
import New_interface from "./New_intefrace/new_intefrace";
import Assigned_dashboad from "./assigned_dashboard/assigned_dashboad";
import logoutt from "../admin_dashboard/Logout.png"
import {AnimatePresence, motion} from "framer-motion"
import useAuthContext from "../context/AuthContext";

const Admin_dashboard = () => {

    const [dashboard_page,setdashboard_page] = useState("Dashboard");
    const [showlogout,setshowlogout] = useState(false)

    const {logout} = useAuthContext()


    return ( 
        <div className="dashboard_alll">

        <div style={{cursor:"pointer"}} onClick={logout} className="hhhh">
            <img src={logoutt} alt="" />
        </div>
            <Dash_sidebar dashboard_page={dashboard_page} setdashboard_page={setdashboard_page}/>

            <div className="dashboards">
                {dashboard_page == "Dashboard" && <Dashboard_interface/>}
                {dashboard_page == "New" && <New_interface/>}
                {dashboard_page == "Assigned" && <Assigned_dashboad/>}
            </div>
        
        </div>
     );
}
 
export default Admin_dashboard;