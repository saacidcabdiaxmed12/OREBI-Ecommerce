import React from 'react'
import Banner from '../layouts/Banner'
import Offer from '../layouts/Offer'
import Heading from '../components/Heading'
import Container from '../components/Container'
import Product from '../components/Product'
import ProductImage from '../assets/product1.jpg'
import ProductImage2 from '../assets/product2.jpg'
import ProductImage3 from '../assets/product3.jpg'
import ProductImage4 from '../assets/product4.jpg'
import ProductImage5 from '../assets/product5.png'
import ProductImage6 from '../assets/product6.png'
import ProductImage7 from '../assets/product7.png'
import ProductImage8 from '../assets/product8.png'
import PromotionImage from '../assets/promotion.png'
import ProductImage9 from '../assets/product9.png'
import ProductImage10 from '../assets/product10.png'
import ProductImage11 from '../assets/product11.png'
import ProductImage12 from '../assets/product12.png'

import Flex from '../components/Flex'
import Images from '../components/Images'

const Home = () => {
  return (
    <div>
      
      
      <Banner/>
      <Offer/>
     <Container>
       <Heading text="New Arrivals" className='pb-12'/>
     <Flex className='justify-between pb-[118px]'>
        <Product src={ProductImage} title="Basic Crew Neck Tee " price="44"/>
       <Product src={ProductImage2} title="Basic Crew Neck Tee" price="44"/>
       <Product src={ProductImage3} title="Basic Crew Neck Tee" price="44"/>
       <Product src={ProductImage4} title="Basic Crew Neck Tee" price="44"/>
     </Flex>
       <Heading text=" Our Bestsellers" className='pb-12'/>
     <Flex className='justify-between pb-[118px]'>
        <Product src={ProductImage5} title="Basic Crew Neck Tee " price="44"/>
       <Product src={ProductImage6} title="Basic Crew Neck Tee" price="44"/>
       <Product src={ProductImage7} title="Basic Crew Neck Tee" price="44"/>
       <Product src={ProductImage8} title="Basic Crew Neck Tee" price="44"/>
     </Flex>
     <Images className='mb-[128px]' src={PromotionImage}/>
       <Heading text=" Special Offers" className='pb-12'/>
     <Flex className='justify-between pb-[118px]'>
        <Product src={ProductImage9} title="Basic Crew Neck Tee " price="44"/>
       <Product src={ProductImage10} title="Basic Crew Neck Tee" price="44"/>
       <Product src={ProductImage11} title="Basic Crew Neck Tee" price="44"/>
       <Product src={ProductImage12} title="Basic Crew Neck Tee" price="44"/>
     </Flex>
     </Container>
    </div>
  )
}

export default Home