import {createContext,useContext,useEffect,useState } from "react";
import axios from "../axios/axios"
import { useNavigate } from "react-router-dom";
import Swal from 'sweetalert2';


const AuthContext = createContext({});

export const AuthProvider = ({ children })=>{


    const [user,setuser] = useState(null);
    const [courses,setcourses] = useState([]);
    const [requests,setrequests] = useState([]);
    const [login_errors,setlogin_errors] = useState([]);
    const [register_errors,setRegister_errors] = useState([]);


    const navigate = useNavigate();
    const csrf =  () => axios.get("/sanctum/csrf-cookie");

    const getcourses =async() =>{
        const {data} = await axios.get("/api/courses")
        setcourses(data)
    }
    const getrequests =async() =>{
        const {data} = await axios.get("/api/requests")
        setrequests(data)
    }

    const getuser = async() => {
        const { data } = await axios.get("/api/user");
        setuser(data)
    }

    const login = async ({ ...data })=>{
        await csrf()
        try {
            await axios.post('/login',data);
            await getuser();
            navigate("/admin")
        } catch (error) {
            if(error.response.status === 422){
                setlogin_errors(error.response.data.errors)
            }
    }}

    const logout = () => {
        axios.post("/logout").then(()=>{
            setuser(null)
            navigate("/login")
        })
    }

    useEffect(()=>{
        if(!user){
          getuser()
          getcourses()
          getrequests()
        }
      },[])


    const AddCourse=async({...data})=>{
        try {
            await axios.post("/api/courses",{...data})
            Swal.fire("Course Added Successfully!");
        } catch (error) {
            console.log(error)
        }
    }

    const AddRequest=async({...data})=>{
        try {
            await axios.post("/api/requests",{...data})
            Swal.fire("Request Sent Successfully!");
        } catch (error) {
            console.log(error)
        }
    }

    return <AuthContext.Provider value={{
        user,
        courses,
        requests,
        login,
        logout,
        getuser,
        getrequests,
        getcourses,
        AddCourse,
        AddRequest
    }}> {children} </AuthContext.Provider>
}
export default function useAuthContext(){
    return useContext(AuthContext);
}