import React from 'react'
import './services.css'
import { BiCheck } from 'react-icons/bi'
const Services = () => {
  return (
    <section id='services'>
     <h5> What I Offer</h5>
     <h2> Services</h2>

     <div className='container services_container'>

          <article className='service'>
          <div className='service_head'>
            <h3> Web Development </h3>
            </div>
            <ul className='service_list'>
              <li>
              <BiCheck className='services_list-icon' />
              <p> Custom website development tailored to your specific
                  business requirements.</p>
              </li>
              <li>
              <BiCheck className='services_list-icon' />
              <p> Integration of content management systems (CMS) like 
                 WordPress for easy content updates.</p>
              </li>
              <li>
              <BiCheck className='services_list-icon' />
              <p> E-commerce website development with secure payment
                  gateways and shopping cart functionality.</p>
              </li>
              <li>
              <BiCheck className='services_list-icon' />
              <p> Database integration and management to handle complex data processing and 
                  implementation of secure user authentication and authorization mechanisms.
                  </p>
              </li>
              
            </ul>
          </article>

           <article className='service'>         
          <div className='service_head'>
            <h3> Front-End developer </h3>
            </div>
            <ul className='service_list'>
              <li>
              <BiCheck className='services_list-icon' />
              <p> Responsive website design and development to ensure your
                  site looks great on all devices.</p>
              </li>
              <li>
              <BiCheck className='services_list-icon' />
              <p>User-friendly and intuitive website navigation for seamless
                  browsing experience.</p>
              </li>
              <li>
              <BiCheck className='services_list-icon' />
              <p>Implementation of modern design trends and techniques to 
                 create visually appealing websites.</p>
              </li>
              <li>
              <BiCheck className='services_list-icon' />
              <p>Integration of interactive elements, such as sliders, carousels,
                 and animations, to enhance user engagement.</p>
              </li>
              <li>
              <BiCheck className='services_list-icon' />
              <p> Optimization for fast loading times and performance to improve
                 user experience and search engine rankings.</p>
              </li>
              
            </ul>
          </article>

          <article className='service'>         
          <div className='service_head'>
            <h3> Content Creation </h3>
            </div>
            <ul className='service_list'>
              <li>
              <BiCheck className='services_list-icon' />
              <p>Engaging and SEO-friendly blog posts, articles, and website copywriting.</p>
              </li>
              <li>
              <BiCheck className='services_list-icon' />
              <p> Creation of compelling and persuasive marketing materials, including 
                  product descriptions, email newsletters, and social media content.</p>
              </li>
              <li>
              <BiCheck className='services_list-icon' />
              <p> Content strategy and planning to help align your brand message with
                  your target audience.</p>
              </li>
              <li>
              <BiCheck className='services_list-icon' />
              <p> Customized content solutions based on your specific industry and
                 business needs.</p>
              </li>
            </ul>
          </article>

      </div>
      </section>
  )
}

export default Services