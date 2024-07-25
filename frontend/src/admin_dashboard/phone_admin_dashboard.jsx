import { useState } from "react";
import Phone_dashboard from "./phone_dashboard/phone_dashboard";
import Publish_new_course_page from "./phone_dashboard/publish_new_course";
import Assigned_list from "./phone_dashboard/assigned_list";

const Phone_admin_dashboard = () => {

    const [page,setpage] = useState("main")
    return ( 
        <div className="phone_dashboard_container">
        
        {page=="main" && <Phone_dashboard setpage={setpage}/>}

        {page=="Add_new_course" && <Publish_new_course_page setpage={setpage}/>}

        {page== "Assigned_list" && <Assigned_list setpage={setpage}/>}
        
        </div>
     );
}
 
export default Phone_admin_dashboard;