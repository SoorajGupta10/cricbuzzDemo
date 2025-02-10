import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './style/QuickLinks.css'
import TopStories from './TopStories';
function QuickLinks() {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: -1,
        slidesToScroll: 0
      }
  return (
    <div>
    <div className='QuickLink d-flex '>
        <h4 style={{width:'25%',textAlign:'center',background:'white',color:'blue',paddingTop:'15px'}}>Quick Links</h4>

        <Slider {...settings}>
            <div style={{width:'75%'}}>
        <div className='d-flex justify-content-around'>
        
                    <div className='rouded-xl'>
                     
                    <p className='Quick'><i class="fa-solid fa-newspaper"></i>
                        News</p>
                    </div>
                    <div className='rouded-xl'>
                     
                    <p className='Quick'><i class="fa-solid fa-trophy"></i>
                        BGT 2024-25</p>
                    </div>
                
                    <div className='rouded-xl'>
                     
                     <p className='Quick'><i class="fa-solid fa-people-group"></i>
                         Team India</p>
                     </div>
                     <div className='rouded-xl'>
                     
                    <p className='Quick'><i class="fa-solid fa-trophy"></i>
                        Fantasy Handbook</p>
                    </div>

                    <div className='rouded-xl'>
                     
                     <p className='Quick'><i class="fa-solid fa-comments-dollar"></i>
                         See Plans</p>
                     </div>

                     <div className='rouded-xl'>
                     
                     <p className='Quick'><i class="fa-solid fa-comments-dollar"></i>
                         CB Plus & Times Prime</p>
                     </div>
                    
          
            <div>
                
            
            </div>
            </div>
        </div>
       </Slider>
       </div>
   
<div style={{position:'relative',bottom:'100px'}}><TopStories /></div>
    
    </div>
  )
}



export default QuickLinks