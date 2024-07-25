import { useState } from "react";
import useAuthContext from "../../context/AuthContext";
import "./assigned_list.css"
import drive from "./drive_icon.png"
import axios from "../../axios/axios";

const Assigned_list = ({setpage}) => {

    const {requests,AddCourse,getrequests} = useAuthContext()

    const [selected_request,setselected_request] = useState({})
    const [show_req,setshow_req] = useState(false)

    const RejectRequest=async()=>{
        try {
            await axios.post(`/api/requests/${selected_request.id}`)
            getrequests()
        } catch (error) {
            console.log(error)
        }
    }
    
    const AddCoursee = () =>{
        AddCourse({semestre:selected_request.semestre,subject:selected_request.subject,type:selected_request.type,teacher:selected_request.teacher})
        RejectRequest()
        getrequests()
    }

    return ( 
        <>        
        {show_req ==false && 
        <div className="assigned_list">
            <div className="assigned_list_header">
                <svg onClick={()=>setpage("main")} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.66699 7.56006H13.0837" stroke="#808080" stroke-width="4" stroke-linecap="round"/>
                <path d="M2.66699 7.56006L7.66699 2.56006" stroke="#808080" stroke-width="4" stroke-linecap="round"/>
                <path d="M7.66699 12.5601L2.66699 7.56006" stroke="#808080" stroke-width="4" stroke-linecap="round"/>
                </svg>
                <p>Assigned courses</p>
            </div>
            <div className="courses_requests">
                {requests.map((a,index)=>(
                    <div key={index} className="course_infos" onClick={()=>{setselected_request(a);setshow_req(true)}}>
                        <img src={drive} />
                        <div className="infos">
                            <h2>{a.subject}</h2>
                            <p>{a.semestre} - {a.teacher}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>}
            {show_req && 
            <div className="publish_new_course_page">
            <div className="publish_new_course_page_header" style={{justifyContent:"center",position:"relative"}}>
                <svg onClick={()=>setshow_req(false)} style={{position:"absolute",left:41}} width="16" height="15" viewBox="0 0 16 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2.66699 7.56006H13.0837" stroke="#808080" stroke-width="4" stroke-linecap="round"/>
                <path d="M2.66699 7.56006L7.66699 2.56006" stroke="#808080" stroke-width="4" stroke-linecap="round"/>
                <path d="M7.66699 12.5601L2.66699 7.56006" stroke="#808080" stroke-width="4" stroke-linecap="round"/>
                </svg>
                <p>Accept or reject</p>
            </div>
            <div className="add_new_course_inputs">
                <div className="select">{selected_request.semestre}
                </div>
                <div className="select">{selected_request.subject}
                </div>
                <div className="select">{selected_request.type}
                </div>
                <input type="text" className="select" value={selected_request.teacher} placeholder="Teacher"/>
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
                    <input type="text" placeholder="Drive Link" name="" id="" />
                </div>
                <div className="button" style={{flexDirection:"column"}}>
                    <button onClick={()=>{AddCoursee();setshow_req(false)}}>Accept</button>
                    <button onClick={()=>{RejectRequest();setshow_req(false)}} style={{background:"none",height:"fit-content",fontSize:"13px",color:"#414141",fontWeight:"600"}}>Reject</button>
                </div>
            </div>
        </div>}
    </>

     );
}
 
export default Assigned_list;