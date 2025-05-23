import React, {useState} from 'react'

const Header = () => {
  const [isDark, setIsDark] = useState(false);
  const toggleTheme = () => {
    setIsDark(!isDark);
    if (!isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  };
  return (
    <header className="w-full min-h-[74px] h-auto bg-neutral-0 border border-solid border-neutral-200 rounded-[20px] shadow-custom-soft flex items-center justify-between px-[16px] py-[12px] max-w-[1170px] dark:border-none dark:shadow-none dark:bg-neutral-800 dark:color-neutral-0">
      <div><img src={`./assets/images/logo${isDark ? '-white' : ''}.svg`} alt="Logo Extensions" className="w-[179px] h-[41px]" id="svgLogo"/></div>
      <div className="bg-neutral-100 w-[50px] h-[50px] flex items-center justify-center rounded-[12px] cursor-pointer hover:bg-neutral-300 transition-colors duration-300 dark:bg-neutral-700 dark:hover:bg-neutral-600 focus:outline-none       
    focus:border-red-700       
    focus:border-2" onClick={toggleTheme}><img src={`./assets/images/icon-${isDark ? 'sun' : 'moon'}.svg`} alt="Theme Toggle"  tabIndex={0} /></div>
    </header>
  )
}

export default Header