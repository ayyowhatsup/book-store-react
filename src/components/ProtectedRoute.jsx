import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function ProtectedRoute(){
    
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        user?.token ? <Outlet/> : <Navigate to={"/login"}/>
    )
}