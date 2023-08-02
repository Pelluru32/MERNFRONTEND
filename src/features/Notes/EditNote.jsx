import React from 'react'
import { useSelector } from 'react-redux'
import { useParams } from 'react-router-dom'
import { selectNoteById } from './notesApiSlice'
import EditNoteForm from './EditNoteForm'
import { selectAllUsers } from '../Users/usersApilice'

const EditNotes = () => {
  const {id} = useParams()
  const note = useSelector(state=>selectNoteById(state,id))
  const users = useSelector(selectAllUsers)
  const content=note?<EditNoteForm note={note} users={users}/>:<p>Loading......</p>

  return content
}

export default EditNotes
