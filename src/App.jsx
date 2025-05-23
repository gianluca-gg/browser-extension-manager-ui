import React, {useState, useMemo} from "react";
import './App.scss';
import initialData from './data/data.json';
import Header from './Header';
import Main from './Main';
import PluginFilter from './PluginFilter';

// console.log(data);

export default function App() {
    const [data, setData] = useState(initialData);   
const [filter, setFilter] = useState('all');    

const visibleData = useMemo(() => {
  switch (filter) {
    case 'active':   return data.filter(i =>  i.isActive);
    case 'inactive': return data.filter(i => !i.isActive);
    default:         return data;
  }
}, [data, filter]);
    return (
        <div className="px-[32px] lg:px-[32px] py-[16px] md:py-[40px] flex flex-col bg-light-blue dark:bg-dark-blue text-[16px] items-center h-full
        ">
            <Header data={data} setData={setData} />
            <PluginFilter filter={filter} setFilter={setFilter} />
            <Main data={visibleData} setData={setData} />
        </div>
    )
}


