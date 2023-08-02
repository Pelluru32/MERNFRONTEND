import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faHouse } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faTwitter, } from '@fortawesome/free-brands-svg-icons'
import { Link, NavLink } from 'react-router-dom'
const Footer = () => {
    return (
            <footer className="footer d-flex flex-wrap justify-content-between align-items-center bg-light py-2  mt-auto border-top">
                <div className="col-md-4 d-flex align-items-center ms-2">
                    <NavLink to="/" className="mb-3 me-2 mb-md-0 text-muted text-decoration-none lh-1">
                        <svg className="bi" width="30" height="24"><FontAwesomeIcon icon={faHouse} /></svg>
                    </NavLink>
                    <span className="text-muted">© 2021 Company, Inc</span>
                </div>
                <img className='rounded bg-light' src='https://tse1.mm.bing.net/th?id=OIP.NZ1WTQlk2xr8tAqmjIfcXgHaHa' alt='logo' style={{width:"24px",height:"24px"}}/>
                <ul className="nav col-md-4 justify-content-end list-unstyled d-flex me-4">
                    <li className="ms-3"><Link   className="text-muted" to="/"><svg className="bi" width="24" height="24"><FontAwesomeIcon icon={faTwitter} /></svg></Link></li>
                    <li className="ms-3"><Link className="text-muted" to="/"><svg className="bi" width="24" height="24"><FontAwesomeIcon icon={faEnvelope} /></svg></Link></li>
                    <li className="ms-3"><Link className="text-muted" to="/"><svg className="bi" width="24" height="24"><FontAwesomeIcon icon={faFacebook} /></svg></Link></li>
                </ul>
            </footer>
    )
}

export default Footer
