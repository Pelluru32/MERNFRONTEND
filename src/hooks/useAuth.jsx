import { useSelector } from "react-redux"
import jwt_decode from "jwt-decode";

const useAuth = () => {
    const token=useSelector(state=>state.auth.token)
    let isSenior_Mechanic=false;
    let isAdmin=false
    let isChief_Mechanic=false
    let isSupervisor=false
    let status = "Mechanic"
    if(token){
        const decoded =jwt_decode(token)
        const {username,roles}=decoded.userInfo
        isAdmin=roles.includes("Admin")
        isSenior_Mechanic=roles.includes("Senior_Mechanic")
        isChief_Mechanic=roles.includes("Chief_Mechanic")
        isSupervisor=roles.includes("Supervisor")

        if(isSenior_Mechanic)  status ="Senior_Mechanic"
        if(isChief_Mechanic)  status ="Chief_Mechanic"
        if(isSupervisor)  status ="Supervisor"
        if(isAdmin)  status ="Admin"
        return {username,roles,status,isAdmin,isSenior_Mechanic,isSupervisor,isChief_Mechanic}
    }
    
  return {username:"",roles:[],isSenior_Mechanic,isAdmin,status,isSupervisor,isChief_Mechanic}

}

export default useAuth
