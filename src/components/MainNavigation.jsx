import { NavLink} from "react-router-dom"

const MainNavigation = () => {
    return (
        <div className="container mb-5">
            < nav className="navbar navbar-expand-lg bg-secondary fixed-top fs-6" >
                <div className="container ms-0">
                    <button className="navbar-toggler " type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbarExample-expand-lg" aria-controls="offcanvasNavbarExample-expand-lg">
                        <span className="navbar-toggler-icon" data-bs-target="#offcanvasNavbarExample-expand-lg"></span>
                    </button>
                    <div className="offcanvas offcanvas-start " data-bs-hideresize="true" tabIndex="-1" id="offcanvasNavbarExample-expand-lg" aria-labelledby="offcanvasNavbarExample-expand-lgLabel" style={{maxWidth:"200px"}}  aria-hidden="true">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasLabel">Navigation</h5>
                            <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body bg-secondary">
                            <ul className="navbar-nav">
                                <li className="nav-item">
                                    <NavLink className="nav-link "  to="/">Home</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/login">Login</NavLink>
                                </li>
                                <li className="nav-item">
                                    <NavLink className="nav-link" to="/dash">DashBoard</NavLink>
                                </li>
                                
                            </ul>

                        </div>
                    </div>
                </div>
            </nav >

        </div>
    )
}

export default MainNavigation


