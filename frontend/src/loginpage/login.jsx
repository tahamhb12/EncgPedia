import "./login.css"
import circles from "./circles.png"
import { useNavigate } from "react-router-dom";
const Login = () => {

    const navigate = useNavigate()
    
    return ( 
        <div className="login_page">
            <div className="login_page_first_half">
                <img src={circles} alt="" />
                <h2>EncgPedia</h2>
                <p>Where you can find all the courses of ENCGMEK powred by ADE SERENITY</p>
                <button>Read More</button>
            </div>
            <div className="login_page_second_half">
                <svg className="login_svg" width="152" height="152" viewBox="0 0 152 152" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect width="76" height="76" fill="#F5841F"/>
                    <rect opacity="0.4" y="76" width="76" height="76" fill="#F5841F"/>
                    <rect opacity="0.33" x="76" width="76" height="76" fill="#F5841F"/>
                    <rect opacity="0.16" x="76" y="76" width="76" height="76" fill="#F5841F"/>
                </svg>
                <svg onClick={()=>navigate("/")} className="back_icon" width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M2 10.5H18.6667" stroke="#808080" stroke-width="4" stroke-linecap="round"/>
                <path d="M2 10.5L10 2.5" stroke="#808080" stroke-width="4" stroke-linecap="round"/>
                <path d="M10 18.5L2 10.5" stroke="#808080" stroke-width="4" stroke-linecap="round"/>
                </svg>
                <div className="title">
                    <h2>Hello Again!</h2>
                    <p>Welcome Back</p>
                </div>
                <form action="">
                    <div className="email_input">
                        <input type="email" placeholder="Email Adress" />
                        <svg className="email_input_icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.3">
                        <path fill-rule="evenodd" clip-rule="evenodd" d="M1.5 5.25L2.25 4.5H21.75L22.5 5.25V18.75L21.75 19.5H2.25L1.5 18.75V5.25ZM3 6.8025V18H21V6.804L12.465 13.35H11.55L3 6.8025ZM19.545 6H4.455L12 11.8035L19.545 6Z" fill="#333333"/>
                        </g>
                        </svg>
                    </div>
                    <div className="email_input">
                        <input type="password" placeholder="Password" />
                        <svg className="email_input_icon" width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g opacity="0.3">
                        <path d="M20 12C20 10.897 19.103 10 18 10H17V7C17 4.243 14.757 2 12 2C9.243 2 7 4.243 7 7V10H6C4.897 10 4 10.897 4 12V20C4 21.103 4.897 22 6 22H18C19.103 22 20 21.103 20 20V12ZM9 7C9 5.346 10.346 4 12 4C13.654 4 15 5.346 15 7V10H9V7Z" fill="#333333"/>
                        </g>
                        </svg>
                    </div>
                    <button>Login</button>
                    <a href="">Forgot Password</a>
                </form>
            </div>
        </div>
     );
}
 
export default Login;