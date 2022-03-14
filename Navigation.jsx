import React from "react";
const Navbar = () => {
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark py-5 shadow-sm">
        <div className="container">
          <a className="navbar-brand fw-bold fs-1" href="#">RDR FOOD DELIVERY</a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mx-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Hotels</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Contact</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
            </ul>
           <div className="buttons">
              <a href="" className="btn btn-outline-light">
              <i className="fa fa-cutlery me1 "></i> Add Restaurant</a>
                <a href="" className="btn btn-outline-light ms-2">
                <i className="fa fa-sign-in me1 "></i> Login</a>
                <a href="" className="btn btn-outline-light ms-2">
                <i className="fa fa-user-plus me1 "></i> Sign-up</a>
                <a href="" className="btn btn-outline-light ms-2">
                <i className="fa fa-map-marker  me1 "></i> Location</a>
             </div>
            
          </div>
        </div>
      </nav>
    </div>
  )
}
export default Navbar;