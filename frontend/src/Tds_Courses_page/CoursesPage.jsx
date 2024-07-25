import { useNavigate, useParams } from "react-router-dom";
import "./CoursesPage.css"
import back from "./Back.png"
import useAuthContext from "../context/AuthContext";
const Courses = () => {

    const {semestre,subject} = useParams()
    const navigate = useNavigate()
    const {courses} = useAuthContext()

    const wanted_course = courses.filter(a=>a.type==="Course" && a.subject== subject && a.semestre == semestre)
    const wanted_td = courses.filter(a=>a.type==="Td" && a.subject== subject && a.semestre == semestre)
    const wanted_exam = courses.filter(a=>a.type==="Examen" && a.subject== subject && a.semestre == semestre)
    return ( 
        <div className="courses">
            <h2>{subject}</h2>
{/*             <h2>{semestre}</h2>
            <h2>{subject}</h2> */}
            <div className="cours">
                <img onClick={()=>navigate("/")} className="back_img" src={back} alt="" />
                <h4>Cours</h4>
                {wanted_course.length>0?
                <div className="courses_container">
                    {wanted_course.map((a,index)=>(
                    <div className="course" key={index}>
                        <a href={a.drive_link} className="course_img" target="_blank">
                            <svg width="55" height="82" viewBox="0 0 55 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.6553 81.4979C21.1111 81.4979 27.1632 75.4458 27.1632 67.9901V54.4822H13.6553C6.19958 54.4822 0.147461 60.5344 0.147461 67.9901C0.147461 75.4458 6.19958 81.4979 13.6553 81.4979Z" fill="white"/>
                            <path d="M0.147461 40.9774C0.147461 33.5217 6.19958 27.4697 13.6553 27.4697H27.1632V54.4819H13.6553C6.19958 54.4852 0.147461 48.4331 0.147461 40.9774Z" fill="#E2E2E2"/>
                            <path d="M0.147461 13.9649C0.147461 6.50915 6.19958 0.457031 13.6553 0.457031H27.1632V27.4695H13.6553C6.19958 27.4695 0.147461 21.4206 0.147461 13.9649Z" fill="white"/>
                            <path d="M27.1602 0.457031H40.668C48.1237 0.457031 54.1759 6.50915 54.1759 13.9649C54.1759 21.4206 48.1237 27.4695 40.668 27.4695H27.1602V0.457031Z" fill="#ECECEC"/>
                            <path d="M54.1759 40.9775C54.1759 48.4333 48.1237 54.4854 40.668 54.4854C33.2123 54.4854 27.1602 48.4333 27.1602 40.9775C27.1602 33.5218 33.2123 27.4697 40.668 27.4697C48.1237 27.4697 54.1759 33.5218 54.1759 40.9775Z" fill="white"/>
                            </svg>
                        </a>
                        <div className="course_infos">
                            <p className="course_name">
                                {a.subject}
                            </p>
                            <p className="by">
                                by {a.teacher}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
                :
                <p className="not_found">No Courses Available Right Now.</p>
                }
            </div>

            <div className="cours">
                <h4>Tds</h4>
                {wanted_td.length>0?
                <div className="courses_container">
                    {wanted_td.map((a,index)=>(
                    <div className="course" key={index}>
                        <a href={a.drive_link} className="course_img" target="_blank">
                            <svg width="55" height="82" viewBox="0 0 55 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.6553 81.4979C21.1111 81.4979 27.1632 75.4458 27.1632 67.9901V54.4822H13.6553C6.19958 54.4822 0.147461 60.5344 0.147461 67.9901C0.147461 75.4458 6.19958 81.4979 13.6553 81.4979Z" fill="white"/>
                            <path d="M0.147461 40.9774C0.147461 33.5217 6.19958 27.4697 13.6553 27.4697H27.1632V54.4819H13.6553C6.19958 54.4852 0.147461 48.4331 0.147461 40.9774Z" fill="#E2E2E2"/>
                            <path d="M0.147461 13.9649C0.147461 6.50915 6.19958 0.457031 13.6553 0.457031H27.1632V27.4695H13.6553C6.19958 27.4695 0.147461 21.4206 0.147461 13.9649Z" fill="white"/>
                            <path d="M27.1602 0.457031H40.668C48.1237 0.457031 54.1759 6.50915 54.1759 13.9649C54.1759 21.4206 48.1237 27.4695 40.668 27.4695H27.1602V0.457031Z" fill="#ECECEC"/>
                            <path d="M54.1759 40.9775C54.1759 48.4333 48.1237 54.4854 40.668 54.4854C33.2123 54.4854 27.1602 48.4333 27.1602 40.9775C27.1602 33.5218 33.2123 27.4697 40.668 27.4697C48.1237 27.4697 54.1759 33.5218 54.1759 40.9775Z" fill="white"/>
                            </svg>
                        </a>
                        <div className="course_infos">
                            <p className="course_name">
                                {a.subject}
                            </p>
                            <p className="by">
                                by {a.teacher}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
                :
                <p className="not_found">No Tds Available Right Now.</p>
                }
            </div>

            <div className="cours">
                <h4>Exam’s</h4>
                {wanted_exam.length>0?
                <div className="courses_container">
                    {wanted_exam.map((a,index)=>(
                    <div className="course" key={index}>
                        <a href={a.drive_link} className="course_img" target="_blank">
                            <svg width="55" height="82" viewBox="0 0 55 82" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M13.6553 81.4979C21.1111 81.4979 27.1632 75.4458 27.1632 67.9901V54.4822H13.6553C6.19958 54.4822 0.147461 60.5344 0.147461 67.9901C0.147461 75.4458 6.19958 81.4979 13.6553 81.4979Z" fill="white"/>
                            <path d="M0.147461 40.9774C0.147461 33.5217 6.19958 27.4697 13.6553 27.4697H27.1632V54.4819H13.6553C6.19958 54.4852 0.147461 48.4331 0.147461 40.9774Z" fill="#E2E2E2"/>
                            <path d="M0.147461 13.9649C0.147461 6.50915 6.19958 0.457031 13.6553 0.457031H27.1632V27.4695H13.6553C6.19958 27.4695 0.147461 21.4206 0.147461 13.9649Z" fill="white"/>
                            <path d="M27.1602 0.457031H40.668C48.1237 0.457031 54.1759 6.50915 54.1759 13.9649C54.1759 21.4206 48.1237 27.4695 40.668 27.4695H27.1602V0.457031Z" fill="#ECECEC"/>
                            <path d="M54.1759 40.9775C54.1759 48.4333 48.1237 54.4854 40.668 54.4854C33.2123 54.4854 27.1602 48.4333 27.1602 40.9775C27.1602 33.5218 33.2123 27.4697 40.668 27.4697C48.1237 27.4697 54.1759 33.5218 54.1759 40.9775Z" fill="white"/>
                            </svg>
                        </a>
                        <div className="course_infos">
                            <p className="course_name">
                                {a.subject}
                            </p>
                            <p className="by">
                                by {a.teacher}
                            </p>
                        </div>
                    </div>
                    ))}
                </div>
                :
                <p className="not_found">No Exams Available Right Now.</p>
                }
            </div>
            
        </div>
     );
}
 
export default Courses;
