import { Navigate, Outlet } from "react-router";
import useAuthContext from "../context/AuthContext";
const Authlayout = () => {
    const {user } = useAuthContext()

    return user ? <Outlet/> : <Navigate to={"/login"}/>
}
 
export default Authlayout;