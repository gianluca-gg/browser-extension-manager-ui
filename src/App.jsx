import React, {useState} from "react";
import './App.scss';
import data from './data/data.json';
import Header from './Header';
import Main from './Main';
import PluginFilter from './PluginFilter';

// console.log(data);

export default function App() {
    const [appData, setAppData] = useState(data); 
    return (
        <div className="px-[32px] lg:px-[32px] py-[16px] md:py-[40px] flex flex-col gap-[64px] bg-light-blue dark:bg-dark-blue text-[16px] items-center h-full
        ">
            <Header data={appData} setData={setAppData} />
            <PluginFilter data={appData} setData={setAppData} />
            <Main data={appData} setData={setAppData} />
        </div>
    )
}


