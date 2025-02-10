import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Style/MatchInfo.css'

const MatchInfo = () => {
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
        <h4 style={{color:'blue'}}>Match Info</h4> 
        <hr style={{color:'blue',width:'50vw'}}/>
        
    <Slider {...settings}>
      {data.map((d) => (
       <div className='Info'>

        <div>
            <img src={d.img} alt="" style={{width:'100%',height:'200px'}}/>
        </div>
        <div>
            <h5>{d.name}</h5>
        </div>
        <div>
           <p>{d.par}</p>
        </div>

        <div className='' >
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
      img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR21tBUBafm7I3B_ocBpbDIOZ-sj29VXYSexSr0P8QEAUWTSEEbLhkCy-taiU4Y4QZuSv0&usqp=CAU`,
      name:`ITL20 2025to beigin on january 11 ami jam - packet schedule `,
       par:` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos dignissimos dolor magni omnis nobis animi molestiae recusandae. `,
       read:`Read More -->`
      
    },
    {
        img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR21tBUBafm7I3B_ocBpbDIOZ-sj29VXYSexSr0P8QEAUWTSEEbLhkCy-taiU4Y4QZuSv0&usqp=CAU`,
        name:`ITL20 2025to beigin on january 11 ami jam - packet schedule `,
         par:` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos dignissimos dolor magni omnis nobis animi molestiae recusandae. `,
         read:`Read More -->`
        
      },
      {
        img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR21tBUBafm7I3B_ocBpbDIOZ-sj29VXYSexSr0P8QEAUWTSEEbLhkCy-taiU4Y4QZuSv0&usqp=CAU`,
        name:`ITL20 2025to beigin on january 11 ami jam - packet schedule `,
         par:` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos dignissimos dolor magni omnis nobis animi molestiae recusandae. `,
         read:`Read More -->`
        
      },
      {
        img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR21tBUBafm7I3B_ocBpbDIOZ-sj29VXYSexSr0P8QEAUWTSEEbLhkCy-taiU4Y4QZuSv0&usqp=CAU`,
        name:`ITL20 2025to beigin on january 11 ami jam - packet schedule `,
         par:` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos dignissimos dolor magni omnis nobis animi molestiae recusandae. `,
         read:`Read More -->`
        
      },
      {
        img:`https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR21tBUBafm7I3B_ocBpbDIOZ-sj29VXYSexSr0P8QEAUWTSEEbLhkCy-taiU4Y4QZuSv0&usqp=CAU`,
        name:`ITL20 2025to beigin on january 11 ami jam - packet schedule `,
         par:` Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quos dignissimos dolor magni omnis nobis animi molestiae recusandae. `,
         read:`Read More -->`
        
      },
    
  ];
  

export default MatchInfo
