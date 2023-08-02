import React, { useEffect, useState } from 'react'
import { useDeleteNoteMutation, useUpdateNoteMutation } from './notesApiSlice'
import { useNavigate } from 'react-router-dom'
import useAuth from '../../hooks/useAuth'

const EditNoteForm = ({ note, users }) => {
  const {isManager,isAdmin}=useAuth()
  const [title, setTitle] = useState(note.title)
  const [text, setText] = useState(note.text)
  const [completed, setCompleted] = useState(note.completed)
  const [user, setUser] = useState(note.user)
  const [err, setErr] = useState("")
  const [deleteNote, { isError, isSuccess, error }] = useDeleteNoteMutation()
  const [updateNote, { isError: upIsError, isSuccess: upSuccess, error: upError }] = useUpdateNoteMutation()
  const navigate = useNavigate()
  const options = users.map(user => <option key={user.id} value={user.id}>{user.username}</option>)

  useEffect(() => {
    if (isSuccess || upSuccess) {
      setCompleted(false)
      setUser("")
      setText("")
      setTitle("")
      navigate("/dash/notes")
    }
  }, [navigate, isSuccess, upSuccess])

  useEffect(() => {
    if (isError) {
      setErr(isError.data.message)
    } else if (upIsError) {
      setErr(upError.data.message)
    }
  }, [isError, upIsError, upError, error])

  const OnDeleteNote = (e) => {
    deleteNote({ id: note.id })
  }
  const upadteSubmit = (e) => {
    e.preventDefault()
    if (!user || !title || !text) {
      setErr("All fields are required front")
    } else {
      updateNote({ id: note.id, user, title, text, completed })
    }

  }
  return (
    <div className='container mt-5 mb-5'>
      <div className="card bg-info-subtle" style={{ "maxWidth": "22rem" }}>
        <div className="card-body">
          <h5 className='card-title'>Edit Note #{note.ticket}</h5>
          {err && <p className='text-danger'>{err}</p>}
          <form onSubmit={upadteSubmit}>
            <div className="mb-3">
              <label htmlFor="user" className="form-label">Assigned to:</label>
              <select className="form-select" id="roles" required value={user} onChange={(e) => setUser(e.target.value)} >
                {options}
              </select>
            </div>
            <div className="mb-3">
              <label htmlFor="title" className="form-label">title</label>
              <input type="text" className="form-control" id="title" value={title} onChange={e => setTitle(e.target.value)} />

            </div>
            <div className="mb-3">
              <label htmlFor="text" className="form-label">title</label>
              <input type="text" className="form-control" id="text" value={text} onChange={e => setText(e.target.value)} />

            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" checked={completed} onChange={() => setCompleted(prev => !prev)} id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Completed
              </label>
            </div>
            <div className='d-flex justify-content-between'>
              <button type="submit" className="btn btn-primary">Submit update</button>
             {(isAdmin||isManager)&&<button className='btn btn-warning' onClick={OnDeleteNote}> Delete</button>}
            </div>

          </form>
        </div>
      </div>
    </div>
  )
}

export default EditNoteForm
