import React from 'react'
import Container from '../components/Container'
import Images from '../components/Images'
import Logo from '../assets/Logo.png'
import List from '../components/List'
import Flex from '../components/Flex'
import { Link } from 'react-router-dom'

const Navber = () => {
  return (
  <nav className='py-8'>
    <Container>
      <Flex>
      <div className='w-4/12'>
           <Link> <Images src={Logo}/></Link>
        </div>
        <div className='w-8/12'>
         <ul className='flex gap-x-10'>
         <Link to='/'><List text='Home'/></Link>
         <Link to='/shop'><List text='Shop'/></Link>
         <Link to='/about'><List text='About'/></Link>
         <Link to='/contact'> <List text='Contacts'/></Link>
         <Link to='/'><List text='Journal'/></Link>
      
         </ul>
        </div>
      </Flex>
    </Container>
  </nav>
 
  )
}

export default Navber