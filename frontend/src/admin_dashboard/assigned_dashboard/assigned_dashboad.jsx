import { useState } from "react";
import useAuthContext from "../../context/AuthContext";
import "./assigned_dashboad.css"
import axios from "../../axios/axios";
import Swal from 'sweetalert2';

const Assigned_dashboad = () => {

    const {requests,AddCourse,getrequests} = useAuthContext()
    const [selected_request,setselected_request] = useState({})
    const [show_req,set_showreq] = useState(false)

    
    
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

    console.log(selected_request.semestre)

    return (
        <div className="assigned_dashboad">
            <div className="dashboard_interface">
                <div className="user_infos">
                    <h2><span>Hi</span> You,</h2>
                    <p>I’ts looking like a slow day.</p>
                </div>
                <div className="websit_infos">
                    <div className="courses">
                        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32.5" cy="32.5" r="32.5" fill="#F4F7FE"/>
                        <path opacity="0.35" d="M41.2358 46.1081H22.6643C20.0999 46.1081 18.0215 44.0297 18.0215 41.4653V22.8938C18.0215 20.3294 20.0999 18.251 22.6643 18.251H41.2358C43.8002 18.251 45.8786 20.3294 45.8786 22.8938V41.4653C45.8786 44.0297 43.8002 46.1081 41.2358 46.1081Z" fill="#F5841F"/>
                        <path d="M45.8786 36.8225V41.4654C45.8786 44.0298 43.8002 46.1082 41.2358 46.1082H22.6643C20.0999 46.1082 18.0215 44.0298 18.0215 41.4654V36.8225H24.7412C25.9809 36.8225 27.1896 37.4895 27.6709 38.6317C28.3751 40.2985 30.0233 41.4654 31.9501 41.4654C33.8768 41.4654 35.5251 40.2985 36.2292 38.6317C36.7105 37.4895 37.9177 36.8225 39.1589 36.8225H45.8786Z" fill="#F5841F"/>
                        </svg>
                        <div className="infos">
                            <p>Courses</p>
                            <p className="courses_number">
                                350
                            </p>
                        </div>
                    </div>
                    <div className="courses">
                        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32.5" cy="32.5" r="32.5" fill="#F4F7FE"/>
                        <path opacity="0.35" d="M31.9505 32.1798C36.2241 32.1798 39.6886 28.7153 39.6886 24.4417C39.6886 20.1681 36.2241 16.7036 31.9505 16.7036C27.6769 16.7036 24.2124 20.1681 24.2124 24.4417C24.2124 28.7153 27.6769 32.1798 31.9505 32.1798Z" fill="#F5841F"/>
                        <path d="M41.2363 36.8226H22.6648C20.1004 36.8226 18.022 38.9011 18.022 41.4655C18.022 44.0299 20.1004 46.1083 22.6648 46.1083H41.2363C43.8007 46.1083 45.8791 44.0299 45.8791 41.4655C45.8791 38.9011 43.8007 36.8226 41.2363 36.8226Z" fill="#F5841F"/>
                        </svg>
                        <div className="infos">
                            <p>Visits</p>
                            <p className="courses_number">
                                350
                            </p>
                        </div>
                    </div>
                    <div className="courses">
                        <svg width="65" height="65" viewBox="0 0 65 65" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <circle cx="32.5" cy="32.5" r="32.5" fill="#F4F7FE"/>
                        <path opacity="0.35" d="M21.5316 30.2175C20.0211 28.707 17.5712 28.707 16.0592 30.2175C14.5472 31.7279 14.5487 34.1778 16.0592 35.6898L23.2479 42.8785C25.4904 45.121 29.1242 45.121 31.3667 42.8785L32.7797 41.4655L21.5316 30.2175Z" fill="#F5841F"/>
                        <path d="M47.8414 20.9317C46.3309 19.4212 43.8811 19.4212 42.369 20.9317L27.3076 35.9931L32.78 41.4655L47.8414 26.4041C49.3519 24.892 49.3519 22.4422 47.8414 20.9317Z" fill="#F5841F"/>
                        </svg>
                        <div className="infos">
                            <p>Closed</p>
                            <p className="courses_number">
                                350
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="others_cours_requests">
                {requests.map((a,index)=>(
                    <div key={index} className="request" onClick={()=>{setselected_request(a);set_showreq(true)}}>
                        <svg width="50" height="51" viewBox="0 0 50 51" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect y="0.5" width="50" height="50" rx="16" fill="#F7F7F7"/>
                            <g clip-path="url(#clip0_543_1612)">
                            <path d="M30.4597 26.1409C30.4491 24.1809 31.3356 22.7016 33.13 21.6121C32.126 20.1756 30.6093 19.3852 28.6066 19.2303C26.7107 19.0808 24.6386 20.3358 23.8803 20.3358C23.0792 20.3358 21.2421 19.2837 19.8002 19.2837C16.8202 19.3318 13.6533 21.6602 13.6533 26.3972C13.6533 27.7964 13.9097 29.2419 14.4223 30.7336C15.1059 32.6936 17.5732 37.5 20.1473 37.4199C21.4931 37.3878 22.4437 36.464 24.1954 36.464C25.8936 36.464 26.7748 37.4199 28.2755 37.4199C30.8709 37.3825 33.1033 33.014 33.7548 31.0487C30.2728 29.4092 30.4597 26.2423 30.4597 26.1409ZM27.437 17.3718C28.895 15.6415 28.7615 14.0661 28.7187 13.5C27.4317 13.5748 25.9417 14.3758 25.0926 15.3638C24.158 16.4212 23.6079 17.7296 23.7254 19.2036C25.1193 19.3104 26.3903 18.5948 27.437 17.3718Z" fill="black"/>
                            <path d="M32.4855 12.5H14.7916C12.6975 12.5 11 14.1975 11 16.2916V33.9855C11 36.0795 12.6975 37.777 14.7916 37.777H32.4855C34.5795 37.777 36.277 36.0795 36.277 33.9855V16.2916C36.277 14.1975 34.5795 12.5 32.4855 12.5Z" fill="#F7F7F7"/>
                            <path d="M34.1047 27.2614H16.5293V33.1857H30.7476" fill="#4587F4"/>
                            <path d="M20.2322 15.0178L13.1724 27.2614L16.5295 33.1857L27.0451 15.0178" fill="#1DA261"/>
                            <path d="M27.0449 15.0178L34.1047 27.2614H27.3411L20.2319 15.0178" fill="#FFCF48"/>
                            </g>
                            <defs>
                            <clipPath id="clip0_543_1612">
                            <rect width="21.408" height="24" fill="white" transform="translate(13 13.5)"/>
                            </clipPath>
                            </defs>
                        </svg>
                        <div className="infos">
                            <p>{a.subject}</p>
                            <p>{a.semestre} - {a.teacher}</p>
                        </div>
                    </div>
                ))}
            </div>

            {show_req && <div style={{position:"absolute",top:0,height:"100vh",width:"100vw",left:0,backgroundColor:"rgba(0, 0, 0, 0.4)",display:"flex",justifyContent:"center",alignItems:"center"}} className="new_interface">
                    <div className="add_new_course">
                        <div className="add_new_inputs">
                            <h2>Request</h2>
                            <input type="text" placeholder="Semestre" value={selected_request.semestre}/>
                            <input type="text" placeholder="Subject" value={selected_request.subject}/>
                            <input type="text" placeholder="Type" value={selected_request.type}/>
                            <input type="text" placeholder="Teacher" value={selected_request.teacher}/>
                        </div>
                        <div style={{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center"}}>
                            <div className="drag_link">
                                <svg width="96" height="40" viewBox="0 0 96 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="96" height="40" rx="8" fill="#F2F4F7"/>
                                <g clip-path="url(#clip0_340_2068)">
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M41.83 13.106C41.9959 12.774 42.2509 12.4947 42.5665 12.2994C42.8821 12.104 43.2458 12.0004 43.617 12H52.381C52.7525 12 53.1166 12.1035 53.4326 12.2988C53.7486 12.4942 54.0039 12.7737 54.17 13.106L57.682 20.131C57.8905 20.547 57.9993 21.0057 58 21.471V27C58 27.5304 57.7893 28.0391 57.4142 28.4142C57.0391 28.7893 56.5304 29 56 29H40C39.4696 29 38.9609 28.7893 38.5858 28.4142C38.2107 28.0391 38 27.5304 38 27V21.472C38.0002 21.0065 38.1087 20.5473 38.317 20.131L41.83 13.106ZM52.381 14H43.618L40.12 21H43.5C43.8978 21 44.2794 21.158 44.5607 21.4393C44.842 21.7206 45 22.1022 45 22.5V23.5C45 23.6326 45.0527 23.7598 45.1464 23.8536C45.2402 23.9473 45.3674 24 45.5 24H50.5C50.6326 24 50.7598 23.9473 50.8536 23.8536C50.9473 23.7598 51 23.6326 51 23.5V22.5C51 22.1022 51.158 21.7206 51.4393 21.4393C51.7206 21.158 52.1022 21 52.5 21H55.88L52.381 14Z" fill="#98A0B4"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_340_2068">
                                <rect width="24" height="24" fill="white" transform="translate(36 8)"/>
                                </clipPath>
                                </defs>
                                </svg>
                                <p>Click here to upload or drop files here</p>
                            </div>
                                <p>or</p>
                                <input style={{width:"382px"}} className="drive_link" type="text" placeholder="Drive link here" />
                        </div>
                    <div className="buttons" style={{display:"flex",gap:"50px",marginTop:"25px"}}>
                        <button style={{color:"white"}} className="add_request" onClick={()=>{AddCoursee();set_showreq(false)}}>Accept</button>
                        <button className="add_request" onClick={()=>{RejectRequest();set_showreq(false)}}>Reject</button>
                    </div>
                    </div>
                </div>}
        </div>
     );
}
 
export default Assigned_dashboad;