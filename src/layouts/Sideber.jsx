import React from 'react'
import Container from '../components/Container'
import Flex from '../components/Flex'
import { FaBarsStaggered, FaUser } from "react-icons/fa6";
import { IoSearch } from "react-icons/io5";
import { MdOutlineArrowDropDown } from "react-icons/md";
import { FaShoppingCart } from "react-icons/fa";

const Sideber = () => {
  return (
    <section className='py-6 bg-[#F5F5F3]'>
        <Container>
            <Flex className='items-center'>
                <div className='w-3/12'>
                <Flex className='gap-x-[10px] items-center'>
                <FaBarsStaggered /> 
                <p className='text-sm text-secondary font-dm font-normal'>Shop by Category</p>
                </Flex>
                </div>
                <div className='w-6/12'>
                <div className='relative'>
                <input className='py-4 pl-6 pr-16 bg-white w-full placeholder:text-sm placeholder:text-[#C4C4C4]' type="text" placeholder='Search Products' />
                <IoSearch className='absolute top-1/2 right-[20px] -translate-y-1/2 text-sm'/>
                </div>
                </div>
                <div className='w-3/12'>
                <Flex className='justify-end items-center'>
                <FaUser />
                <MdOutlineArrowDropDown  className='ml-[10px] text-black' />
                <FaShoppingCart className='ml-10 text-black' />
                </Flex>
            </div>
            </Flex>

        </Container>
    </section>
  )
}

export default Sideber