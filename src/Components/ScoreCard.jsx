import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "./style/ScoreCard.css";


function ScoreCard() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }
  
  return (
    <div className='w-3/4 m-auto '>
    <div className="mt-20 ">

        
    <Slider {...settings}>
    {data.map((d) => (
      
        <div className="scoreCard  ">
          <div className="d-flex justify-content-between ">
            
              <div><p>{d.test}</p></div>
              <div><p style={{width:'50px',background:'blue',textAlign:'center',borderRadius:'10px'}}>Live</p></div>

              
            
          </div>

          <div>
            <h6>{d.session}</h6>
          </div>

          <div className="d-flex justify-content-between">
            <div>
              <img src={d.img} alt="india" style={{width:'70px'}}/>
              <p>{d.india}</p>
              <p>{d.indiaScore}</p>
              <p style={{ color: "white" }}>{d.lastline}</p>
            </div>
            <div>
              <img src={d.img2} alt="pakistan" style={{width:'70px'}}/>
              <p>{d.Pakistan}</p>
              <p>{d.PakistanBat}</p>
            </div>
          </div>

          
        </div>
      ))}
    </Slider>
    </div>
    
  </div>
   
  );
}


const data =[
  {
    test:'1st Test * India tour of Pakistan, 2024',
    live:'Live',
    session:'Day 2: 2nd Session - India trail by 360 runs',
    img:'india-flag-icon.png' ,
    india:'India',
    indiaScore:'370/7',
    img2:"pakistan-flag-icon.png",
    Pakistan:'Pakistan',
    PakistanBat:'Yet to Bet',
    lastline:'Brisbane Heat Women won by 9 wkts'
  },
   {
    test:'1st Test * India tour of Pakistan, 2024',
    live:'Live',
    session:'Day 2: 2nd Session - India trail by 360 runs',
    img:'india-flag-icon.png' ,
    india:'India',
    indiaScore:'370/7',
    img2:"pakistan-flag-icon.png",
    Pakistan:'Pakistan',
    PakistanBat:'Yet to Bet',
    lastline:'Brisbane Heat Women won by 9 wkts'
  },  {
    test:'1st Test * India tour of Pakistan, 2024',
    live:'Live',
    session:'Day 2: 2nd Session - India trail by 360 runs',
    img:'india-flag-icon.png' ,
    india:'India',
    indiaScore:'370/7',
    img2:"pakistan-flag-icon.png",
    Pakistan:'Pakistan',
    PakistanBat:'Yet to Bet',
    lastline:'Brisbane Heat Women won by 9 wkts'
  },
]

export default ScoreCard;
