'use client'

import Image from 'next/image'
import React, {useRef, useState} from 'react'
import { Quote, Profile1, Profile2, Profile3 } from '../assets/images'
import '../styles/testimonials.css'

let style1={}, style2={}, style3={};

const style = {
  backgrounColor: '#7F57F1',
  transform: 'scale(1.5)'
}

function Testimonial() {

  const [tab, setTab] = useState(1)

  const scrollRef = useRef(null)

  style1={}
  style2={}
  style3={}

  if(tab==1){
    style1 = style
  } else if(tab==2){
    style2 = style
  } else {
    style3 = style
  } 

  function scroll(direction){
    const {current} = scrollRef

    const width = document.getElementById("slide").clientWidth
    const tab = document.getElementById(direction).clientWidth
    console.log(width, current.scrollLeft)

    if(direction === 'left'){
      current.scrollLeft = 0;
      setTab(1)
    } else if(direction === 'center') {
      current.scrollLeft = 1194;
      setTab(2)
    } else {
      current.scrollLeft = 1199+1199;
      setTab(3)
    }
  }

  return (
    <div className='section--padding'>
      <h1 className='heading1'>our clients speak</h1>
      <p className='subtitle center'>We have been working with clients around the world</p>
      <div id='slide' className='comments' ref={scrollRef}>
        <div className='comment--container'>

          <div className='comment'>
            <div className='comment--section'>
              <Image src={Quote} alt='quote mark' />
              <p className='comment--title'>Professional Partner</p>
              <p className='comment--content center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.</p>
            </div>
            <Image src={Profile1} alt='profile pic'/>
            <p className='comment--profile--name'>Lorri Warf</p>
            <p className='comment--profile--title'>UX Designer</p>
          </div>

          <div className='comment'>
            <div className='comment--section'>
              <Image src={Quote} alt='quote mark' />
              <p className='comment--title'>Incredible Experience</p>
              <p className='comment--content center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.</p>
            </div>
            <Image src={Profile2} alt='profile pic'/>
            <p className='comment--profile--name'>David Elson</p>
            <p className='comment--profile--title'>Developer</p>
          </div>

          <div className='comment'>
            <div className='comment--section'>
              <Image src={Quote} alt='quote mark' />
              <p className='comment--title'>Dependable & Responsive</p>
              <p className='comment--content center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.</p>
            </div>
            <Image src={Profile3} alt='profile pic'/>
            <p className='comment--profile--name'>Ricky Smith</p>
            <p className='comment--profile--title'>Developer</p>
          </div> 
          
        </div>
        <div className='comment--container'>

          <div className='comment'>
            <div className='comment--section'>
              <Image src={Quote} alt='quote mark' />
              <p className='comment--title'>Professional Partner</p>
              <p className='comment--content center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.</p>
            </div>
            <Image src={Profile1} alt='profile pic'/>
            <p className='comment--profile--name'>Lorri Warf</p>
            <p className='comment--profile--title'>UX Designer</p>
          </div>

          <div className='comment'>
            <div className='comment--section'>
              <Image src={Quote} alt='quote mark' />
              <p className='comment--title'>Incredible Experience</p>
              <p className='comment--content center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.</p>
            </div>
            <Image src={Profile2} alt='profile pic'/>
            <p className='comment--profile--name'>David Elson</p>
            <p className='comment--profile--title'>Developer</p>
          </div>

          <div className='comment'>
            <div className='comment--section'>
              <Image src={Quote} alt='quote mark' />
              <p className='comment--title'>Dependable & Responsive</p>
              <p className='comment--content center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.</p>
            </div>
            <Image src={Profile3} alt='profile pic'/>
            <p className='comment--profile--name'>Ricky Smith</p>
            <p className='comment--profile--title'>Developer</p>
          </div> 
          
        </div>
        <div className='comment--container'>

          <div className='comment'>
            <div className='comment--section'>
              <Image src={Quote} alt='quote mark' />
              <p className='comment--title'>Professional Partner</p>
              <p className='comment--content center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.</p>
            </div>
            <Image src={Profile1} alt='profile pic'/>
            <p className='comment--profile--name'>Lorri Warf</p>
            <p className='comment--profile--title'>UX Designer</p>
          </div>

          <div className='comment'>
            <div className='comment--section'>
              <Image src={Quote} alt='quote mark' />
              <p className='comment--title'>Incredible Experience</p>
              <p className='comment--content center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.</p>
            </div>
            <Image src={Profile2} alt='profile pic'/>
            <p className='comment--profile--name'>David Elson</p>
            <p className='comment--profile--title'>Developer</p>
          </div>

          <div className='comment'>
            <div className='comment--section'>
              <Image src={Quote} alt='quote mark' />
              <p className='comment--title'>Dependable & Responsive</p>
              <p className='comment--content center'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Auctor non sit sed magna pharetra in amet porta enim.</p>
            </div>
            <Image src={Profile3} alt='profile pic'/>
            <p className='comment--profile--name'>Ricky Smith</p>
            <p className='comment--profile--title'>Developer</p>
          </div> 
          
        </div>
      </div>
      <div className='tabs'>
        <div className='tab' id='left' style={style1} onClick={()=>scroll('left')} />
        <div className='tab' id='center' style={style2} onClick={()=>scroll('center')} />
        <div className='tab' id='right' style={style3} onClick={()=>scroll('right')} />
      </div>
    </div>
  )
}

export default Testimonial