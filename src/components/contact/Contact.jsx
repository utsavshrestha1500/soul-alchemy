import React from 'react'
import './contact.css'
import { useRef } from 'react';
import emailjs from 'emailjs-com'
import { MdOutlineEmail }   from 'react-icons/md'
import { BsMessenger } from 'react-icons/bs'
import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();
    emailjs.sendForm('service_l0c9imk', 'template_jvyl27i', form.current, '6gh-vVLcoli3XRQ_H')

    e.target.reset()
  };

  return (
   <section id='contact'> 
    <h5> Get In Touch</h5>
    <h2> Contact Me</h2>

    <div className='container contact_container'>
      <div className='contact_options'>
        <article className='contact_option'>
        <MdOutlineEmail className='contact_option-icon' />
          <h4> Email </h4>
          <h5> utsavshrestha1500@gmail.com </h5>
          <a href='https://www.gmail.com' target='blank'> Send a mail</a>
        </article>

        <article className='contact_option'>
        <BsMessenger className='contact_option-icon' />
          <h4> Messenger </h4>
          <h5> utsavshrestha </h5>
          <a href='https://www.facebook.com/utsavshumsherrana' target='_blank' rel='noreferrer'> Send a message</a>
        </article>

        <article className='contact_option'>
        <FaWhatsapp className='contact_option-icon' />
          <h4> whatsApp </h4>
          <h5> utsavshrestha</h5>
          <a href='https://wa.me/9779811396782' target='_blank' rel='noreferrer'> Send a message</a>
        </article>
      </div>

        {/* End Of Contact Options  */}
      <form ref={form} onSubmit={sendEmail}>
        <input type='text' name='name' placeholder='Your Full Name' required />
        <input type='email' name='email' placeholder='Your Email' required />
        <textarea name='message' rows='7' placeholder='Your Message' required />
        <button type='submit' className='btn btn-primary'> Send Message </button> 
      </form>

    </div>
   </section>
  )
}

export default Contact