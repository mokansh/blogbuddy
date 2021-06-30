import React from "react";

import {Link} from "react-router-dom";

function About() {
  return (
    <div className="">

    <div className="mx-5 my-5">
    <h4 className="">Hello, I'm Akash Mishra.</h4>
    <p>I am a Web Developer. Experienced in HTML, CSS, Javascript, NODEJS, MONGODB and REACTJS.</p>
    <Link className="btn btn-dark" to="/">Home</Link>
    </div>
    </div>
  );
}

export default About;
