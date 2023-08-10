import React, { useEffect, useState } from 'react'
import { Roles } from '../../config/Roles'
import { useDeleteUserMutation, useUpdateUserMutation } from './usersApilice'
import { useNavigate } from 'react-router-dom'


const UN_REGEX = /^[A-Z]{4,10}$/
const PWD_REGEX = /^[a-zA-Z0-9$!@#%&*]{4,10}$/

const EditUserForm = ({ user }) => {
  const [deleteUser, {isSuccess: isDelSuccess}] = useDeleteUserMutation()
  const [updateUser, { isSuccess}] = useUpdateUserMutation()
  
  const [username, setUsername] = useState(user.username)
  const [password, setPassword] = useState("")
  const [roles, setroles] = useState(user.roles)
  const [active, setActive] = useState(user.active)
  const [c_pwd, setc_pwd] = useState(false)
  const [err,setErr]=useState("")
  const navigate=useNavigate()


  const options = Object.values(Roles).map(role => {
    return <option key={role} value={role}>{role}</option>
  })

  const handleSelectChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, (options) => options.value)
    setroles(selectedOptions)
  }
  const OnDeleteUser=()=>{
    deleteUser({id:user.id})
  }

  useEffect(()=>{
    if(isDelSuccess || isSuccess) {
      setUsername('')
            setPassword('')
            setroles([])
      navigate("/dash/users")}

},[isDelSuccess,navigate,isSuccess])


  const upadteSubmit = (e) => {
    e.preventDefault()
        const validU=UN_REGEX.test(username)
        const validP=PWD_REGEX.test(password)
        if(password && validP){
          updateUser({id:user.id,username,password,roles,active})
        }else if(password && !validP){
          setErr("Password characters doesnot match")
        }else if(!validU){
          setErr("username characters doesn't match")
        }else{
          updateUser({id:user.id,username,roles,active})
        }
    
  }
  return (
    <div className='container mt-5 mb-5'>
      <div className="card bg-info-subtle" style={{ "maxWidth": "22rem" }}>
        <div className="card-body">
          <h5 className='card-title'>Edit User Form</h5>
          {err && <p className='text-danger'>{err}</p>}
          <form onSubmit={upadteSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Email address</label>
              <input type="text" className="form-control" id="username" value={username} onChange={(e) => setUsername(e.target.value)} />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <div className="input-group mb-3">
                <button className="btn btn-outline-primary btn-sm" onClick={() => setc_pwd(prev => !prev)}>Change Pwd</button>
                <input type="password" className="form-control" placeholder='Type New Pwd' id="password" value={password} onChange={e => setPassword(e.target.value)} disabled={!c_pwd} />
              </div>
            </div>
            <div className="mb-3">
              <label htmlFor="roles" className="form-label">Roles</label>
              <select className="form-select " id="roles" required value={roles} onChange={handleSelectChange} multiple={true}>
                {options}
              </select>
            </div>
            <div className="form-check mb-3">
              <input className="form-check-input" type="checkbox" value={active} onChange={()=>setActive(prev=>!prev)} id="flexCheckChecked" />
              <label className="form-check-label" htmlFor="flexCheckChecked">
                Not Active
              </label>
            </div>
             <div className='d-flex justify-content-between'>
             <button type="submit" className="btn btn-primary">Submit update</button>
             <button className='btn btn-warning' onClick={OnDeleteUser}> Delete</button>
             </div>
            
          </form>
        </div>
      </div>
    </div>
  )
}

export default EditUserForm
