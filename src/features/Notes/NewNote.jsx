import { useSelector } from "react-redux"
//import { useGetUsersQuery } from "../Users/usersApilice"
import NewNoteForm from "./NewNoteForm"
import {  selectAllUsers/* , selectUserById, useGetUsersQuery  */} from "../Users/usersApilice"


const NewNote = () => {
  const users=useSelector(state=>selectAllUsers(state))
  /* const {data}=useGetUsersQuery()
  const users=Object.values(data?.entities) */
  /* const  {users}=useGetUsersQuery("usersList",{
    selectFromResult:({data})=>{
      users:data?.ids.map(id=>data?.entities[id])
    }
  }) */
  const content  = users.length?<NewNoteForm users={users}/>:<p>NOt currently Available</p>

  return content

}

export default NewNote
