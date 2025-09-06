import React from 'react'
import Logo from '../../assets/logo.png'
import Image from '../../reusable/Imgae'
import { GoChevronDown } from "react-icons/go";


const Navbar = () => {
  return (
    <nav className='absolute w-full left-0 top-5'>
      <div className="max-w-[1320px] mx-auto">
          <div className="flex justify-between items-center">
          <div className="">
             <Image src={Logo}/>
          </div>
          <div className="">
            <ul className='flex items-center gap-[48px]'>
               <li className=' text-white flex items-center gap-1 font-san font-semibold text-[18px]'>Home<GoChevronDown/></li> 
               <li className=' text-white flex items-center gap-1 font-san font-semibold text-[18px]'>Home<GoChevronDown/></li> 
               <li className=' text-white flex items-center gap-1 font-san font-semibold text-[18px]'>Home<GoChevronDown/></li> 
               <li className=' text-white flex items-center gap-1 font-san font-semibold text-[18px]'>Home<GoChevronDown/></li> 
               <li className=' text-white flex items-center gap-1 font-san font-semibold text-[18px]'>Home<GoChevronDown/></li> 
               <li className=' text-white flex items-center gap-1 font-san font-semibold text-[18px]'>Home<GoChevronDown/></li> 
            </ul>
          </div>
        <div className="">
          <button className=' text-white font-nuni font-semibold text-[18px] py-[14px] px-[28px] border-1 rounded-[15px]'>Contact Us</button>
        </div>
       </div>
      </div>
    </nav>
  )
}

export default Navbar