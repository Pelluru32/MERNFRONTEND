import React, { useEffect, useState } from 'react'
import { useAddNewNoteMutation } from './notesApiSlice'
import { useNavigate } from 'react-router-dom'

const NewNoteForm = ({ users }) => {
    const [addNewNote,{isError,isSuccess,error}]=useAddNewNoteMutation()
    const [user, setUser] = useState(users[0].id)
    const [title, setTitle] = useState("")
    const [text, setText] = useState("")
    const [err, setErr] = useState("")
    const navigate=useNavigate()
    const options =users.map(user=><option key={user.id} value={user.id}>{user.username}</option>)
    useEffect(()=>{
        if(isSuccess){
            setText("")
            setTitle("")
            setUser("")
            navigate("/dash/notes")
        }
    },[isSuccess,navigate])

    useEffect(()=>{
        if(isError){
            setErr(error.data.message)
        }
    },[isError,error])
    const FormSubmit = (e) => {
        e.preventDefault()
        if(!user || ! title || !text){
            setErr("All fields are required")
        }else{
            addNewNote({user,title,text})
        }

    }
    return (
        <div className='container mt-5 mb-5 fs-6' >
            <div className="card bg-success-subtle" style={{ "maxWidth": "30rem" }}>
                <div className="card-body">
                    <h5 className='card-title'>New Note Form</h5>
                    {err && <p className='text-danger'>{err}</p>}
                    <form onSubmit={FormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="roles" className="form-label">Assigned to:</label>
                            <select className="form-select" id="roles" required value={user} onChange={(e)=>setUser(e.target.value)} >
                                {options}
                            </select> 
                            </div>

                        <div className="mb-3">
                            <label htmlFor="title" className="form-label">title</label>
                            <input type='text' className="form-control" value={title} onChange={(e) => setTitle(e.target.value)} id="title" required />
                        </div>
                        <div className=" mb-3">
                            <label htmlFor="text">Text</label>
                            <textarea className="form-control" row="3" id="text" value={text} onChange={(e) => setText(e.target.value)}></textarea>
                        </div>
                        <div className="mb-3">
                            <button className="btn btn-primary btn-sm" type="submit" >Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default NewNoteForm
