import React from 'react'
import Images from '../components/Images'
import BannerImages from '../assets/Banner.jpg'
import Container from '../components/Container'
import Flex from '../components/Flex'
import BannerIcon1 from '../assets/BannerIcon1.png'
import BannerIcon3 from '../assets/BannerIcon3.png'
import BannerIcon2 from '../assets/BannerIcon2.png'


const Banner = () => {
  return (
   <section className='border-b border-[#F0F0F0]'>
  <Images className='w-full' src={BannerImages}/>
  <Container>
    <Flex className='justify-between'>
        <Flex className='items-center gap-x-4 py-[30px]'>
            <Images src={BannerIcon1}/>
            <p className='text-base text-[#6D6D6D] text-dm text-normal'>Two years warranty</p>
        </Flex>
        <Flex className='items-center gap-x-4 py-[30px]'>
            <Images src={BannerIcon3}/>
            <p className='text-base text-[#6D6D6D] text-dm text-normal'>Free shipping</p>
        </Flex>
        <Flex className='items-center gap-x-4 py-[30px]'>
            <Images src={BannerIcon2}/>
            <p className='text-base text-[#6D6D6D] text-dm text-normal'>Return policy in 30 days</p>
        </Flex>
    </Flex>
  </Container>

   </section>
   
  )
}

export default Banner