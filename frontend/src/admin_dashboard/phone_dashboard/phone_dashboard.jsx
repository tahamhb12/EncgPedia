import "./phone_dashboard.css"
import img from "./img.png"
import drive from "./drive_icon.png"
import useAuthContext from "../../context/AuthContext"
const Phone_dashboard = ({setpage}) => {

    const {courses} = useAuthContext()

    console.log(courses)

    return ( 
            <div className="phone_dashboard">
                <svg onClick={()=>setpage("Assigned_list")} width="17" height="21" viewBox="0 0 17 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 7.04922C13.5 5.67088 12.9732 4.34899 12.0355 3.37435C11.0979 2.39972 9.82608 1.85217 8.5 1.85217C7.17392 1.85217 5.90215 2.39972 4.96447 3.37435C4.02678 4.34899 3.5 5.67088 3.5 7.04922C3.5 13.1124 1 14.8448 1 14.8448H16C16 14.8448 13.5 13.1124 13.5 7.04922Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.94193 18.3096C9.79542 18.5721 9.58513 18.79 9.33212 18.9415C9.0791 19.0929 8.79224 19.1727 8.50026 19.1727C8.20828 19.1727 7.92142 19.0929 7.6684 18.9415C7.41539 18.79 7.2051 18.5721 7.05859 18.3096" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
                <div className="phone_dashboard_header">
                    <div className="user_infos">
                        <img src={img} />
                        <div className="infos">
                            <h2>Howdy</h2>
                            <p>Mohamed Hafidi</p>
                        </div>
                    </div>
                    <div className="available_courses">
                        <p>Available courses</p>
                        <h2>{courses.length}</h2>
                    </div>
                </div>
                <div className="recenly_added_courses">
                    <p>Recently added</p>
                    <div className="recent_courses">
                        {courses.slice(courses.length-5,courses.length).reverse().map((course,index)=>(
                            <div className="course_infos">
                            <img src={drive} />
                            <div className="infos">
                                <h2>{course.subject}</h2>
                                <p>{course.semestre} - {course.teacher}</p>
                            </div>
                            <svg width="7" height="8" viewBox="0 0 7 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M0.214355 0.79834L1.54102 0.487305L3.50244 2.89307L5.42578 0.449219L6.62549 0.918945L4.30859 3.87695L6.75244 6.87305L5.58447 7.34912L3.54053 4.86719L1.62988 7.32373L0.290527 6.96191L2.72168 3.86426L0.214355 0.79834Z" fill="black"/>
                            </svg>
                            </div>
                        ))}
                    </div>
                </div>
                <div onClick={()=>setpage("Add_new_course")} className="new_course_button">
                    <button>Publish a new course</button>
                </div>
                <div className="view_assigned_courses_button">
                    <a onClick={()=>setpage("Assigned_list")}>View assigned courses</a>
                </div>
            </div>
     );
}
 
export default Phone_dashboard;