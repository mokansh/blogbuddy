import React from "react";

function Footer() {
  return (
    <div className="footer">

    <div className="text-center p-2">
    <a href="https://www.google.com"><i className="fab fa-facebook ms-5 mt-4 text-white"></i></a>
    <a href="https://www.google.com"><i className="fab fa-instagram ms-5 mt-4 text-white"></i></a>
    <a href="https://www.google.com"><i className="fab fa-twitter ms-5 mt-4 text-white"></i></a>
    <a href="https://www.google.com"><i className="fab fa-pinterest ms-5 mt-4 text-white"></i></a>
    </div>

    <div className="ms-5 mt-1">
    <h5 className="text-center">Website in Development Mode</h5>
    <p className="text-center mb-5">Akash Mishra &copy; 2021</p>
    </div>

    </div>
  )
}

export default Footer;
