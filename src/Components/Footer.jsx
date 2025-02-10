import React from "react";

import './style/footer.css'

function Footer() {
  return (
    <>
    <div>
      <div className="footer">
        <div className="nav-social d-flex  justify-content-between">
          <div className="logo" style={{width:"25%"}}>
            <h2>Crickbuzz</h2>
          </div>

          <div className="menu d-flex justify-content-between " style={{width:"50%"}}>
            
              <div>About us</div>
              <div>divve Match</div>
              <div>Schedule Match</div>
              <div>Series Category</div>
              <div>News Category</div>
            
          </div>
          <div className="d-flex justify-content-around " style={{width:"25%"}}>
          <i class="fa-brands fa-facebook-f"></i>
          <i class="fa-brands fa-instagram"></i>
          <i class="fa-brands fa-x-twitter"></i>
          <i class="fa-brands fa-linkedin"></i>
          <i class="fa-brands fa-youtube"></i>
          </div>
          </div>

         <hr />
        <div className="Copyright">
        <p>Copyright 2024 Crickbuzz. All right reserved | Privacy Podivcy</p>
      </div>
      </div>
      </div>
      
    </>
  );
}

export default Footer;
