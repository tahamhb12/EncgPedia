import "./homepage.css"
import pic from "./ccc.png"
import Sidebar from "../sidebar/sidebar";
import { useState } from "react";
import { Navigate, useNavigate } from "react-router-dom";
import useAuthContext from "../context/AuthContext";
const HomePage = () => {
    

    const [sidebar,setsidebar] = useState(false)
    const [show_semestres,setshow_semestres] = useState(false)
    const [semestre,setsemestre] = useState("")
    const [show_subjects,setshow_subjects] = useState(false)
    const [subject,setsubject] = useState("")
    const semestres = ["Semestre 1","Semestre 2","Semestre 3","Semestre 4","Semestre 5","Semestre 6","Semestre 7","Semestre 8","Semestre 9"];
    const subjects = ["Math","Encg","PC"];
    const [show_contribute,setshow_contribute] = useState(false)

    const {AddRequest,getrequests} = useAuthContext()


    const [req_semestre,setreq_semestre] = useState("")
    const [req_subject,setreq_subject] = useState("")
    const [req_type,setreq_type] = useState("")
    const [req_teacher,setreq_teacher] = useState("")

    const [showS,setshowS] = useState(false)
    const [showSubject,setshowSubject] = useState(false)
    const [showType,setshowType] = useState(false)




    const AddRequestt = () =>{
        AddRequest({semestre:req_semestre,subject:req_subject,type:req_type,teacher:req_teacher})
        getrequests()
        getrequests()
    }

    const navigate = useNavigate()
    
    return (  
        <div className="homepage">
            <div className="section">
                <div className="title">
                    <svg className="title_shape" width="30" height="39" viewBox="0 0 30 39" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M14.7706 22.4006C14.7255 23.2071 13.7528 23.4872 13.3386 22.8129L10.9086 18.8549C10.3741 17.985 9.65832 17.2608 8.81812 16.7397C7.97793 16.2187 7.03637 15.9151 6.06808 15.8531L1.66595 15.5698C0.915557 15.5213 0.654879 14.4758 1.28221 14.0307L4.9648 11.4193C5.77423 10.8449 6.44802 10.0757 6.93277 9.17269C7.41752 8.26972 7.6999 7.2578 7.75754 6.21713L8.02096 1.48596C8.03004 1.30959 8.09072 1.14081 8.19434 1.00369C8.29796 0.866581 8.43923 0.768146 8.59799 0.722432C8.75675 0.676717 8.92489 0.686059 9.07842 0.749124C9.23195 0.812189 9.36303 0.925759 9.45296 1.07362L11.8829 5.03163C12.4172 5.90141 13.1326 6.62554 13.9724 7.14667C14.8122 7.6678 15.7534 7.9716 16.7214 8.03402L21.1256 8.31679C21.2897 8.32656 21.4467 8.39179 21.5743 8.50316C21.7019 8.61453 21.7935 8.76637 21.836 8.93699C21.8786 9.10762 21.8699 9.28833 21.8112 9.45333C21.7526 9.61834 21.6469 9.75921 21.5093 9.85585L17.8267 12.4672C17.0175 13.0414 16.3437 13.8102 15.8589 14.7128C15.3741 15.6153 15.0914 16.6268 15.0334 17.6672L14.7706 22.4006ZM25.6868 31.5183C25.6811 31.6241 25.6445 31.7253 25.5822 31.8074C25.52 31.8896 25.4352 31.9485 25.34 31.976C25.2448 32.0034 25.1439 31.9979 25.0518 31.9602C24.9596 31.9225 24.8809 31.8545 24.8267 31.766L23.3689 29.3916C22.718 28.3335 21.6434 27.6666 20.4653 27.5899L17.8232 27.4201C17.7247 27.4139 17.6306 27.3746 17.5542 27.3077C17.4777 27.2408 17.4229 27.1497 17.3973 27.0473C17.3718 26.945 17.377 26.8366 17.412 26.7376C17.4471 26.6386 17.5103 26.554 17.5927 26.4957L19.8018 24.929C20.2875 24.5845 20.6918 24.1232 20.9828 23.5815C21.2738 23.0399 21.4433 22.4328 21.4781 21.8085L21.6359 18.9689C21.6417 18.8631 21.6782 18.762 21.7405 18.6798C21.8027 18.5977 21.8875 18.5387 21.9827 18.5113C22.078 18.4839 22.1788 18.4894 22.2709 18.5271C22.3631 18.5648 22.4418 18.6327 22.496 18.7213L23.9538 21.0956C24.2744 21.6176 24.7037 22.0522 25.2077 22.3649C25.7117 22.6777 26.2765 22.86 26.8574 22.8974L29.4995 23.0672C29.598 23.0733 29.6921 23.1126 29.7685 23.1795C29.845 23.2465 29.8998 23.3376 29.9254 23.4399C29.9509 23.5422 29.9457 23.6506 29.9107 23.7496C29.8756 23.8487 29.8124 23.9333 29.73 23.9915L27.5209 25.5582C27.0352 25.9027 26.6309 26.3641 26.3399 26.9057C26.0489 27.4474 25.8794 28.0544 25.8446 28.6787L25.6868 31.5183ZM11.5173 38.1209C11.5127 38.1907 11.4879 38.2572 11.4464 38.3112C11.4049 38.3651 11.3488 38.4038 11.2859 38.422C11.223 38.4401 11.1564 38.4367 11.0954 38.4122C11.0343 38.3878 10.9819 38.3435 10.9454 38.2856L9.97384 36.7041C9.54023 35.997 8.82294 35.5519 8.03634 35.5019L6.27633 35.3883C6.21137 35.3833 6.14948 35.3566 6.09927 35.312C6.04905 35.2674 6.01302 35.2071 5.99616 35.1395C5.9793 35.0719 5.98246 35.0003 6.0052 34.9348C6.02794 34.8692 6.06914 34.8128 6.12305 34.7736L7.59442 33.7295C7.91863 33.4997 8.18852 33.1919 8.38269 32.8305C8.57685 32.469 8.68994 32.0639 8.71296 31.6472L8.81855 29.7557C8.82323 29.6859 8.84804 29.6193 8.88952 29.5654C8.93099 29.5114 8.98709 29.4727 9.04999 29.4546C9.1129 29.4365 9.1795 29.4399 9.24053 29.4643C9.30156 29.4887 9.35398 29.533 9.39052 29.591L10.3621 31.1724C10.5758 31.5208 10.8623 31.8109 11.1986 32.0196C11.5349 32.2283 11.9119 32.3499 12.2995 32.3746L14.0575 32.4888C14.1224 32.4939 14.1843 32.5205 14.2345 32.5651C14.2847 32.6097 14.3208 32.67 14.3376 32.7376C14.3545 32.8052 14.3513 32.8768 14.3286 32.9424C14.3059 33.008 14.2647 33.0643 14.2108 33.1036L12.7394 34.1476C12.0815 34.6136 11.6673 35.3845 11.6208 36.2299L11.5173 38.1209Z" fill="#F5841F"/>
                    </svg>
                    <h2>Search with</h2>
                    <h2 style={{lineHeight:"0.8"}}><span>ENCGpedia</span> Power</h2>
                </div>
                <div className="inputs">
                    <img src={pic} alt="" />
                    <svg width="54" height="48" viewBox="0 0 54 48" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M42.732 5.99919C42.3814 5.88234 42.3814 5.38731 42.732 5.27045L44.7899 4.58527C45.2423 4.43445 45.6534 4.18035 45.9905 3.8431C46.3276 3.50585 46.5815 3.09473 46.732 2.64232L47.4173 0.585698C47.5342 0.235137 48.0293 0.235137 48.1461 0.585698L48.8314 2.64338C48.9822 3.09571 49.2364 3.50669 49.5736 3.84376C49.9109 4.18082 50.3221 4.4347 50.7746 4.58527L52.8314 5.27045C52.9082 5.29565 52.975 5.34444 53.0224 5.40987C53.0698 5.4753 53.0953 5.55403 53.0953 5.63482C53.0953 5.71561 53.0698 5.79434 53.0224 5.85977C52.975 5.92521 52.9082 5.974 52.8314 5.99919L50.7735 6.68438C50.3212 6.83509 49.9103 7.08903 49.5732 7.42608C49.2361 7.76314 48.9821 8.17405 48.8314 8.62627L48.1461 10.6839C48.1209 10.7607 48.0721 10.8276 48.0067 10.8749C47.9413 10.9223 47.8625 10.9479 47.7817 10.9479C47.7009 10.9479 47.6222 10.9223 47.5567 10.8749C47.4913 10.8276 47.4425 10.7607 47.4173 10.6839L46.732 8.62627C46.5813 8.17405 46.3274 7.76314 45.9903 7.42608C45.6532 7.08903 45.2422 6.83509 44.7899 6.68438L42.732 5.99919ZM37.3147 10.1029C37.2687 10.0876 37.2287 10.0583 37.2003 10.019C37.1719 9.97972 37.1567 9.93249 37.1567 9.88403C37.1567 9.83557 37.1719 9.78835 37.2003 9.74906C37.2287 9.70978 37.2687 9.68043 37.3147 9.6652L38.5493 9.25409C39.0996 9.07031 39.531 8.63901 39.7148 8.08874L40.1259 6.85435C40.1411 6.80834 40.1705 6.76831 40.2098 6.73994C40.2491 6.71156 40.2963 6.69629 40.3448 6.69629C40.3932 6.69629 40.4405 6.71156 40.4798 6.73994C40.519 6.76831 40.5484 6.80834 40.5636 6.85435L40.9748 8.08874C41.0652 8.36013 41.2176 8.60674 41.4199 8.80901C41.6222 9.01128 41.8688 9.16367 42.1403 9.25409L43.3748 9.6652C43.4208 9.68043 43.4608 9.70978 43.4892 9.74906C43.5176 9.78835 43.5329 9.83557 43.5329 9.88403C43.5329 9.93249 43.5176 9.97972 43.4892 10.019C43.4608 10.0583 43.4208 10.0876 43.3748 10.1029L42.1403 10.514C41.8688 10.6044 41.6222 10.7568 41.4199 10.9591C41.2176 11.1613 41.0652 11.4079 40.9748 11.6793L40.5636 12.9137C40.5484 12.9597 40.5191 12.9998 40.4798 13.0281C40.4405 13.0565 40.3932 13.0718 40.3448 13.0718C40.2963 13.0718 40.2491 13.0565 40.2098 13.0281C40.1705 12.9998 40.1411 12.9597 40.1259 12.9137L39.7148 11.6793C39.6243 11.4079 39.4719 11.1613 39.2696 10.9591C39.0673 10.7568 38.8207 10.6044 38.5493 10.514L37.3147 10.1029ZM36.2003 2.59345C36.17 2.58296 36.1438 2.56331 36.1252 2.53723C36.1067 2.51115 36.0967 2.47993 36.0967 2.44792C36.0967 2.4159 36.1067 2.38468 36.1252 2.3586C36.1438 2.33252 36.17 2.31287 36.2003 2.30238L37.0226 2.02831C37.3902 1.90614 37.6781 1.61826 37.8003 1.2507L38.0744 0.428479C38.0849 0.398231 38.1045 0.372001 38.1306 0.353438C38.1567 0.334875 38.1879 0.324901 38.2199 0.324901C38.2519 0.324901 38.2832 0.334875 38.3093 0.353438C38.3353 0.372001 38.355 0.398231 38.3655 0.428479L38.6396 1.2507C38.6999 1.43184 38.8015 1.59643 38.9365 1.73141C39.0715 1.86639 39.2361 1.96805 39.4173 2.0283L40.2396 2.30238C40.2698 2.31287 40.2961 2.33252 40.3146 2.3586C40.3332 2.38468 40.3432 2.4159 40.3432 2.44792C40.3432 2.47993 40.3332 2.51115 40.3146 2.53723C40.2961 2.56331 40.2698 2.58296 40.2396 2.59345L39.4173 2.86752C39.2361 2.92778 39.0715 3.02944 38.9365 3.16442C38.8015 3.2994 38.6999 3.464 38.6396 3.64513L38.3655 4.46629C38.355 4.49654 38.3353 4.52277 38.3093 4.54133C38.2832 4.55989 38.2519 4.56987 38.2199 4.56987C38.1879 4.56987 38.1567 4.55989 38.1306 4.54133C38.1045 4.52277 38.0849 4.49654 38.0744 4.46629L37.8003 3.64407C37.6781 3.27651 37.3902 2.98863 37.0226 2.86646L36.2003 2.59345Z" fill="#D0D0D0"/>
                    <path d="M43.3256 43.4828L33.3511 33.2816C35.7525 30.012 37.0488 26.0322 37.0445 21.943C37.0445 11.4977 28.7353 2.99976 18.5222 2.99976C8.30914 2.99976 0 11.4977 0 21.943C0 32.3882 8.30914 40.8862 18.5222 40.8862C22.5206 40.8906 26.4119 39.5648 29.6089 37.1088L39.5834 47.3101C40.0884 47.7717 40.7469 48.0181 41.4239 47.9987C42.1008 47.9793 42.7449 47.6956 43.2237 47.2059C43.7026 46.7161 43.98 46.0574 43.999 45.3651C44.0179 44.6727 43.777 43.9992 43.3256 43.4828ZM5.29207 21.943C5.29207 19.2668 6.068 16.6508 7.52175 14.4256C8.9755 12.2005 11.0418 10.4662 13.4593 9.44207C15.8768 8.41796 18.5369 8.15 21.1033 8.67209C23.6697 9.19418 26.0271 10.4829 27.8774 12.3752C29.7277 14.2675 30.9877 16.6785 31.4982 19.3032C32.0087 21.9279 31.7467 24.6485 30.7453 27.121C29.744 29.5934 28.0482 31.7067 25.8725 33.1934C23.6968 34.6802 21.1389 35.4738 18.5222 35.4738C15.0147 35.4695 11.652 34.0426 9.17174 31.506C6.69152 28.9694 5.29628 25.5302 5.29207 21.943Z" fill="#D0D0D0"/>
                    </svg>
                    <div className="semestre_input" style={semestre?{border:"3px solid black",color:"black"}:{border:"3px solid #F5841F"}} onClick={()=>{setshow_semestres(true);setshow_subjects(false)}}>{semestre?semestre:"CHOOSE A SEMESTRE"}</div>
                    <div className="semestre_input" style={subject?{border:"3px solid black",color:"black"}:{border:"3px solid #F5841F"}} onClick={()=>{setshow_subjects(true);setshow_semestres(false)}}>{subject?subject:"CHOOSE A SUBJECT"}</div>
                </div>
                <div className="buttons">
                    <button onClick={()=>navigate(`/${semestre.slice(0,1)+semestre.slice(9,10)}/${subject}`)}>Submit</button>
                    <a onClick={()=>setshow_contribute(!show_contribute)}>Contribute With Us</a>
                </div>
            </div>
            <svg className="first_decoration" width="221" height="275" viewBox="0 0 221 275" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M190.606 0.000242045C206.494 12.5156 219.76 28.0377 229.649 45.6803C239.537 63.3228 245.854 82.7403 248.239 102.824C250.623 122.908 249.028 143.265 243.545 162.732C238.063 182.2 228.799 200.396 216.284 216.284C203.768 232.171 188.246 245.438 170.604 255.326C152.961 265.215 133.544 271.532 113.46 273.916C93.376 276.301 73.0192 274.706 53.5517 269.223C34.0843 263.74 15.8874 254.477 0 241.961L31.3055 202.221C41.9742 210.625 54.1937 216.846 67.2664 220.528C80.3391 224.21 94.009 225.281 107.496 223.679C120.982 222.078 134.021 217.836 145.869 211.196C157.716 204.556 168.139 195.647 176.543 184.978C184.948 174.31 191.168 162.09 194.85 149.017C198.532 135.945 199.603 122.275 198.002 108.788C196.401 95.3016 192.159 82.2625 185.518 70.4153C178.878 58.568 169.969 48.1447 159.301 39.7404L190.606 0.000242045Z" fill="black" fill-opacity="0.13"/>
            </svg>
            <svg className="sec_decoration" width="63" height="63" viewBox="0 0 63 63" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M62.3588 5.98259C45.3195 20.0516 42.8339 45.2383 56.827 62.3114C42.8027 45.2002 17.5365 42.719 0.39381 56.7692C17.4334 42.7004 19.9187 17.5135 5.92561 0.440429C19.9502 17.5519 45.2161 20.0328 62.3588 5.98259Z" fill="black" fill-opacity="0.21"/>
            </svg>
            <svg className="third_decoration" width="89" height="89" viewBox="0 0 89 89" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M88.2719 76.9725C89.5212 78.2284 87.9364 80.2294 86.4278 79.301L73.7726 71.5118C57.4313 61.4538 36.3268 63.9036 22.7242 77.4373L12.1897 87.9184C10.9337 89.1678 8.9328 87.5831 9.86127 86.0742L17.6505 73.419C27.7084 57.0779 25.2586 35.9734 11.7248 22.3707L1.24381 11.8363C-0.00560069 10.5803 1.57913 8.57938 3.08793 9.50786L15.7431 17.2971C32.0843 27.3549 53.1888 24.9052 66.7915 11.3713L77.326 0.890263C78.5818 -0.358988 80.5828 1.22574 79.6544 2.73438L71.8652 15.3896C61.8072 31.7309 64.257 52.8354 77.7909 66.4381L88.2719 76.9725Z" fill="black" fill-opacity="0.13"/>
            </svg>
        
            {show_semestres && 
            <div className="semestres_background">
                <div className="semestres">
                    {semestres.map((a,index)=>(
                        <p key={index} onClick={()=>{setsemestre(a);setshow_semestres(false)}}>{a}</p>
                    ))}
                </div>
            </div>}
            {show_semestres && 
            <div className="semestres_background2">
                <div className="semestres2">
                    {semestres.map((a,index)=>(
                        <p key={index} onClick={()=>{setsemestre(a);setshow_semestres(false)}}>{a}</p>
                    ))}
                </div>
            </div>}

            {show_subjects && 
            <div className="semestres_background">
                <div className="semestres">
                    {subjects.map((a,index)=>(
                        <p key={index} onClick={()=>{setsubject(a);setshow_subjects(false)}}>{a}</p>
                    ))}
                </div>
            </div>}
            {show_subjects && 
            <div style={{top:"748px"}} className="subjects_background2">
                <div style={{height:"fit-content"}} className="semestres2">
                    {subjects.map((a,index)=>(
                        <p key={index} onClick={()=>{setsubject(a);setshow_subjects(false)}}>{a}</p>
                    ))}
                </div>
            </div>}

                    {show_contribute &&
                    
                    <div style={{position:"absolute",top:0,height:"100vh",width:"100vw",left:0,backgroundColor:"rgba(0, 0, 0, 0.4)",display:"flex",justifyContent:"center",alignItems:"center"}} className="new_interface">
                        <div className="add_new_course" >
                        <i onClick={()=>setshow_contribute(false)} class="show_contribute fa-solid fa-xmark"></i>
                            <div className="add_new_inputs">
                                <h2>Add a new course</h2>
                                <div style={{position:"relative"}}>
                                    {showS?<i class="drop_down fa-solid fa-angle-up"></i>:<i class="drop_down fa-solid fa-angle-down"></i>}
                                    <div className="input" type="text" style={req_semestre?{color:"black"}:{}} onClick={()=>setshowS(!showS)}>{req_semestre?req_semestre:"Semestre"}</div>
                                </div>
                                {showS && 
                                <div className="semestres" style={{width:"385px",position:"relative",top:"-7px"}} onClick={(e)=>e.stopPropagation()}>
                                <p onClick={()=>{setreq_semestre("S1");setshowS(false)}}>Semestre 1</p>
                                <p onClick={()=>{setreq_semestre("S2");setshowS(false)}}>Semestre 2</p>
                                <p onClick={()=>{setreq_semestre("S3");setshowS(false)}}>Semestre 3</p>
                                <p onClick={()=>{setreq_semestre("S4");setshowS(false)}}>Semestre 4</p>
                                </div>}
                                <div style={{position:"relative"}}>
                                    {showSubject?<i class="drop_down fa-solid fa-angle-up"></i>:<i class="drop_down fa-solid fa-angle-down"></i>}
                                    <div className="input" style={req_subject?{color:"black"}:{}} onClick={()=>setshowSubject(!showSubject)} value={req_subject}>{req_subject?req_subject:"Subject"}</div>
                                </div>
                                {showSubject && <div className="semestres" style={{width:"385px",position:"relative",top:"-7px"}} onClick={(e)=>e.stopPropagation()}>
                                <p onClick={()=>{setreq_subject("Math");setshowSubject(false)}}>Math</p>
                                <p onClick={()=>{setreq_subject("Encg");setshowSubject(false)}}>Encg</p>
                                <p onClick={()=>{setreq_subject("Pc");setshowSubject(false)}}>Pc</p>
                                </div>}
                                <div style={{position:"relative"}}>
                                    {showType?<i class="drop_down fa-solid fa-angle-up"></i>:<i class="drop_down fa-solid fa-angle-down"></i>}
                                    <div className="input" style={req_type?{color:"black"}:{}} onClick={()=>setshowType(!showType)} value={req_type}>{req_type?req_type:"Type"}</div>
                                </div>
                                {showType && 
                                <div className="semestres" style={{width:"385px",position:"relative",top:"-7px"}} onClick={(e)=>e.stopPropagation()}>
                                <p onClick={()=>{setreq_type("Course");setshowType(false)}}>Course</p>
                                <p onClick={()=>{setreq_type("Td");setshowType(false)}}>Td</p>
                                <p onClick={()=>{setreq_type("Examen");setshowType(false)}}>Examen</p>
                                </div>}
                                <input type="text" className="input" style={{color:"black"}} placeholder="Teacher" onChange={(e)=>setreq_teacher(e.target.value)}/>
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
                                    <input className="drive_link" style={{width:"382px"}} type="text" placeholder="Drive link here" />
                            </div>
                        <button style={{width:"100%",background:"#282828"}} className="add_request" onClick={()=>{AddRequestt();setshow_contribute(false)}}>Submit</button>
                        </div>
                    </div>}
        </div>
        
    );
}
 
export default HomePage;