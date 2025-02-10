import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Style/TopStories.css'

const TopStories = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1
      }
  return (
    <div className='w-3/4 m-auto' style={{background:'white'}}>
    <div className="mt-20">
        <h4 style={{color:'blue'}}>Top Stories</h4> 
        <hr style={{color:'blue'}}/>
        
    <Slider {...settings}>
      {data.map((d) => (
        
        <div className='TopStories d-flex h-[200px] '>
            <div className=''>
              <img src={d.img} alt="" />
            </div>
            <div className='pt-2'>
              <h6>{d.name}</h6>
              <p style={{fontSize:'10px'}}>{d.lorem}</p>
              <p>{d.read}</p>

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
       img:`https://live-production.wcms.abc-cdn.net.au/57b154dc4c0bd10d176bf04ec1bfcfbf?impolicy=wcms_crop_resize&cropH=2322&cropW=3483&xPos=0&yPos=79&width=862&height=575`,
       name:`CT25:ICC meet adjourned  ;`,
       lorem:`Lorem ipsum, dolor sit amet consectetur adipisicing elit.`,
       read:`Read More -->`
    },
    {
      img:`https://live-production.wcms.abc-cdn.net.au/57b154dc4c0bd10d176bf04ec1bfcfbf?impolicy=wcms_crop_resize&cropH=2322&cropW=3483&xPos=0&yPos=79&width=862&height=575`,
      name:`CT25:ICC meet adjourned  ;`,
      lorem:`Lorem ipsum, dolor sit amet consectetur adipisicing elit.`,
      read:`Read More -->`
   },
   {
    img:`https://live-production.wcms.abc-cdn.net.au/57b154dc4c0bd10d176bf04ec1bfcfbf?impolicy=wcms_crop_resize&cropH=2322&cropW=3483&xPos=0&yPos=79&width=862&height=575`,
    name:`CT25:ICC meet adjourned  ;`,
    lorem:`Lorem ipsum, dolor sit amet consectetur adipisicing elit.`,
    read:`Read More -->`
 },
 {
  img:`https://live-production.wcms.abc-cdn.net.au/57b154dc4c0bd10d176bf04ec1bfcfbf?impolicy=wcms_crop_resize&cropH=2322&cropW=3483&xPos=0&yPos=79&width=862&height=575`,
  name:`CT25:ICC meet adjourned  ;`,
  lorem:`Lorem ipsum, dolor sit amet consectetur adipisicing elit.`,
  read:`Read More -->`
},
    
      {
        img:`https://live-production.wcms.abc-cdn.net.au/57b154dc4c0bd10d176bf04ec1bfcfbf?impolicy=wcms_crop_resize&cropH=2322&cropW=3483&xPos=0&yPos=79&width=862&height=575`,
        name:`CT25:ICC meet adjourned  ;`,
        lorem:`Lorem ipsum, dolor sit amet consectetur adipisicing elit.`,
        read:`Read More -->`
     },
    
  ];

export default TopStories
