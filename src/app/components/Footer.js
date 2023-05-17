import React from 'react'
import Logo from '../assets/logo';
import '../styles/footer.css'
import {Prop1, Prop2} from '../assets/images'
import Image from 'next/image'

function Footer() {
  return (
    <div className='section--padding footer'>
      <div className='footer--logo--container'>
        <div className='footer--logo'>
          <Logo color='#2F234F' width={50} height={50} style={{display:'flex'}}/>
          <h1 className='footer--logo--name'>Logo<span>ipsum</span></h1>
        </div>
        <p className='footer--logo--desc'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </p>
      </div>

      <div className='footer--recent--props'>
        <p className='footer--recent--props--title'>Properties</p>
        <div className='footer--recent--props--item'>
          <Image src={Prop1} alt='properties'/>
          <div className='property--description'>
            <p className='address'>2972 Westheimer Rd. Santa Ana, Illinois 85486.</p>
            <p className='cost'>$ 20,000</p>
          </div>
        </div>
        <div className='footer--recent--props--item'>
          <Image src={Prop2} alt='properties'/>
          <div className='property--description'>
            <p className='address'>2118 Thornridge Cir. Syracuse, Connecticut 35624</p>
            <p className='cost'>$ 28,000</p>
          </div>
        </div>
      </div>

      <div className='contact--info'>
        <p className='footer--recent--props--title'>Contact Info</p>
        <p className='address'>
          2972 Westheimer Rd. Santa Ana, Illinois 85486.
        </p>
        <p className='address'><span>Phone:</span> (239) 555-0108</p>
        <p className='address'><span>Email:</span> abcd@domain.com</p>
        <p className='address'><span>Website:</span> abcd@domain.in</p>
      </div>
    </div>
  )
}

export default Footer
;
