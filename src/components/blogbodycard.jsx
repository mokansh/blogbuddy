import React from "react";
import mountains from "../mountains.png";

function BlogBodyCard() {
  return (
    <div className="mt-4 mb-4">
    <div className="card border-0 mx-auto" style={{width: "60%", backgroundImage:`url(${mountains})`}}>

    <div className="card-body text-white">
    <h6 className="card-title">Why Shiba Inu is getting so popular?</h6>
    <p className="card-text">Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standar.</p>
    <a className="btn btn-dark" href="#" >Read More...</a>
    </div>
    </div>
    </div>

  )
}

export default BlogBodyCard;
