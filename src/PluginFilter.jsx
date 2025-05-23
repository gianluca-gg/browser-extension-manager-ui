import React, {useState, useEffect} from 'react';

const PluginFilter = ({filter, setFilter}) => {
  return (
   
    <header className='flex justify-between flex-row max-w-[1170px] w-[100%] py-[64px] pt-[4em] pb-[2em] items-center'>
      <div><h2 className='font-notoSans text-[34px] leading-[100%] tracking-[-1px] font-bold text-neutral-900 '>Extensions List</h2></div> 
      <div className='flex gap-[12px]'>
        <button className='border border-neutral-200 px-[16px] py-[8px] rounded-full font-notoSans leading-[140%] tracking-[-0.5px] text-neutral-900 font-[500] bg-neutral-0' onClick={() => setFilter('all')}>All</button>
        <button className='border border-neutral-200 px-[16px] py-[8px] rounded-full font-notoSans leading-[140%] tracking-[-0.5px] text-neutral-900 font-[500] bg-neutral-0' onClick={() => setFilter('active')}>Active</button>
        <button className='border border-neutral-200 px-[16px] py-[8px] rounded-full font-notoSans leading-[140%] tracking-[-0.5px] text-neutral-900 font-[500] bg-neutral-0' onClick={() => setFilter('inactive')}>Inactive</button>
      </div>
    </header>
  )
}

export default PluginFilter