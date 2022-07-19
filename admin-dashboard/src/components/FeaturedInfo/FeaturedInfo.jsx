import './FeaturedInfo.css';
import {ArrowDownward, ArrowUpward} from '@material-ui/icons';

export default function FeaturedInfo() {
  return (
    <div className='FeaturedInfo'>
       <div className='FeaturedItem'>
           <span className='FeaturedTitle'>Revenue</span>
           <div className='FeaturedMoneyContainer'>
               <span className='FeaturedMoney'>$2,433</span>
               <span className='FeaturedMoneyRate'>  -33% <ArrowDownward style={{color:"red"}}/></span>
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
