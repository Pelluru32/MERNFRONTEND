import React, { useEffect, useState } from 'react'
import { Roles } from '../../config/Roles'
import {useAddNewUserMutation} from "./usersApilice"
import {useNavigate} from "react-router-dom"



const UN_REGEX = /^[A-Z]{4,10}$/
const PWD_REGEX = /^[a-zA-Z0-9$!@#%&*]{4,10}$/

const NewUserForm = () => {
    const [addNewUser, {isLoading,isSuccess,isError,error }] = useAddNewUserMutation()

    const navigate=useNavigate()

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [validUN, setValidUN] = useState(false)
    const [roles, setRoles] = useState(["Mechanic"])
    const [validPWD,setValidPWD]=useState(false)
    const [err,setErr]=useState("")

    const handleSelectChange = (event) => {
        // Get the selected options from the event object
        const selectedOptions = Array.from(event.target.selectedOptions, (option) => option.value);
        setRoles(selectedOptions);
    };
    useEffect(()=>{
        if(isSuccess){
            setUsername("")
            setPassword("")
            setRoles([])
            navigate("/dash/users")
        }
        if(isError){
            setErr(error.data.message);
        }
    },[isSuccess,navigate,isError,error])

    const options = Object.values(Roles).map(role =>
        <option key={role} value={role}>{role}</option>)

    const FormSubmit = (e) => {
        e.preventDefault()
        if(!username || !password){
            setErr("All fields are required")
        }else{
            const validU=UN_REGEX.test(username)
            const validP=PWD_REGEX.test(password)
            if(!validU) setValidUN(true); else setValidUN(false)
            if(!validP) setValidPWD(true); else setValidPWD(false)
            if(validP&&validU&&roles.length && !isLoading){
                addNewUser({username,password,roles})
                setUsername("")
                setPassword("")
            }
        }
    }
    

    return (
        <div className='container mt-5 mb-5 fs-6' >
            <div className="card bg-info-subtle" style={{ "maxWidth": "18rem" }}>
                <div className="card-body">
                    <h5 className='card-title'>User Form</h5>
                    {err && <p className='text-danger'>{err}</p>}
                    <form  onSubmit={FormSubmit}>
                        <div className="mb-3">
                            <label htmlFor="username" className="form-label">User Name</label>
                            <input type='text' className="form-control" id="username" value={username} onChange={e => {setUsername(e.target.value);setErr("")}} autoComplete='off' required />
                             { validUN?<div className="form-text text-danger"> * Invalid username </div>:<div className='form-text'> username Min 4 characters and all are capitals</div>}
                        </div>

                        <div className="mb-3">
                            <label htmlFor="password" className="form-label">Password</label>
                            <input type='password' className="form-control" id="password" value={password} onChange={e => setPassword(e.target.value)} required />
                            { validPWD ?<div className="form-text text-danger"> * Invalid Password </div>:<div className='form-text'> Pwd min 4 char</div>}
                        </div>

                        <div className="mb-3">
                        <label htmlFor="roles" className="form-label">Roles</label>
                            <select className="form-select" id="roles" required value={roles} onChange={handleSelectChange} multiple={true}>
                                {options}
                            </select>
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

export default NewUserForm
