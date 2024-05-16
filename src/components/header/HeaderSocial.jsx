import React from 'react'
import {BsLinkedin, BsGithub} from 'react-icons/bs'
import { SiNetlify } from 'react-icons/si'

const HeaderSocial = () => {
  return (
    <div className='header_social'>
        <a href='https://www.linkedin.com/in/utsav-shrestha-2a4641128/' target='blank'><BsLinkedin /></a>
        <a href='https://github.com/utsavshrestha1500' target='blank'><BsGithub /> </a>
        <a href='https://netlify.com' target='blank'><SiNetlify /></a>
    </div>
  )
}

export default HeaderSocial