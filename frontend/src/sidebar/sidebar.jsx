import "./sidebar.css"
import logo from "./img.png"
import login from "./Customer.png"
import {AnimatePresence, motion} from "framer-motion";
import { useNavigate } from "react-router-dom";
const Sidebar = (props) => {

    const navigate = useNavigate()
    const setsidebar = props.setsidebar;
    return ( 
        <div
        className="sidebar">
            <div className="logo">
                <img src={logo} alt="" />
                <h2>EncgPedia</h2>
                <div onClick={()=>setsidebar(false)} className="close_icon">
                    <i onClick={()=>setsidebar(false)} class="fa-solid fa-xmark"></i>
                </div>
            </div>
            <div className="links">
                <div onClick={()=>navigate("/")} className="home">
                    <svg width="26px" height="21" viewBox="0 0 18 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M10.8334 1.92635L10.8334 1.92635L10.8353 1.928L16.8334 7.18635C16.8337 7.18662 16.834 7.1869 16.8344 7.18717C17.1239 7.4464 17.3553 7.76406 17.5131 8.11922C17.6711 8.47476 17.7519 8.85978 17.7501 9.24885V9.25001V18C17.7501 18.7294 17.4604 19.4288 16.9446 19.9445C16.4289 20.4603 15.7294 20.75 15.0001 20.75H3.00009C2.27075 20.75 1.57128 20.4603 1.05555 19.9445C0.539826 19.4288 0.250095 18.7294 0.250095 18L0.250103 9.26001L0.250087 9.25802C0.246982 8.86741 0.327127 8.48062 0.485186 8.12341C0.643083 7.76656 0.875116 7.44741 1.16586 7.18715L7.1649 1.928L7.16491 1.928L7.16676 1.92635C7.67095 1.47539 8.32366 1.22607 9.00009 1.22607C9.67653 1.22607 10.3292 1.47539 10.8334 1.92635ZM11.0001 19.25H11.2501V19V14C11.2501 13.6685 11.1184 13.3505 10.884 13.1161C10.6496 12.8817 10.3316 12.75 10.0001 12.75H8.00009C7.66857 12.75 7.35063 12.8817 7.11621 13.1161C6.88179 13.3505 6.75009 13.6685 6.75009 14V19V19.25H7.00009H11.0001ZM12.7501 19V19.25H13.0001H15.0001C15.3316 19.25 15.6496 19.1183 15.884 18.8839C16.1184 18.6495 16.2501 18.3315 16.2501 18V9.25001V9.24969C16.2499 9.07221 16.2119 8.89681 16.1386 8.73516C16.0653 8.57352 15.9584 8.42933 15.8251 8.31219L15.8247 8.31186L9.82509 3.06219C9.82502 3.06213 9.82495 3.06206 9.82488 3.062C9.5968 2.86172 9.30363 2.75127 9.00009 2.75127C8.69656 2.75127 8.40339 2.86172 8.17531 3.062C8.17524 3.06206 8.17517 3.06213 8.17509 3.06219L2.17547 8.31186L2.1751 8.31219C2.04176 8.42933 1.9349 8.57352 1.86162 8.73516C1.78834 8.89681 1.75032 9.07221 1.75009 9.24969V9.25001V18C1.75009 18.3315 1.88179 18.6495 2.11621 18.8839C2.35063 19.1183 2.66857 19.25 3.00009 19.25H5.00009H5.25009V19V14C5.25009 13.2707 5.53983 12.5712 6.05555 12.0555C6.57128 11.5397 7.27075 11.25 8.00009 11.25H10.0001C10.7294 11.25 11.4289 11.5397 11.9446 12.0555C12.4604 12.5712 12.7501 13.2707 12.7501 14V19Z" fill="#333333" stroke="white" stroke-width="0.5"/>
                    </svg>
                    <h3>Home</h3>
                </div>
                <div onClick={()=>navigate("/login")} className="home">
                    <img src={login} alt="" />
                    <h3>Login</h3>
                </div>
            </div>
            <div className="line"></div>
        </div>
     );
}
 
export default Sidebar;