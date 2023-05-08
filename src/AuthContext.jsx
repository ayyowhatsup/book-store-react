import { createContext, useEffect, useState } from "react";
import{getUserInfo, logInWithEmailAndPassword, signUpWithCredentials} from './endpoints'
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext()

export default function AuthProvider({children}){

    const navigate = useNavigate();
    const [isLoading, setIsLoading] = useState(false)
    const [user, setUser] = useState();

    const signIn = async(email, password, callback) => {
        setIsLoading(true)
        const res = await logInWithEmailAndPassword(email, password)
        setIsLoading(false)
        if(res.ok){
            toast.success('Đăng nhập thành công!')
            const data = await res.json()
            setUser(data)
            localStorage.setItem('token', data.token)
            callback()
        }else{
            const data = await res.json()
            toast.error(data[Object.keys(data)[0]][0])
        }

    }
    const signUp = async(credentials) => {
        const res = await signUpWithCredentials(credentials)
        if(res.ok){
            const data = await res.json()
            toast.success("Đăng ký thành công!")
            navigate("/login")
        }else{
            const data = await res.json()
            toast.error(data[Object.keys(data)[0]][0])
        }
    }
    const signOut = () => {
        setUser(undefined)
        localStorage.removeItem('token')
    }
    
    useEffect(() => {
        const token = localStorage.getItem('token')   
        if(token){
            getUserInfo(token).then(data => {
                if(data?.email){
                    setUser({...data, token: token})
                }
            })
        }
    }, [])

    const token = localStorage.getItem('token') 
    
    return (
        <AuthContext.Provider value={{user , signIn, signOut, signUp, setUser, isLoading, setIsLoading}}>
            {children}
        </AuthContext.Provider>
    )
}