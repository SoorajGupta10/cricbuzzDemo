import React from 'react'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import './Style/TopTeam.css'
import Footer from './Footer';

const TopTeam = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: -1,
        slidesToScroll: 0
      }
  return (
    <div>
    <div className='Topteam '>

        <h3 style={{color:"blue"}}>Top Teams</h3>
        <hr style={{color:"blue"}} />

        <Slider {...settings}>
        <div className='d-flex justify-content-around'>
            <div>
                <img src="https://th.bing.com/th/id/R.5cc4ac7b29bb4e307fa82bdd034efd94?rik=TNQsm4IqpqeMdw&riu=http%3a%2f%2fclipart-library.com%2fimage_gallery%2fn831104.png&ehk=qyGVZhXl9NXxbFUqPtxVgnlcxCnUJwxSj6ogotrvuAg%3d&risl=&pid=ImgRaw&r=0" alt="" className='Arrow mt-4'/>
            </div>
            {data.map((d) => (
                <div className='bg-white '>
                    <div className='rouded-xl'>
                        <img src={d.img} alt="" className='flag'/>
                    </div>
                    <div className='justify-content-center text-center'>
                        <p>{d.name}</p>
                    </div>
                </div>
            ))}
            <div>
                
            <div>
                <img src="https://www.pngmart.com/files/15/Arrow-PNG-Clipart.png" alt="" className='Arrow mt-4'/>
            </div>
            </div>

        </div>
       </Slider>
       </div>
       <div style={{position:'relative',bottom:'150px'}}><Footer /></div>
    </div>
  )
}

const data =[
    {
        img:'https://th.bing.com/th/id/R.607b9f69862d76af04b474113c0c7ff5?rik=lfnOsbv7mhDNbQ&riu=http%3a%2f%2fupload.wikimedia.org%2fwikipedia%2fcommons%2fb%2fbc%2fFlag_of_India.png&ehk=Pk5lH0C%2fhstFahWfb15vLjtrJb3DslIU4%2fAQneo9IIM%3d&risl=&pid=ImgRaw&r=0' ,
        name:'India'
    },
    {
        img:'https://cdn.britannica.com/33/4833-004-828A9A84/Flag-United-States-of-America.jpg' ,
        name:'United States'
    },
    {
        img:'https://th.bing.com/th/id/OIP.es6fxUyT2lrn6Von-_dzAgHaE8?rs=1&pid=ImgDetMain' ,
        name:'Australia'
    },
    {
        img:'https://th.bing.com/th/id/OIP.hrzDVHb2bjJnTiw2zYAzcAHaE8?w=1181&h=788&rs=1&pid=ImgDetMain' ,
        name:'England'
    },
    {
        img:'https://th.bing.com/th/id/OIP.-2kdKy1nPETRjGAYSga55wHaE8?rs=1&pid=ImgDetMain' ,
       name:'New Zealand'
    },
    {
        img:'https://th.bing.com/th/id/R.2b85df47260d9e5c2c47dfaa744fa5ad?rik=EajTbUppeU1tRw&riu=http%3a%2f%2fexploringafrica.matrix.msu.edu%2fwp-content%2fuploads%2f2016%2f04%2fSouth-Africa-Flag.png&ehk=ogS13e30Y0oEfBWqlc2yLpenGzWHUJfRgrz05Z0AZq8%3d&risl=&pid=ImgRaw&r=0' ,
        name:'South Africa'
    },
    {
        img:'https://static.vecteezy.com/system/resources/previews/000/409/674/original/illustration-of-pakistan-flag-vector.jpg' ,
        name:'Pakistan'
    },
    {
        img:'https://th.bing.com/th/id/OIP.ays982aFbtrTVxFhxMWs5gHaE7?rs=1&pid=ImgDetMain' ,
       name:'Sri Lanka'
    },
    {
        img:'https://www.theflagman.co.uk/wp-content/uploads/2016/09/flag-of-bangladesh.jpg' ,
       name:'Bangladesh'
    },
    {
        img:'https://static.vecteezy.com/system/resources/previews/024/289/394/original/illustration-of-west-indies-flag-design-vector.jpg' ,
       name:'West indies'
    },

]

export default TopTeam
