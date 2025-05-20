import React from 'react';

const Main = ({data}) => {
  console.log(data);
  return (
    <main class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">

        {data.map((item, index) => (
          <section key={index}   class="bg-neutral-0 rounded-[20px] p-[20px] box-border h-[200px] flex flex-col justify-between">
            <div class="flex flex-row gap-[16px]">
            <img src={item.logo}></img>
            <div class="flex flex-col">
            <p>{item.name}</p>
            <p>{item.description}</p>
            </div>
            </div>
            <div class="flex flex-row flex justify-between">
            <button>Remove</button>
            <label class="inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" class="sr-only peer" />
            <div class="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600 dark:peer-checked:bg-blue-600"></div>
            <span class="ms-3 text-sm font-medium text-gray-900 dark:text-gray-300"></span>
            </label>
            </div>
            </section>
        ))}

    </main>
  )
}

export default Main