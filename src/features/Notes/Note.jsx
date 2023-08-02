import React, { memo } from 'react'
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { selectNoteById } from './notesApiSlice'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
//import { useGetNotesQuery } from './notesApiSlice'


const Note = ({noteId}) => {

   const note= useSelector(state=>selectNoteById(state,noteId))
    
  /*  //alternative
   const {note}=useGetNotesQuery("notesList",{
    selectFromResult:({data})=>({
        note:data?.entities[noteId]
    }),
   }) */
   
   
   const navigate=useNavigate()
    const handleEdit=()=>navigate(`${noteId}`)
  
    if(note){
        
        const created=new Date(note.createdAt).toLocaleString("en-us",{day:"numeric",month:"long"})
        const updated=new Date(note.updatedAt).toLocaleString("en-us",{day:"numeric",month:"long"})
        return (
            <tr>
            {note.completed?<td className='text-success'>Completed</td>:<td className='text-danger'>Open</td>}
            <td>{created}</td>
            <td>{updated}</td>
            <td>{note.title}</td>
            <td>{note.username}</td>
            <td>
                <button className='border-0' onClick={handleEdit} ><FontAwesomeIcon icon={faPenToSquare} /></button>
            </td>
          </tr>
        )
    }else return null
}

const memoizedNote=memo(Note)

export default memoizedNote
