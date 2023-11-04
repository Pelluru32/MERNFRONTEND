import {  faSquareUpRight } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link } from "react-router-dom"
import useAuth from "../hooks/useAuth"

const DashBody = () => {
  const {username,isChief_Mechanic,isAdmin}=useAuth()
  const date=new Date()
  const today= new Intl.DateTimeFormat("en-us",{dateStyle:"full",timeStyle:"full"}).format(date)


  return (
    <div className="container  ms-0">
      <h5 className="container mt-4 ms-0">Welcome {username}</h5>
      <div className="container mt-4 ms-0">{today}</div>
      {(isAdmin||isChief_Mechanic)&&<div className="container mt-3 m-3"><FontAwesomeIcon icon={faSquareUpRight} />
      <Link to={"/dash/users"}> Mechanics List</Link></div>}
      <div className="container mt-3 m-3"><FontAwesomeIcon icon={faSquareUpRight} />
      <Link to={"/dash/notes"}> Mechanics Notes </Link></div>
      {(isAdmin||isChief_Mechanic)&&<div className="container mt-3 m-3"><FontAwesomeIcon icon={faSquareUpRight} />
      <Link to={"/dash/users/new"}> Create New Mechanic</Link></div>}
      <div className="container m-3 mb-5"><FontAwesomeIcon icon={faSquareUpRight} />
      <Link to="/dash/notes/new"> Assign New Note</Link></div>

    </div>
    )
}

export default DashBody

