import Image from 'next/image'
import React from 'react'
import Logo from '../../../public/Vector.svg'
import '../styles/navbar.css'
import Link from 'next/link'

function NavBar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <Image src={Logo} alt='logo' color='black' height={36.5} width={36.5}/>
        <h1>Logoipsum</h1>
      </div>

      <div className="links">
        <ul>
          <li><Link href={'/'}>Home</Link><div/></li>
          <li><Link href={'/'}>About</Link><div/></li>
          <li><Link href={'/'}>Property</Link><div/></li>
          <li><Link href={'/'}>Blog</Link><div/></li>
          <li><Link href={'/'}>Contact</Link><div/></li>
        </ul>
      </div>
    </div>
  )
}

export default NavBar