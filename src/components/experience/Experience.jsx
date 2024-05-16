import React from 'react'
import './experience.css'
import {BsPatchCheckFill} from 'react-icons/bs'

const Experience = () => {
  return (
    <section id='experience'>
     <h5> What Skills I have</h5>
     <h2> My Experience</h2>

     <div className='container experience_container'>
      <div className='experience_frontend'>
      <h3> Frontend Development</h3>
        <div className='experience_content'>
          <article className='experience_details'>
          <BsPatchCheckFill className='' />
            <div>
            <h5> HTML</h5>
            <small className='text-light'> Experienced </small>
            </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='' />
          <div>
            <h5> CSS</h5>
            <small className='text-light'> Experienced </small>
            </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='' />
          <div>
            <h5> JavaScript</h5>
            <small className='text-light'> Experienced </small>
            </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='' />
          <div>
            <h5> React</h5>
            <small className='text-light'> Experienced </small>
            </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='' />
          <div>
            <h5> BootStrap</h5>
            <small className='text-light'> Experienced </small>
            </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='' />
          <div>
            <h5> TailWind</h5>
            <small className='text-light'> Experienced </small>
            </div>
          </article>
        </div>
      </div>
      
      <div className='experience_backend'>
      <h3> Backend Development</h3>
        <div className='experience_content'>
          <article className='experience_details'>
          <BsPatchCheckFill className='' />
            <div>
            <h5> Node JavaScript</h5>
            <small className='text-light'> Beginner </small>
            </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='' />
          <div>
            <h5> PHP</h5>
            <small className='text-light'> Beginner </small>
            </div>
          </article>

          <article className='experience_details'>
          <BsPatchCheckFill className='' />
          <div>
            <h5> Python</h5>
            <small className='text-light'> Beginner </small>
            </div>
          </article>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Experience