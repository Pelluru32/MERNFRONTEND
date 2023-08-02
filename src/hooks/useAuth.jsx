import { useSelector } from "react-redux"
import jwt_decode from "jwt-decode";

const useAuth = () => {
    const token=useSelector(state=>state.auth.token)
    let isManager=false;
    let isAdmin=false
    let status = "Employee"
    if(token){
        const decoded =jwt_decode(token)
        const {username,roles}=decoded.userInfo
        isAdmin=roles.includes("Admin")
        isManager=roles.includes("Manager")

        if(isManager)  status ="Manager"
        if(isAdmin)  status ="Admin"
        
        return {username,roles,status,isAdmin,isManager}
    }
    
  return {username:"",roles:[],isManager,isAdmin,status}

}

export default useAuth
