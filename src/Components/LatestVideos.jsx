import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Style/LatestVideos.css'

const LatestVideos = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1
  }
  return (
    <div className='w-3/4 m-auto'>
    <div className="mt-20">
        <h4 style={{color:'blue'}}>Latest Videos</h4> 
        <hr style={{color:'blue'}}/>
        
    <Slider {...settings}>
      {data.map((d) => (
        <div className='videos d-flex justify-content-between p-3'>
           
            <div className=''style={{marginTop:'180px'}}>
              <h6>{d.name}
              <p>{d.par}</p>
              </h6>
              
            </div>
            <div style={{marginTop:'190px'}}>
            <i class="fa-regular fa-square-caret-right"></i>

            </div>
        </div>
        
      ))}
    </Slider>
    <div>
      <button>View All</button>
    </div>
    </div>
    
  </div>
  )
}

const data = [
  {
    
     name:`Why franchies opt against shaw,Thakur `,
     par:`even as suryananshi creates history`,
    
  },
  {
    
    name:`Why franchies opt against shaw,Thakur `,
    par:`even as suryananshi creates history`,
   
 },
 {
    
  name:`Why franchies opt against shaw,Thakur `,
  par:`even as suryananshi creates history`,
 
},
{
    
  name:`Why franchies opt against shaw,Thakur `,
  par:`even as suryananshi creates history`,
 
},
{
    
  name:`Why franchies opt against shaw,Thakur `,
  par:`even as suryananshi creates history`,
 
},
  
];


export default LatestVideos
