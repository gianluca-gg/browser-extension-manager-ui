import React, { useEffect } from 'react';

const Main = ({ data, setData }) => {
  const toggleActive = (index) => {
    setData(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, isActive: !item.isActive } : item
      )
    );
  };
  const removeCard = (index) => {
    setData(prev =>
      prev.map((item, i) =>
        i === index ? { ...item, isRemoving: true } : item
      )
    );
  
    setTimeout(() => {
      setData(prev => prev.filter((_, i) => i !== index));
    }, 200); 
  };

  useEffect(() => {
    console.log('Updated data:', data);
  }, [data]); 

  return (
    <main className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-[1170px]">
      {data.map((item, index) => (
     <section
     key={index}
     className={`bg-neutral-0 rounded-[20px] p-[20px] box-border h-[260px] lg:h-[200px]
                 flex flex-col justify-between shadow-custom-light w-full
                 transition-opacity duration-200 dark:bg-neutral-800
                 ${item.isRemoving ? 'opacity-0' : 'opacity-100'}`}
   >
          <div className="flex flex-row gap-[16px] max-h-[76px]">
            <img src={item.logo} className="max-h-[60px] max-w-[60px]" alt={item.name} />
            <div className="flex flex-col gap-[10px]">
              <p className='font-notoSans text-[20px] leading-[120%] tracking-[-0.2px] font-bold dark:text-neutral-0'>{item.name}</p>
              <p className='font-notoSans leading-[140%] tracking-[-0.5px] dark:text-neutral-300'>{item.description}</p>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <button className='border border-neutral-300 px-[16px] py-[8px] rounded-full font-notoSans leading-[140%] tracking-[-0.5px] text-neutral-900 font-[500] hover:bg-red-700 hover:text-neutral-0 active:bg-red-700 active:text-neutral-0 active:border-none   focus:outline-none       
    focus:border-red-700       
    focus:border-2   dark:text-neutral-0 dark:border-neutral-600 dark:hover:border-none dark:hover:text-neutral-900 dark:hover:bg-red-500 '   onClick={() => removeCard(index)}>Remove</button>
            <label className="inline-flex items-center cursor-pointer" onChange={() => toggleActive(index)} >
              <input
                type="checkbox"
                checked={item.isActive} 
                className="sr-only peer"
              />
              <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-red-400 dark:peer-focus:ring-red-400 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2.5px] after:start-[2px] after:bg-white after:shadow-check after:rounded-full after:h-[1.20rem] after:w-[1.20rem] after:transition-all dark:border-gray-600 peer-checked:bg-red-700 dark:peer-checked:bg-red-500 cursor-pointer"  ></div>
            </label>
          </div>
        </section>
      ))}
    </main>
  );
};

export default Main;
