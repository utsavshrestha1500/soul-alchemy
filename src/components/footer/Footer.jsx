import React from 'react'
import './footer.css'
import { BsFacebook } from 'react-icons/bs'
import { BsInstagram } from 'react-icons/bs'
import { BsTwitter } from 'react-icons/bs'
const Footer = () => {
  return (
    <footer>
      <a href='#home' className='footer_logo'> Utsav </a>

        <ul className='permalinks'>
         <li> <a href='#'> Home</a></li>
         <li> <a href='#about'> About</a></li>
         <li> <a href='#experience'> Experience</a></li>
         <li> <a href='#services'> Services</a></li>
         <li> <a href='#portfolio'> Portfolio</a></li>
         <li> <a href='#testimonials'> Testimonials</a></li>
         <li> <a href='#contact'> Contact</a></li>
        </ul>

        <div className='footer_social'>
          <a href='https://www.facebook.com/utsavshumsherrana'> <BsFacebook /></a>
          <a href='https://www.instagram.com/utsavshresthaa/'> <BsInstagram /></a>
          <a href='https://twitter.com/UTSAVSH49971457'> <BsTwitter /></a>
        </div> 

        <div className='footer_copyright'>
          <small>&copy; Utsav Shrestha. All rights reserved.</small>
        </div>
    </footer>
  )
}

export default Footer