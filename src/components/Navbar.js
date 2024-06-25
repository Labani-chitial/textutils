import React from "react";
import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <nav className={`navbar navbar-expand-lg  navbar-${props.mode} bg-${props.mode}`}>
      <div className="container-fluid">
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarTogglerDemo01" aria-controls="navbarTogglerDemo01" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarTogglerDemo01">
          <Link className="navbar-brand" to="/">{props.title}</Link>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link className="nav-link active" aria-current="page" to="/">Home</Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/about">About Us</Link>
            </li>
          </ul>
          <div>
            <div className="nav-primary roundd mx-2" onClick={props.toggleMode} style={{height: "30px", width: "30px"}}></div>
          </div>
          <div className={`form-check form-switch text-${props.mode === "light" ? "grey" : "light"} mx-3`}>
            <input className="form-check-input" type="checkbox" role="switch" id="flexSwitchCheckDefault" onClick={props.toggleMode}/>
            <label className="form-check-label" htmlFor="flexSwitchCheckDefault" >Enable Dark Mode</label>
          </div>
        </div>
      </div>
    </nav>
  )
}

Navbar.propTypes = {
  title: propTypes.string.isRequired,
  aboutText: propTypes.string.isRequired,
  homeText: propTypes.string.isRequired
}

Navbar.defaultProps = {
  title: "set title here",
  aboutText: "set about here",
  homeText: "set home here"
};


export default Navbar;