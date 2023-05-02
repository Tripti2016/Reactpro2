import React from 'react'
import {Carousel} from "react-responsive-carousel";
import img1 from '../images/3.jpg'
import img2 from '../images/4.jpg'
import 'react-responsive-carousel/lib/styles/carousel.min.css'

export default function Services() {
  return (
    <div className='services'>
        <Carousel 
        infiniteLoop 
        autoPlay 
        showArrows={false}      
        showStatus={false} 
        showThumbs={false}
        interval={1000}>
            <div>
                <img src={img1} alt="Item1" />
                <p className='legend'>UI/UX designer/devloper</p>
            </div>
            <div>
                <img src={img2} alt="Item2" />
                <p className='legend'>Frontend Developer</p>
            </div>
        </Carousel>
     
    </div>
  )
}
