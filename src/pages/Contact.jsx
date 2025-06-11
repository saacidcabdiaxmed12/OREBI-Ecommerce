import React from 'react'
import Container from '../components/Container'
import Button from '../components/Button'
// import Images from '../components/Images'
// import MapImage from '../assets/ImageMap.png'

const Contact = () => {
  return (
    <section className='py-[140px]'>
      <Container>
        <h4 className='text-[39px] text-secondary font-dm font-bold pb-[42px]'>Fill up a Form</h4>
        <label className='text-base text-secondary font-dm font-bold' htmlFor="name">Name <br />
          <input className='border-b border-[#F0F0F0] w-[48%] mb-6 py-3' type="text" 
             placeholder='Your name here' />
        </label> <br />
        <label className='text-base text-secondary font-dm font-bold' htmlFor="name">Email <br />
          <input className='border-b border-[#F0F0F0] w-[48%] mb-6 py-3' type="text" 
          placeholder='Your email here' />
        </label> <br />
        <label className='text-base text-secondary font-dm font-bold' htmlFor="name">Message <br />
          <textarea className='border-b border-[#F0F0F0] w-[48%] mb-6 py-3' type="text"
           placeholder='Your message here' />
        </label> <br />

           <Button text="Post"/>

         
         {/* <iframe className='w-full h-[572px] pt-[140px]' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d29186.
         92021833591!2d90.35768835743002!3d23.8766714725011!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
         1!3m3!1m2!1s0x3755c5d05e7074dd%3A0xd1c58803049f00c7!2sUttara%2C%20Dhaka!5e0!3m2!1sen!2sbd!4v1749279962382!5m2!1sen!2sbd"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe> */}
          <iframe className='w-full h-[572px] pt-[140px]'  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d45040.
          73521865837!2d42.500749721812475!3d3.7935840832159737!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.
          1!3m3!1m2!1s0x17c2ab550fd49a41%3A0x3b5653ef00a6ed17!2sLuuq%2C%20Somalia!5e0!3m2!1sen!2sbd!4v1749461982405!5m2!1sen!2sbd"
          allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
      </Container>
    </section>
  )
}

export default Contact