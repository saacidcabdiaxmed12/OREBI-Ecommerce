// import React from "react";
// import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

// const Footer = () => {
//   return (
//     <footer className="bg-[#fafaf8] text-[#222] p-10 text-sm">
//       <div className="flex flex-wrap justify-between border-b border-gray-300 pb-10">
//         <div className="min-w-[150px] mb-4">
//           <h4 className="font-semibold mb-3 text-sm">MENU</h4>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:underline">Home</a></li>
//             <li><a href="#" className="hover:underline">Shop</a></li>
//             <li><a href="#" className="hover:underline">About</a></li>
//             <li><a href="#" className="hover:underline">Contact</a></li>
//             <li><a href="#" className="hover:underline">Journal</a></li>
//           </ul>
//         </div>

//         <div className="min-w-[150px] mb-4">
//           <h4 className="font-semibold mb-3 text-sm">SHOP</h4>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:underline">Category 1</a></li>
//             <li><a href="#" className="hover:underline">Category 2</a></li>
//             <li><a href="#" className="hover:underline">Category 3</a></li>
//             <li><a href="#" className="hover:underline">Category 4</a></li>
//             <li><a href="#" className="hover:underline">Category 5</a></li>
//           </ul>
//         </div>

//         <div className="min-w-[150px] mb-4">
//           <h4 className="font-semibold mb-3 text-sm">HELP</h4>
//           <ul className="space-y-2">
//             <li><a href="#" className="hover:underline">Privacy Policy</a></li>
//             <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
//             <li><a href="#" className="hover:underline">Special E-shop</a></li>
//             <li><a href="#" className="hover:underline">Shipping</a></li>
//             <li><a href="#" className="hover:underline">Secure Payments</a></li>
//           </ul>
//         </div>

//         <div className="min-w-[200px] mb-4">
//           <p className="font-semibold">(052) 611-711</p>
//           <p className="font-semibold">company@domain.com</p>
//           <p>575 Crescent Ave. Quakertown, PA 18951</p>
//         </div>

//         <div className="flex-1 flex justify-end items-start min-w-[150px]">
//           <h2 className="text-3xl font-bold">OREBI<span className="text-lg align-top">::</span></h2>
//         </div>
//       </div>

//       <div className="flex flex-wrap justify-between items-center pt-6 text-xs text-gray-600">
//         <div className="flex space-x-4 text-base">
//           <a href="#"><FaFacebookF /></a>
//           <a href="#"><FaLinkedinIn /></a>
//           <a href="#"><FaInstagram /></a>
//         </div>
//         <p className="mt-4 md:mt-0">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
//       </div>
//     </footer>
//   );
// };

// export default Footer;

import React from "react";
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import Container from "../components/Container";

const Footer = () => {
  return (
    <section className='w-full h-[374px]'>
      <Container >
        <footer className="bg-[#fafaf8] text-[#222] p-10 text-sm">
      <div className="flex flex-wrap justify-between border-b border-gray-300 pb-10 gap-8">
        <div className="min-w-[150px] mb-4">
          <h4 className="font-semibold mb-3 text-sm">MENU</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Home</a></li>
            <li><a href="#" className="hover:underline">Shop</a></li>
            <li><a href="#" className="hover:underline">About</a></li>
            <li><a href="#" className="hover:underline">Contact</a></li>
            <li><a href="#" className="hover:underline">Journal</a></li>
          </ul>
        </div>

        <div className="min-w-[150px] mb-4">
          <h4 className="font-semibold mb-3 text-sm">SHOP</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Category 1</a></li>
            <li><a href="#" className="hover:underline">Category 2</a></li>
            <li><a href="#" className="hover:underline">Category 3</a></li>
            <li><a href="#" className="hover:underline">Category 4</a></li>
            <li><a href="#" className="hover:underline">Category 5</a></li>
          </ul>
        </div>

        <div className="min-w-[150px] mb-4">
          <h4 className="font-semibold mb-3 text-sm">HELP</h4>
          <ul className="space-y-2">
            <li><a href="#" className="hover:underline">Privacy Policy</a></li>
            <li><a href="#" className="hover:underline">Terms & Conditions</a></li>
            <li><a href="#" className="hover:underline">Special E-shop</a></li>
            <li><a href="#" className="hover:underline">Shipping</a></li>
            <li><a href="#" className="hover:underline">Secure Payments</a></li>
          </ul>
        </div>

        <div className="min-w-[200px] mb-4">
          <p className="font-semibold">(052) 611-5711</p>
          <p className="font-semibold">company@domain.com</p>
          <p>575 Crescent Ave. Quakertown, PA 18951</p>
        </div>

        <div className="flex-1 flex justify-end items-start min-w-[150px]">
          <h2 className="text-3xl font-bold">OREBI<span className="text-lg align-top">::</span></h2>
        </div>
      </div>

      <div className="flex flex-wrap justify-between items-center pt-6 text-xs text-gray-600">
        <div className="flex space-x-4 text-base">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaInstagram /></a>
        </div>
        <p className="mt-4 md:mt-0">2020 Orebi Minimal eCommerce Figma Template by Adveits</p>
      </div>
    </footer>
      </Container>
    </section>
  );
};

export default Footer;

