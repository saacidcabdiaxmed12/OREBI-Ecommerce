import React from 'react'
import Images from '../components/Images'
import ProductImage13 from '../assets/product13.png'
import Flex from '../components/Flex'
import Container from '../components/Container'
import ProductImage14 from '../assets/product14.png'
import ProductImage15 from '../assets/product15.png'
import ProductImage16 from '../assets/product16.png'
import Heading from '../components/Heading'
import { FaStar } from "react-icons/fa";
import Button from '../components/Button'

const Product = () => {
  return (
  <Container>
    <Flex className='flex-wrap pt-[150px] pb-12 gap-[40px]'>
    <div className='w-[48%] '>
     <Images className='w-full' src={ProductImage13}/>
    </div>
    <div className='w-[48%] '>
     <Images className='w-full' src={ProductImage14}/>
    </div>
    <div className='w-[48%]'>
     <Images className='w-full' src={ProductImage15}/>
    </div>
    <div className='w-[48%] '>
     <Images className='w-full' src={ProductImage16}/>
    </div>
    </Flex>
    <Heading text="Product"/>
    <Flex className='gap-x-6 pb-6 pt-4'>
        <ul className='flex gap-1'>
      <li><FaStar className='text-[#FFD881]' /></li>
      <li><FaStar className='text-[#FFD881]' /></li>
      <li><FaStar className='text-[#FFD881]' /></li>
      <li><FaStar className='text-[#FFD881]' /></li>
      <li><FaStar  className='text-[#FFD881]'/></li>
    </ul>
    <p className='text-sm text-primary text-dm text-normal'>1 Review</p>
    </Flex>
    <Flex className='items-center gap-x-[22px] border-b border-[#F0F0F0] w-[48%] pb-6 '>
      <p className='text-base text-primary font-dm font-normal '>$88.00</p>
      <p className='text-xl text-secondary font-dm font-bold '>$44.00</p>
    </Flex>
   <Flex className='gap-x-[54px] py-8'>
     <h4 className='text-base text-secondary font-dm font-bold'>COLOR:</h4>
    <ul className='flex gap-x-4'>
      <li className='w-[20px] h-[20px] rounded-full bg-[#979797] hover:scale-[1.6] duration-500'></li>
      <li className='w-[20px] h-[20px] rounded-full bg-[#FF8686] hover:scale-[1.6] duration-500'></li>
      <li className='w-[20px] h-[20px] rounded-full bg-[#7ED321] hover:scale-[1.6] duration-500'></li>
      <li className='w-[20px] h-[20px] rounded-full bg-[#B6B6B6] hover:scale-[1.6] duration-500'></li>
      <li className='w-[20px] h-[20px] rounded-full bg-[#15CBA5] hover:scale-[1.6] duration-500'></li>
    </ul>
   </Flex>
   <Flex className='items-center gap-x-[74px] pb-8'>
     <h4 className='text-base text-secondary font-dm font-bold'>SIZE:</h4>
     <select className='py-2 px-10 border border-[#F0F0F0]'>
      <option value="">S</option>
      <option value="">M</option>
      <option value="">L</option>
      <option value="">XL</option>
     </select>
   
   </Flex>
   <Flex className='items-center gap-x-[30px] pb-8 border-b border-[#F0F0F0] w-[48%]'>
     <h4 className='text-base text-secondary font-dm font-bold'>QUANTITY:</h4>
     <select className='py-2 px-10 border border-[#F0F0F0]'>
      <option value="">1</option>
      <option value="">2</option>
      <option value="">3</option>
      <option value="">4</option>
     </select>
   
   </Flex>
   <Flex className='items-center gap-x-[30px]  border-b border-[#F0F0F0] w-[48%] py-6'>
     <h4 className='text-base text-secondary font-dm font-bold'>STATUS:</h4>
     <p>In stock</p>
   </Flex>
  <Flex className='gap-x-5 py-11 border-b border-[#F0F0F0] w-[48%]'>
     <Button text="Add to Wish List"/>
     <Button text="Add to Cart"/>
  </Flex>
  <Flex className='items-center gap-x-[30px]  border-b border-[#F0F0F0] w-[48%] py-6'>
     <h4 className='text-base text-secondary font-dm font-bold'>FEATURES & DETAILS</h4>
   </Flex>
  <Flex className='items-center gap-x-[30px]  border-b border-[#F0F0F0] w-[48%] py-6'>
     <h4 className='text-base text-secondary font-dm font-bold'>SHIPPING & RETURNS</h4>
   </Flex>
   <p className='text-base text-secondary font-dm font-normal w-[780px] pt-5'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, 
    sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
    <Flex className='pt-[124px] pb-11 gap-x-[66px]'>
      <p className='text-xl text-primary font-dm font-normal'>Description</p>
      <p className='text-xl text-secondary font-dm font-bold'>Reviews (1)</p>
    </Flex>
    <p className='text-xl text-primary font-dm font-normal pb-6'>1 review for Product</p>

    <Flex className='gap-x-10 border-t border-[#F0F0F0]'>
      <p className='py-6'>John Ford</p>
        <ul className='flex gap-1 items-center'>
           <li><FaStar className='text-[#FFD881] text-sm' /></li>
           <li><FaStar className='text-[#FFD881] text-sm' /></li>
           <li><FaStar className='text-[#FFD881] text-sm' /></li>
           <li><FaStar className='text-[#FFD881] text-sm' /></li>
           <li><FaStar  className='text-[#FFD881] text-sm'/></li>
    </ul>
    </Flex>
    <p className='text-xl text-primary font-dm font-normal border-b border-[#F0F0F0] pb-6'>Lorem Ipsum is simply dummy text of the printing and typesetting industry.
       Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
        when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only 
    five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.</p>
    <h4 className='text-base text-secondary font-dm font-bold py-10'>Add a Review</h4>
    <label htmlFor="name">Name <br />
      <input className='py-3 border-b border-[#F0F0F0] w-[48%] my-5' id='name' type="text" placeholder='Your name here' />
    </label> <br />
    <label htmlFor="name">Email <br />
      <input className='py-3 border-b border-[#F0F0F0] w-[48%] my-5' id='name' type="text" placeholder='Your email here' />
    </label> <br />
    <label htmlFor="name">Review <br />
      <input className='py-3 border-b border-[#F0F0F0] w-[48%] my-5' id='name' type="text" placeholder='Your review here' />
    </label>
    <br />
    <Button text='Post' className='py-6 mb-[128px]'/>
  </Container>
  )
}

export default Product