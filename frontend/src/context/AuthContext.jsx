import {createContext,useContext,useEffect,useState } from "react";
import axios from "../axios/axios"
import { useNavigate } from "react-router-dom";

const AuthContext = createContext({});

export const AuthProvider = ({ children })=>{


    const [user,setuser] = useState(null);
    const [users,setusers] = useState([]);
    const [login_errors,setlogin_errors] = useState([]);
    const [register_errors,setRegister_errors] = useState([]);


    const navigate = useNavigate();
    const csrf =  () => axios.get("/sanctum/csrf-cookie");

    const getusers =async() =>{
        const {data} = await axios.get("/api/users")
        setusers(data)
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
            navigate("/")
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
        }
      },[])

    return <AuthContext.Provider value={{
        user,
        users,
        login,
        logout
    }}> {children} </AuthContext.Provider>
}
export default function useAuthContext(){
    return useContext(AuthContext);
}