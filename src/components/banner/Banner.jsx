import React from 'react'
import banner from '../../assets/banner.jpg'
import Ptag from './../../reusable/Ptag';
import { Search } from '../../reusable/Search';
import Cloud from '../../assets/cloud.png'
import Image from '../../reusable/Imgae'

const Banner = () => {
  return (
    <section className=''>
       <div className="bg-cover bg-no-repeat" style={{backgroundImage:`url(${banner})`}}>
         <div className="max-w-[1320px] mx-auto">
          <div className="flex justify-center gap-[20px] pt-[192px]">
            <button className=' text-white font-nuni font-semibold text-[18px] py-[10px] px-[15px] border-1 rounded-[10px]'>SEO</button>
            <button className=' text-white font-nuni font-semibold text-[18px] py-[10px] px-[15px] border-1 rounded-[10px]'>SEO</button>
            <button className=' text-white font-nuni font-semibold text-[18px] py-[10px] px-[15px] border-1 rounded-[10px]'>SEO</button>
          </div>
          <div className="">
            <h1 className='text-white pt-[30px] font-pops font-bold text-[64px] w-[967px] mx-auto text-center'>
              Guaranteed increase of your website sales
            </h1>
            <Ptag className='text-white font-nuni font-normal text-[18px] pt-[20px] w-[780px] mx-auto text-center pb-[48px]'>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand.</Ptag>
            <Search/>
          </div>
        </div>
        <div className="w-full">
            <Image className='w-full' src={Cloud}/>
        </div>
       </div>
    </section>
  )
}

export default Banner