import React from 'react'
import Ptag from './../../reusable/Ptag';
import H2tag from './../../reusable/H2tag';
import H3tag from '../../reusable/H3tag';
import Image from '../../reusable/Imgae'
import Core from '../../assets/core.png'
import Card1 from '../../assets/card1.png'
import Card2 from '../../assets/card2.png'
import Card3 from '../../assets/card3.png'

const CoreFeature = () => {
  return (
    <section className='max-w-[1320px] mx-auto'>
      <div className="">
        <Ptag className='mx-auto text-center font-nuni font-medium text-[24px] text-[#7968EF] pb-[10px]'>Core feature</Ptag>
        <H2tag className='mx-auto text-center font-pops font-semibold text-[48px] w-[676px]'>
        Provide awsome service with our tools
        </H2tag>
      </div>
      <div className='flex'>
         <div className="w-1/2">
          <Ptag className='font-nuni font-normal text-[18px] pb-[80px] pt-[87px]'>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand.</Ptag>
          <Image src={Core}/>
        </div>
        
        <div className="w-1/2 pt-[60px] flex flex-col gap-[35px]">
          
           <div className=" flex items-center gap-[40px] py-[36px] pl-[36px] bg-[#F0EDFF] rounded-[15px]">
              <div className="">
                 <Image src={Card1}/>
              </div>
              <div className="">
                 <H3tag className='font-pops font-semibold text-[28px] pb-[12px]'>SEO Consultancy</H3tag>
                 <Ptag className='font-nuni font-normal text-[18px] w-[374px]'>Nam libero tempore, cum soluta nobis est eligendi optio cumque</Ptag>   
              </div>
          </div>
          
           <div className=" flex items-center gap-[40px] py-[36px] pl-[36px] bg-[#FEF6EC] rounded-[15px]">
              <div className="">
                 <Image src={Card2}/>
              </div>
              <div className="">
                 <H3tag className='font-pops font-semibold text-[28px] pb-[12px]'>Competitor analysis</H3tag>
                 <Ptag className='font-nuni font-normal text-[18px] w-[374px]'>Nam libero tempore, cum soluta nobis est eligendi optio cumque</Ptag>   
              </div>
          </div>
          
           <div className=" flex items-center gap-[40px] py-[36px] pl-[36px] bg-[#E8FCF2] rounded-[15px]">
              <div className="">
                 <Image src={Card3}/>
              </div>
              <div className="">
                 <H3tag className='font-pops font-semibold text-[28px] pb-[12px]'>Social media marketing</H3tag>
                 <Ptag className='font-nuni font-normal text-[18px] w-[374px]'>Nam libero tempore, cum soluta nobis est eligendi optio cumque</Ptag>   
              </div>
          </div>
          
        </div>
      </div>
    </section>
  )
}

export default CoreFeature