import React from 'react'

export const Search = () => {
  return (
    <div className="flex justify-center">
      <input className='py-[30px] pl-[30px] text-black rounded-l-[14px] pr-[200px] bg-white focus:outline-none' type="text" placeholder='paste your website links' />
      <button className='text-white bg-[#6A55EA] p-[30px] rounded-r-[14px]'>Analyze website</button>
    </div>
  )
}
