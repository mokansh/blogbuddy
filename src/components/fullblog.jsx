import React from "react";
import shiba from "../shiba.png";


function FullBlog() {
  return (
    <div className="">

    <div className="card border-0" style={{width: "60%"}}>
    <img className="mx-auto" style={{height:"100px", width:"100px"}} src={shiba} alt="shib" />
    <div className="card-body ms-4">
    <h6 className="card-title">Why Shiba Inu is getting so popular?</h6>
    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar.</p>
    </div>
    </div>
    </div>
  )
}

export default FullBlog;
