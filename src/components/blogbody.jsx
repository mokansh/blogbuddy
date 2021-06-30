import React from "react";
import nature from "../nature.png";
import {Link} from "react-router-dom";
import BlogBodyCard from "./blogbodycard.jsx"

function BlogBody() {
  return (
    <div>

    <div id="carouselExampleIndicators" class="carousel slide" data-bs-ride="carousel">
  <div class="carousel-indicators">
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
    <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
  </div>
  <div class="carousel-inner">
    <div class="carousel-item active">
    <div className="card border-0 container-fluid mt-4" style={{width:"83.5%", height:"25rem", backgroundImage:`url(${nature})` }}>

    <div className="card-body mt-5 text-white">
    <h6 className="card-title text-grey"><a href="#">Why Shiba Inu is getting so popular?</a></h6>
    <p>Why Shiba Inu is getting so popular? Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <Link className="btn btn-dark" to="/fullblog" >Read More...</Link>
    </div>

    </div>
    </div>
    <div class="carousel-item">
    <div className="card border-0 container-fluid mt-4" style={{width:"83.5%", height:"25rem", backgroundImage:`url(${nature})` }}>

    <div className="card-body mt-5 text-white">
    <h6 className="card-title text-grey"><a href="#">Why Shiba Inu is getting so popular?</a></h6>
    <p>Why Shiba Inu is getting so popular? Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <Link className="btn btn-dark" to="/fullblog" >Read More...</Link>
    </div>

    </div>
    </div>
    <div class="carousel-item">
    <div className="card border-0 container-fluid mt-4" style={{width:"83.5%", height:"25rem", backgroundImage:`url(${nature})` }}>

    <div className="card-body mt-5 text-white">
    <h6 className="card-title text-grey"><a href="#">Why Shiba Inu is getting so popular?</a></h6>
    <p>Why Shiba Inu is getting so popular? Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
    <Link className="btn btn-dark" to="/fullblog" >Read More...</Link>
    </div>

    </div>
    </div>
  </div>
  <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
    <span class="carousel-control-prev-icon me-4" aria-hidden="true"></span>
    <span class="visually-hidden">Previous</span>
  </button>
  <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
    <span class="carousel-control-next-icon ms-4" aria-hidden="true"></span>
    <span class="visually-hidden">Next</span>
  </button>
</div>

<div id="carouselExampleControls" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
<div class="carousel-item active">
<div className="row">
<BlogBodyCard />


</div>
</div>
<div class="carousel-item">
<div className="row">
<BlogBodyCard />



</div>
</div>
<div class="carousel-item">
<div className="row">
<BlogBodyCard />


</div>
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
<span class="carousel-control-prev-icon me-4" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
<span class="carousel-control-next-icon ms-4" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>



    </div>

  );
}

export default BlogBody;
