import React from "react";
import {Link} from "react-router-dom";

function SubNav() {
  return (
    <
      div >
      <
      nav className = "navbar navbar-expand-lg navbar-dark" style={{backgroundColor:"#4d4d4d"}} >
      <
      div className = "container-fluid" >
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#sidebar" aria-controls="sidebar" aria-expanded="false" aria-label="Toggle navigation">
        <span className="">Trending</span>
      </button>


       <
      div className = "collapse navbar-collapse"
      id = "sidebar" >
      <
      ul className = "navbar-nav mx-auto" >
      <
      li className = "nav-item ms-5" >
      <
      a className = "nav-link"
      aria-current = "page"
      href = "#" > Bitcoin < /a> <
      /li> <
      li className = "nav-item ms-5" >
      <
      a className = "nav-link"
      href = "#" > Shiba Inu < /a> <
      /li>
      <
      li className = "nav-item ms-5" >
      <
      a className = "nav-link"
      href = "#" > Climate Change < /a> <
      /li>
      <
      li className = "nav-item ms-5" >
      <
      a className = "nav-link"
      href = "#" > Travelling < /a> <
      /li>
      <
      li className = "nav-item ms-5" >
      <
      a className = "nav-link"
      href = "#" > Solar Energy < /a> <
      /li>
       </ul> <
      /div> <
      /div>

      <
      /nav> <
      /div>

  )
}

export default SubNav;
