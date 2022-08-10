import './FeaturedInfo.css';
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';
import { useEffect, useState } from 'react';
import {userRequest} from "../../requestMethod";

export default function FeaturedInfo() {
    const [income,setIncome]=useState([]);
     const [perc,setPerc]=useState(0);
    useEffect(()=>{
        const getIncome=async ()=>{
            const res=await userRequest.get("order/income");
            setIncome(res.data);
            setPerc((res.data[1].total*100)/(res.data[0].total-100));
        }
        getIncome();
    },[])
    console.log(income);
  return (
    <div className='FeaturedInfo'>
       <div className='FeaturedItem'>
           <span className='FeaturedTitle'>Revenue</span>
           <div className='FeaturedMoneyContainer'>
               <span className='FeaturedMoney'>$2324</span>
               <span className='FeaturedMoneyRate'> -34.2% <ArrowDownward style={{color:"red"}}/></span>
           </div>
           <span className='FeaturedSub'>compared to last month</span>
       </div>

       <div className='FeaturedItem'>
           <span className='FeaturedTitle'>Sales</span>
           <div className='FeaturedMoneyContainer'>
               <span className='FeaturedMoney'>$5,433</span>
               <span className='FeaturedMoneyRate'> -13% <ArrowDownward  style={{color:"red"}}/> </span>
           </div>
           <span className='FeaturedSub'>compared to last month</span>
       </div>

       <div className='FeaturedItem'>
           <span className='FeaturedTitle'>Cost</span>
           <div className='FeaturedMoneyContainer'>
               <span className='FeaturedMoney'>$2,43</span>
               <span className='FeaturedMoneyRate'> +33% <ArrowUpward  style={{color:"green"}}/></span>
           </div>
           <span className='FeaturedSub'>compared to last month</span>
       </div>
    </div>
  )
}
