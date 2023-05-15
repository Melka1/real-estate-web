import React from 'react'
import Image from 'next/image'
import { Image6, Image7 } from '../assets/images'
import '../styles/recent.css'

function RecentProps() {
  return (
    <div className='section--padding'>
      <h1 className='heading1'>Recent Properties</h1>
      <p className='center subtitle'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <div className='recent--props--container'>
        <div className='recent--prop'>
          <Image src={Image6} alt='recent property'/>
          <div className='recent--prop--desc--container'>
            <h3 className='recent--prop--desc--title'>Interior Design</h3>
            <p className='recent--prop--desc'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit... 
              <span>Read More</span>
            </p>
            <p className='recent--prop--cost'>$ 20,000/<span>Month</span></p>
          </div>
        </div>

        <div className='recent--prop'>
          <Image src={Image7} alt='recent property'/>
          <div className='recent--prop--desc--container'>
            <h3 className='recent--prop--desc--title second'>Interior Design</h3>
            <p className='recent--prop--desc'>
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet. Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit... 
              <span>Read More</span>
            </p>
            <p className='recent--prop--cost'>$ 26,000/<span>Month</span></p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RecentProps