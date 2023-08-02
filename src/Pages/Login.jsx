import { useNavigate } from 'react-router-dom'
import { useLoginMutation } from '../features/Auth/authApiSlice'
import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { setCredentials } from '../features/Auth/authSlice'
import usePersist from '../hooks/usePersist'

const Login = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const [persist, setPersist] = usePersist()
  const [err, setErr] = useState("")
  const [login] = useLoginMutation()
  const navigate = useNavigate()
  const dispatch = useDispatch()


  useEffect(() => { setErr("") }, [username, password])

  const loginSubmit = async (e) => {
    e.preventDefault()
    try {
      const { accessToken } = await login({ username, password }).unwrap()
      await dispatch(setCredentials({ accessToken }))
      setUsername("")
      setPassword("")
      navigate("/dash")
    } catch (error) {
      if (!error.status) {
        setErr("No Server Response")
      } else if (error.status === 400) {
        setErr("Missing Username or Password")
      } else if (error.status === 401) {
        setErr("Unauthorized")
      } else {
        setErr(error.data?.message);
      }
    }
  }

  return (
    <div className='container mt-5 mb-3'>
      <div className="card bg-warning-subtle" style={{ "maxWidth": "18rem" }}>
        <div className="card-body">
          <h5 className='card-title'>Login Form</h5>
          {err && <p className='text-danger'>{err}</p>}

          <form onSubmit={loginSubmit}>
            <div className="mb-3">
              <label htmlFor="username" className="form-label">Username</label>
              <input type="text" className="form-control" value={username} onChange={e => setUsername(e.target.value)} id="username" required autoComplete='off' />
            </div>
            <div className="mb-3">
              <label htmlFor="password" className="form-label">Password</label>
              <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} id="password" required />
            </div>
            <button type="submit" className="btn btn-secondary">Sign In</button>
            <div className="form-check form-switch">
              <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckChecked" checked={persist} onChange={()=>setPersist(prev=>!prev)} />
              <label className="form-check-label" htmlFor="flexSwitchCheckChecked">Trust this device</label>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login
