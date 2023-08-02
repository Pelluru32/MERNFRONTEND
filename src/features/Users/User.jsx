import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { selectUserById, /* useGetUsersQuery */ } from './usersApilice'
import {useNavigate} from "react-router-dom"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'

const User = ({userId}) => {
    const user= useSelector(state=>selectUserById(state,userId))
    
   /*  const {user} = useGetUsersQuery("usersList",{
        selectFromResult:({data})=>({
            user:data?.entities[userId]
        })
    }) */
    
    
    const navigate=useNavigate()
    
    const handleEdit=()=>navigate(`${userId}`)
  
    if(user){
        const userRolesString=user.roles.toString().replaceAll(",",", ")
        
        return (
            <tr>
            <td>{user.username}</td>
            <td>{userRolesString}</td>
            <td>
                <button className='border-0' onClick={handleEdit} ><FontAwesomeIcon icon={faPenToSquare} /></button>
            </td>
          </tr>
        )



    }else return null
}

const memoizedUser=memo(User)

export default memoizedUser
