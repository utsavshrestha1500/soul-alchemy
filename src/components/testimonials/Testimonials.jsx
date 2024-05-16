import React from 'react'
import './testimonials.css'
import { LazyLoadImage } from 'react-lazy-load-image-component'
import AVTR1 from '../../assets/utsav3.jpg'
import AVTR2 from '../../assets/utsav3.jpg'
import AVTR3 from '../../assets/utsav3.jpg'
import AVTR4 from '../../assets/utsav3.jpg'
// core version + navigation, pagination modules:
import { Swiper, SwiperSlide } from 'swiper/react'
// import Swiper and modules styles
import 'swiper/css'
import 'swiper/css/pagination'


const data = [
  {
    avatar: AVTR1,
    name: 'Ivaaz Technology',
    review: 'Lorem ipsum is a placeholde text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'
  },
  {
    avatar: AVTR2,
    name: 'Hybrid Technology',
    review: 'Lorem ipsum is a placeholde text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'

  },
  {
    avatar: AVTR3,
    name: 'Bhairav Technology',
    review: 'Lorem ipsum is a placeholde text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'

  },
  {
    avatar: AVTR4,
    name: 'Lava Technology',
    review: 'Lorem ipsum is a placeholde text commonly used to demonstrate the visual form of a document or a typeface without relying on meaningful content.'

  }
  
  
 
]
const Testimonials = () => {
  return (
    <section id='testimonials'> 
        <h5> Review From Client</h5>
        <h2> Testimonials</h2>

        <Swiper className='container testimonials_container'
           slidesPerView={1}
           spaceBetween={40}
           pagination={{ clickable: true }}>
          {
            data.map(({avatar, name, review}, index) => {
              return (
                <SwiperSlide key={index} className='testimonial'>
                  <div className='client_avatar'>
                    <LazyLoadImage src={avatar} />
                  </div>
                  <h5 className='client_name'> {name}</h5>
                  <small className='client_review'>{review} </small>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
    </section>
  )
}

export default Testimonials