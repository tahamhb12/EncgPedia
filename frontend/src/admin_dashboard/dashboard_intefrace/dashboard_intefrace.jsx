import useAuthContext from "../../context/AuthContext";
import "./dashboard_intefrace.css"
import chart from "./chart.png"
const Dashboard_interface = () => {

    const {courses} = useAuthContext();

    return ( 
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
                            {courses.length}
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
            <div className="graph">
                <img src={chart} alt="" />
            </div>
        </div>
     );
}
 
export default Dashboard_interface;