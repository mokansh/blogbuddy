import React from "react";
import {Link} from "react-router-dom";

function Header() {
  return (
    <
      div >
      <
      nav className = "navbar navbar-expand-lg navbar-dark p-2" style={{backgroundColor:"#191919"}} >
      <
      div className = "container-fluid" >
      <
      Link className = "navbar-brand text-uppercase fs-3 mx-md-5"
      to = "/" > BlogBuddy < /Link>

      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

       <
      div className = "collapse navbar-collapse"
      id = "navbarNav" >
      <
      ul className = "navbar-nav ms-auto" >
      <
      li className = "nav-item ms-5" >
      <
      a className = "nav-link"
      aria-current = "page"
      href = "#" > Cryptocurrency < /a> <
      /li> <
      li className = "nav-item ms-5" >
      <
      a className = "nav-link"
      href = "#" > Environment < /a> <
      /li> <
      li className = "nav-item ms-5" >
      <
      a className = "nav-link"
      href = "#" >THC+CBD< /a> <
      /li> <
      li className = "nav-item ms-5" >
      <
      a className = "nav-link"
      href = "#" > Solar Energy < /a> <
      /li>
      <
      li className = "nav-item ms-5" >
      <
      Link className = "nav-link"
      to = "/about" > About Us < /Link> <
      /li> <
      /ul> <
      /div> <
      /div>

      <
      /nav> <
      /div>

  )
}

export default Header;
