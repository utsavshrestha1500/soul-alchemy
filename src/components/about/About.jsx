import React from 'react'
import './about.css'
import ME from '../../assets/utsav4.jpg'
import {FaAward} from 'react-icons/fa'
import {FiUsers} from 'react-icons/fi'
import {VscFolderLibrary} from 'react-icons/vsc'


const About = () => {
  return (
    <section id='about'>
     <h5> Get To Know</h5>
     <h2> About Me</h2>

     <div className='container about_container'>
      <div className='about_me'>
        <div className='about_me-image'>
          <img src={ME} alt='AboutImage' />
        </div>
      </div>
      
      <div className='about_content'>
        <div className='about_cards'>
          <article className='about_card'>
          <FaAward className='about_icon' />
            <h5> Experience</h5>
            <small> 1 Year work experience</small>
          </article>

          <article className='about_card'>
          <FiUsers className='about_icon' />
            <h5> Clients</h5>
            <small> 5+ </small>
          </article>

          <article className='about_card'>
          <VscFolderLibrary className='about_icon' />
            <h5> Projects </h5>
            <small> 10+ Completed</small>
          </article>
        </div>

        <p> Welcome to my React portfolio! I am a dedicated front-end developer
         specializing in React, driven by a desire to craft visually stunning and
          interactive web applications that elevate user experiences to new heights, 
          all while ensuring clean code, responsive designs, and seamless integrations.
        </p>
        <div className='lets-talk'>
        <a href='#contact' className='btn btn-primary'> Lets Talk</a>
        </div>          
        
      </div>
     </div>
    </section>
  )
}

export default About