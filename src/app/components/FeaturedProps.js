import React from 'react'
import '../styles/featured.css'
import { Image1, Image2, Image3, Image4, Image5 } from '../assets/images'
import Image from 'next/image'
import Link from 'next/link'
import {AiOutlineArrowRight} from 'react-icons/ai'

function FeaturedProps() {
  return (
    <div className='featured section--padding'>
      <p className='heading1 center title'>Featured Properties</p>
      <p className='center subtitle'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.</p>
      <div className='feature--container'>
        <div className='feature major'>
          <Image src={Image1} alt="featured photo"/>
          <div className='feature--desc'>
            <p className='name'>New Propery</p>
            <p className='desc'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
            <Link href={'/'} className='button'><AiOutlineArrowRight fontSize={18} /></Link>
          </div>
        </div>

        <div className='feature'>
          <Image src={Image2} alt="featured photo"/>
          <div className='feature--desc'>
            <p className='name'>New Propery</p>
            <p className='desc'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
            <Link href={'/'} className='button'><AiOutlineArrowRight fontSize={18} /></Link>
          </div>
        </div>

        <div className='feature'>
          <Image src={Image3} alt="featured photo"/>
          <div className='feature--desc'>
            <p className='name'>New Propery</p>
            <p className='desc'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
            <Link href={'/'} className='button'><AiOutlineArrowRight fontSize={18} /></Link>
          </div>
        </div>

        <div className='feature'>
          <Image src={Image4} alt="featured photo"/>
          <div className='feature--desc'>
            <p className='name'>New Propery</p>
            <p className='desc'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
            <Link href={'/'} className='button'><AiOutlineArrowRight fontSize={18} /></Link>
          </div>
        </div>

        <div className='feature'>
          <Image src={Image5} alt="featured photo"/>
          <div className='feature--desc'>
            <p className='name'>New Propery</p>
            <p className='desc'>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet.</p>
            <Link href={'/'} className='button'><AiOutlineArrowRight fontSize={18} /></Link>
          </div>
        </div>

      </div>
    </div>
  )
}

export default FeaturedProps