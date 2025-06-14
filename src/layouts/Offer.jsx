import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import Images from '../components/Images'
import OfferOne from '../assets/offerimage1.jpg'
import OfferTwo from '../assets/offerimage2.jpg'
import OfferThree from '../assets/offerimage3.jpg'
import { Link } from 'react-router-dom'


const Offer = () => {
  return (
    <section className='pt-[140px] pb-[128px]'>
        <Container>
            <Flex>
                <div className='w-1/2'>
                <Link to='/shop'><Images src={OfferOne}/></Link>
                </div>
                <Flex className='w-1/2 flex-col items-center justify-between'>
               <Link to='/shop'> <Images src={OfferTwo}/></Link>
               <Link to='/shop'><Images src={OfferThree}/></Link>
                </Flex>
            </Flex>
        </Container>
    </section>
  )
}

export default Offer