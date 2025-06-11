import React from 'react'
import Container from '../components/Container'
import Heading from '../components/Heading'
import Flex from '../components/Flex'
import Button from '../components/Button'

const SignUp = () => {
  return (
   <section className='py-[130px]'>
    <Container>
      <div className='border-b border-[#F0F0F0] pb-[60px] mb-[60px] '>
         <p className='text-primary text-base font-dm font-normal w-[644px] '>Lorem Ipsum is 
          simply dummy text of the printing and typesetting industry.
           Lorem Ipsum has been the industry's standard dummy text ever since the.</p>
       </div>
       <Heading text="Your Personal Details"/>
       <Flex className='gap-x-10 flex-wrap border-b border-[#F0F0F0] pb-[70px]'>
           <div className='w-[507px] mt-10 mb-7'>
             <label className='text-base text-secondary font-dm font-bold' For="firstname">First Name <br />
             <input className='py-4 border-b border-[#F0F0F0] w-full' id='firstname' type="text" placeholder='First Name' />
             </label>
          </div>
          <div className='w-[507px] mt-10 mb-7'>
             <label className='text-base text-secondary font-dm font-bold' For="lastname">Last Name <br />
             <input className='py-4 border-b border-[#F0F0F0] w-full' id='lastname' type="text" placeholder='Last Name' />
             </label>
          </div>
           <div className='w-[507px]'>
             <label className='text-base text-secondary font-dm font-bold' For="email">Email address <br />
             <input className='py-4 border-b border-[#F0F0F0] w-full' id='email' type="text" placeholder='company@domain.com' />
             </label>
          </div>
          <div className='w-[507px] '>
             <label className='text-base text-secondary font-dm font-bold' For="telephone">Telephone <br />
             <input className='py-4 border-b border-[#F0F0F0] w-full' id='telephone' type="text" placeholder='Your phone number' />
             </label>
          </div>
         </Flex>


         
       <Heading text="New Customer"/>
       <Flex className='gap-x-10 flex-wrap border-b border-[#F0F0F0] pb-[70px]'>
           <div className='w-[507px] mt-10 mb-7'>
             <label className='text-base text-secondary font-dm font-bold' For="firstname">Address 1<br />
             <input className='py-4 border-b border-[#F0F0F0] w-full' id='firstname' type="text" placeholder='4279 Zboncak Port Suite 6212' />
             </label>
          </div>
          <div className='w-[507px] mt-10 mb-7'>
             <label className='text-base text-secondary font-dm font-bold' For="lastname">Address 2 <br />
             <input className='py-4 border-b border-[#F0F0F0] w-full' id='lastname' type="text" placeholder='-' />
             </label>
          </div>
           <div className='w-[507px]'>
             <label className='text-base text-secondary font-dm font-bold' For="email">City <br />
             <input className='py-4 border-b border-[#F0F0F0] w-full' id='email' type="text" placeholder='Your city' />
             </label>
          </div>
          <div className='w-[507px] '>
             <label className='text-base text-secondary font-dm font-bold' For="telephone">Post Code <br />
             <input className='py-4 border-b border-[#F0F0F0] w-full' id='telephone' type="text" placeholder='05228' />
             </label>
          </div>
          <div className='w-[507px] py-6'>
            <label className='text-base text-secondary font-dm font-bold' For="Country">Country <br />
            <select  className='py-[10px] border-b border-[#F0F0F0] w-full text-sm text-primary font-dm font-normal' id="Country">
               <option value="01">Please select</option>
               <option value="Somalia">Somalia</option>
               <option value="Bangladesh">Bangladesh</option>
               <option value="Kenya">Kenya</option>
               <option value="Nepal">Nepal</option>
               <option value="Pakistan">Pakistan</option>
            </select>
            </label>
          </div>
          <div className='w-[507px] py-6'>
            <label className='text-base text-secondary font-dm font-bold' For="Country">Region/State <br />
            <select  className='py-[10px] border-b border-[#F0F0F0] w-full text-sm text-primary font-dm font-normal' id="Country">
               <option value="01">Please select</option>
               <option value="Somalia">Luuq</option>
               <option value="Bangladesh">Uttra</option>
               <option value="Kenya">Garisa</option>
               <option value="Nepal">Garbaharey</option>
               <option value="Pakistan">Muqdisho</option>
            </select>
            </label>
          </div>

         </Flex>




       <Heading text="Your Password"/>
       <Flex className='gap-x-10 flex-wrap border-b border-[#F0F0F0] pb-[70px]'>
           <div className='w-[507px] mt-10 mb-7'>
             <label className='text-base text-secondary font-dm font-bold' For="password">Password<br />
             <input className='py-4 border-b border-[#F0F0F0] w-full' id='password' type="type" placeholder='Password' />
             </label>
          </div>
          <div className='w-[507px] mt-10 mb-7'>
             <label className='text-base text-secondary font-dm font-bold' For="repeatpassword">Repeat Password <br />
             <input className='py-4 border-b border-[#F0F0F0] w-full' id='repeatpassword' type="type" placeholder='Repeat password' />
             </label>
          </div>

         
        
         </Flex>

         <div className='relative'>
            <label className='ml-10 text-sm text-primary font-dm font-normal' For="iagree">
               <input className='pr-10 absolute top-1/2 left-0 -translate-1/2' id="iagree" type="checkbox" />
               I have read and agree to the Privacy Policy
            </label>
         </div>
         <div className='text-sm text-primary font-dm font-normal'>
            Subscribe Newsletter
               <div className='relative mt-[65px] inline ml-[30px]'>
            <label className='ml-6 text-sm text-primary font-dm font-normal' For="Yes">
               <input className='pr-10 absolute top-1/2 left-0 -translate-1/2' id="Yes" type="checkbox" />
              Yes
            </label>
         </div>
         <div className='relative mt-[65px] inline ml-[30px]'>
            <label className='ml-6 text-sm text-primary font-dm font-normal' For="No">
               <input className='pr-10 absolute top-1/2 left-0 -translate-1/2' id="No" type="checkbox" />
              No
            </label>
         </div>

         </div>
         <Button className='mt-7' text="Log in"/>
      
    </Container>
   </section>
  )
}

export default SignUp