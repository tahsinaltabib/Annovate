import React from 'react'
import featureImg from '../../assets/featureImg.png'
import Image from '../../reusable/Imgae'
import Ptag from '../../reusable/Ptag'
import H2tag from '../../reusable/H2tag'

const Feature = () => {
  return (
    <section className='max-w-[1320px] mx-auto pt-[100px]'>
      <div className="flex pt-[130px]">
        
          <div className="w-1/2">
              <Ptag className=' text-[#7968EF] font-nuni font-medium text-[24px] pb-[10px]'>Core feature</Ptag>
              <H2tag className=' font-pops font-semibold text-[48px] pb-[24px]'>Get more traffic</H2tag>
              <Ptag className='font-nuni font-normal text-[18px] w-[550px]'>With over 25 years of experience, we have crafted thousands of strategic discovery process that enables us to peel back the layers which enable us to understand.With over 25 years of experience, we have crafted thousands of strategic discovery process</Ptag>
          </div>
        
          <div className="w-1/2">
             <Image src={featureImg}/>
          </div>
        
       </div>
    </section>
  )
}

export default Feature