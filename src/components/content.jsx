import React from "react";
import {Link} from "react-router-dom";

function SubNav() {
  return (
    <
      div className="subnav" >

      <ul className="nav" style={{backgroundColor:"#4d4d4d"}}>
        <li className="nav-item mx-auto"><a className="nav-link p-2" aria-current="page" href="#">Bitcoin</a></li>
        <li className="nav-item mx-auto"><a className="nav-link p-2" href="#">SHIBA INU</a></li>
        <li className="nav-item mx-auto"><a className="nav-link p-2" href="#">Travelling</a></li>
        <li className="nav-item mx-auto"><a className="nav-link p-2" href="#">Travelling</a></li>
        <li className="nav-item mx-auto"><a className="nav-link p-2" href="#">Travelling</a></li>

      </ul>

       <
      /div>

  )
}

export default SubNav;
