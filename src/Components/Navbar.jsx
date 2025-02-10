import React from "react";
import "./Style/Navbar.css";

const Navbar = () => {
  return (
    <div>
    <div className="navbar" >
      <div className="d-flex  justify-content-center " style={{width:"25%",fontSize:"30px"}}>
        <div className=""> Crickbuzz</div>
      </div>

      <div className="d-flex justify-content-between" style={{width:"50%"}}>
      <div> Live Score</div>
      <div>Schedule Match</div>
      <div>News <span><i class="fa-solid fa-chevron-down"></i></span></div>
      <div> Series <span><i class="fa-solid fa-chevron-down"></i></span></div>
      <div>Teams <span><i class="fa-solid fa-chevron-down"></i></span></div>
      </div>

      <div className="d-flex justify-content-around" style={{width:"25%"}}>
      <div><i class="fa-solid fa-magnifying-glass" style={{fontSize:"20px"}}></i></div>
      <div>EN<span><i class="fa-solid fa-chevron-down"></i></span></div>
      <div><i class="fa-solid fa-bars" style={{fontSize:"20px"}}></i></div>
      </div>
              
    </div>
    </div>
  );
};

export default Navbar;
