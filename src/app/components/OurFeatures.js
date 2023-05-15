import React from 'react'
import '../styles/our-features.css' 
import Image from 'next/image'
import Cover from '../../../public/Cover.png'

function OurFeatures() {
  return (
    <div className='our-features section--padding'>
      <p className='heading1 left'>Our Features</p>
      <div className='our--feature--container'>
        <div className='our--feature--list'>
          <div className='our--feature'>
            <p className='heading2'>Living Inside a Nature</p>
            <p className='our--feature--desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget diam habitant massa in.</p>
          </div>

          <div className='our--feature'>
            <p className='heading2'>Royal Touch Paint</p>
            <p className='our--feature--desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget diam habitant massa in.</p>
          </div>

          <div className='our--feature'>
            <p className='heading2'>Luxurious Fittings</p>
            <p className='our--feature--desc'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget diam habitant massa in.</p>
          </div>
        </div>

        <Image src={Cover} alt='our feature cover'/>

      </div>
    </div>
  )
}

export default OurFeatures