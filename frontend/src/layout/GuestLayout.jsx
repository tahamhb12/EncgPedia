import { Navigate, Outlet } from "react-router";
import useAuthContext from "../context/AuthContext";

const Guestlayout = () => {

    const {user } = useAuthContext()

    return !user ? <Outlet/> : <Navigate to={"/"}/>

}
export default Guestlayout;