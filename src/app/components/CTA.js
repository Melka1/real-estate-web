import React from 'react'
import '../styles/cta.css'

function CTA() {
  return (
    <div className='section--padding cta--container'>
      <div className='cta'>
        <h1 className="cta--header">Don&apos;t Miss A thing!</h1>
        <p className='cta--subheader'>Subscribe with Email and loads of interesting news will be sent to you on a daily basis.</p>
        <div className='input--button'>
          <input type='email' placeholder='Your email here'/>
          <button type='button'>Subscribe</button>
        </div>
      </div>
    </div>
  )
}

export default CTA