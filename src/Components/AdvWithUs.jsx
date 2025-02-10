import React from 'react'
import './style/AdvWithUs.css'

const AdvWithUs = () => {
  return (
    <div className='AdvWith d-flex justify-content-centen alignn-items-center  p-5 '>

      <div className=' pl-4' style={{width:"50%"}}>
        <h3 style={{color:"blue"}}>Advertise With us</h3>
        <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Repudiandae nisi quisquam magnam voluptas tempore et quidem inventore quia velit non accusamus eos libero facere numquam assumenda animi reprehenderit, cum rerum natus quod architecto expedita eum laborum! Odio aliquid magnam labore!</p>
       <p style={{background:'blue',color:'white',width:'150px',height:'50px',textAlign:'center',paddingTop:'10px',borderRadius:'20px'}}>Contact Now</p>
      </div>

      <div className="socialImage mx-5" style={{color:"blue",width:"50%"}}/>
      </div>

    
  )
}

export default AdvWithUs
