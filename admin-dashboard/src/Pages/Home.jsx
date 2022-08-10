import Chart from '../components/Charts/Chart';
import FeaturedInfo from '../components/FeaturedInfo/FeaturedInfo';
import './Home.css';
import {userData} from "../dummyDataCharts";
import WidgetSm from '../components/WidgetSm/WidgetSm';
import WidgetLg from '../components/WidgetLg/WidgetLg';
import { useEffect, useMemo, useState } from 'react';
import { userRequest } from '../requestMethod';


export default function Home() {
  const [userStats,setUserStats]=useState([]);
  const months=useMemo(
    ()=>[
    'Jan',
    "Feb",
    "Mar",
    "April",
    'May',
    'Jun',
    'July',
    'Aug',
    'Sep',
    "Oct",
    "Nov",
    "Dec"
  ],[]
  );
  useEffect(()=>{
     const getStats = async ( )=>{
      try{
          const res=await userRequest("/user/stats");
          res.data.map(item=>
            setUserStats(prev=>[
              ...prev,
              {name:months[item._id-1],"ActiveUser":item.total},
            ])
          )
      }catch(err){

      }
     }
     getStats();
  },[months]);

  console.log(userStats);

  return (
    <div className='Home'>
        <FeaturedInfo />
        <Chart data={userStats} Title="User Analytics" dataKey="ActiveUser" />
        <div className="HomeWidget">
             <WidgetSm />
             <WidgetLg />
        </div>
    </div>
  )
}
