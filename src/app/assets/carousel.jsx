'use client'

import React, {useState} from 'react'
import './styles/carousel.css'
import Image from 'next/image'

function Carousel({images}) {
  const [imageIndex, setImageIndex] = useState(0)
  console.log(images)
  
  return (
    <div className='product--images'>
        <div className='carousel' style={{transform:`translateX(-${imageIndex*100}%)`}}>
            {
              images.map((image, index)=>(
                <img key={index} src={image.content} loading='lazy' alt={image.name} width={'100%'} height={'100%'} />
              ))
            }
        </div>
        <div className='navigator--container'>
          <div className='image--navigator'>
            {
              images.map((image, index)=>(
                <button key={index} onClick={()=>setImageIndex(index)}>
                  <span style={{opacity:`${imageIndex==index?'1':'0'}`}}></span>
                </button>
              ))
            }
          </div>

        </div>
       
    </div>
  )
}

export default Carousel