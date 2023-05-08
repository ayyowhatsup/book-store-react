import { useContext } from "react";
import { AuthContext } from "../AuthContext";
import { Navigate, Outlet } from "react-router-dom";

export default function AdminRoute(){
    
    const { user } = useContext(AuthContext)
    console.log(user);
    return (
        user?.is_admin ? <Outlet/> : <Navigate to={"/404"}/>
    )
}