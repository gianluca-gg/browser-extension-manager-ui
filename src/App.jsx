import React, {useState} from "react";
import './App.scss';
import data from './data/data.json';
import Header from './Header';
import Main from './Main';

// console.log(data);

export default function App() {
    const [appData, setAppData] = useState(data); 
    return (
        <div className="px-[135px] py-[16px] md:py-[40px] flex flex-col h-screen gap-[64px] bg-light-blue dark:bg-dark-blue
        ">
            <Header data={appData} setData={setAppData} />
            <Main data={appData} setData={setAppData} />
        </div>
    )
}


