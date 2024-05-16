import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../assets/f2.jpeg'
import './header.css'
import HeaderSocial from './HeaderSocial'
const Header = () => {
  return (
    <header>
      <div className='container header_container'>
        <h5> Hello I'm</h5>
        <h1> Utav Shrestha</h1>
        <h5 className='text-light'> Front-End Developer</h5>
        <CTA />
        <HeaderSocial />
        <div className='me'>
        <img src={ME} alt='me' /> 
        </div>

        <a href='#portfolio' className='scroll_down'> ********</a>
        <a href='#about' className='scroll_up'> ********</a>

      </div>
    </header>
  )
}

export default Header