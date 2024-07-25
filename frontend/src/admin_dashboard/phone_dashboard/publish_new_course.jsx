import { useEffect, useState } from "react";
import "./publish_new_course_page.css"
import axios from "../../axios/axios";
import useAuthContext from "../../context/AuthContext";

const Publish_new_course_page = ({setpage}) => {

    const [semestre,setsemestre] = useState("")
    const [showS,setshowS] = useState(false)
    
    const [subject,setsubject] = useState("")
    const [showSubject,setshowSubject] = useState(false)

    const [type,settype] = useState("")
    const [showType,setshowType] = useState(false)

    const [teacher,setteacher] = useState("")

    const {AddCourse,getcourses} = useAuthContext()

    const [refresh,setrefresh] = useState(false)

    const AddCoursee=async()=>{
        AddCourse({semestre,subject,type,teacher})
        setrefresh(!refresh)
    }
    useEffect(()=>{
        getcourses()
        getcourses()
    },[refresh])

    return ( 
        <div className="publish_new_course_page">
            <div className="publish_new_course_page_header">
                <svg onClick={()=>setpage("main")} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.66699 7.56006H13.0837" stroke="#808080" stroke-width="4" stroke-linecap="round"/>
                <path d="M2.66699 7.56006L7.66699 2.56006" stroke="#808080" stroke-width="4" stroke-linecap="round"/>
                <path d="M7.66699 12.5601L2.66699 7.56006" stroke="#808080" stroke-width="4" stroke-linecap="round"/>
                </svg>
                <p>Publish a new course</p>
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M13.5 6.19704C13.5 4.8187 12.9732 3.49681 12.0355 2.52218C11.0979 1.54754 9.82608 1 8.5 1C7.17392 1 5.90215 1.54754 4.96447 2.52218C4.02678 3.49681 3.5 4.8187 3.5 6.19704C3.5 12.2603 1 13.9926 1 13.9926H16C16 13.9926 13.5 12.2603 13.5 6.19704Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M9.94193 17.4574C9.79542 17.7199 9.58513 17.9378 9.33212 18.0893C9.0791 18.2408 8.79224 18.3205 8.50026 18.3205C8.20828 18.3205 7.92142 18.2408 7.6684 18.0893C7.41539 17.9378 7.2051 17.7199 7.05859 17.4574" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
            </div>
            <div className="add_new_course_inputs">
                <div onClick={()=>setshowS(!showS)} className="select">{semestre ? semestre : "Semestre"}
                    <i class="icon fa-solid fa-angle-down"></i>
                    {showS && <div className="semestres" onClick={(e)=>e.stopPropagation()}>
                        <p onClick={()=>{setsemestre("S1");setshowS(false)}}>Semestre 1</p>
                        <p onClick={()=>{setsemestre("S2");setshowS(false)}}>Semestre 2</p>
                        <p onClick={()=>{setsemestre("S3");setshowS(false)}}>Semestre 3</p>
                        <p onClick={()=>{setsemestre("S4");setshowS(false)}}>Semestre 4</p>
                    </div>}
                </div>
                <div onClick={()=>setshowSubject(!showSubject)} className="select">{subject ? subject : "Subject"}
                    <i class="icon fa-solid fa-angle-down"></i>
                    {showSubject && <div className="semestres" onClick={(e)=>e.stopPropagation()}>
                        <p onClick={()=>{setsubject("Math");setshowSubject(false)}}>Math</p>
                        <p onClick={()=>{setsubject("Encg");setshowSubject(false)}}>Encg</p>
                        <p onClick={()=>{setsubject("Co");setshowSubject(false)}}>Co</p>
                        <p onClick={()=>{setsubject("Test");setshowSubject(false)}}>Test</p>
                    </div>}
                </div>
                <div onClick={()=>setshowType(!showType)} className="select">{type ? type : "Type"}
                    <i class="icon fa-solid fa-angle-down"></i>
                    {showType && <div className="semestres" onClick={(e)=>e.stopPropagation()}>
                        <p onClick={()=>{settype("Course");setshowType(false)}}>Course</p>
                        <p onClick={()=>{settype("Td");setshowType(false)}}>Td</p>
                        <p onClick={()=>{settype("Examen");setshowType(false)}}>Examen</p>
                    </div>}
                </div>
                <input type="text" className="select" onChange={(e)=>setteacher(e.target.value)} placeholder="Teacher"/>
                <div className="drag_here">
                    <svg width="70" height="40" viewBox="0 0 70 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="70" height="40" rx="8" fill="#F2F4F7"/>
                    <g clip-path="url(#clip0_370_1615)">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M28.83 13.106C28.9959 12.774 29.2509 12.4947 29.5665 12.2994C29.8821 12.104 30.2458 12.0004 30.617 12H39.381C39.7525 12 40.1166 12.1035 40.4326 12.2988C40.7486 12.4942 41.0039 12.7737 41.17 13.106L44.682 20.131C44.8905 20.547 44.9993 21.0057 45 21.471V27C45 27.5304 44.7893 28.0391 44.4142 28.4142C44.0391 28.7893 43.5304 29 43 29H27C26.4696 29 25.9609 28.7893 25.5858 28.4142C25.2107 28.0391 25 27.5304 25 27V21.472C25.0002 21.0065 25.1087 20.5473 25.317 20.131L28.83 13.106ZM39.381 14H30.618L27.12 21H30.5C30.8978 21 31.2794 21.158 31.5607 21.4393C31.842 21.7206 32 22.1022 32 22.5V23.5C32 23.6326 32.0527 23.7598 32.1464 23.8536C32.2402 23.9473 32.3674 24 32.5 24H37.5C37.6326 24 37.7598 23.9473 37.8536 23.8536C37.9473 23.7598 38 23.6326 38 23.5V22.5C38 22.1022 38.158 21.7206 38.4393 21.4393C38.7206 21.158 39.1022 21 39.5 21H42.88L39.381 14Z" fill="#98A0B4"/>
                    </g>
                    <defs>
                    <clipPath id="clip0_370_1615">
                    <rect width="24" height="24" fill="white" transform="translate(23 8)"/>
                    </clipPath>
                    </defs>
                    </svg>
                    <p><span>Click here</span> to upload or drop files here</p>
                </div>
                <div className="button">
                    <button onClick={AddCoursee}>Publish a new course</button>
                </div>
            </div>
        </div>
     );
}
 
export default Publish_new_course_page;