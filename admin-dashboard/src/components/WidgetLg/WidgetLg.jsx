import { useState ,useEffect} from "react";
import "./WidgetLg.css";
import { userRequest } from '../../requestMethod';
import {format} from "timeago.js";
export default function WidgetLg() {

  const [Orders,setOrders]=useState([]);
   
   useEffect(()=>{
     const getOrders= async ()=>{
        try{
            const res= await userRequest.get("/order");
            setOrders(res.data);
            
          }catch(err){
           console.log(err);
          }
     }
      getOrders(); 
   },[])
  
  const Button = ({type})=>{
      return (
        <button className={"WidgetLgButton "+type} >{type}</button>
      );
  }

  return (
    <div className="WidgetLg">
        <h3 className="WidgetLgTilte">Latest Transactions</h3>
       <table className="WidgetLgTable">
           <tr className="WidgetLgTr">
               <th className="WidgetLgTh">Customer</th>
               <th className="WidgetLgTh">Date</th>
               <th className="WidgetLgTh">Amount</th>
               <th className="WidgetLgTh">Status</th>
           </tr>
           {Orders.map(Order=>(

           <tr className="WidgetLgTr" key={Order._id}>
               <td className="WidgetLgUser" >
                  {/* <img src="https://d1fdloi71mui9q.cloudfront.net/c9iUgtZMRdWpZx1UQcxd_82WH7SO06X0IQ9WI" className="WidgetLgImg" alt="img" /> */}
                  <span className="WidgetLgName">{Order.userId}</span> 
                </td>
               <td className="WidgetLgTd">{format(Order.createdAt)}</td>
               <td className="WidgetLgTd">$ {Order.amount}</td>
               <td className="WidgetLgTd">
                    <Button type={Order.status}></Button>          
               </td>
           </tr>
           ))}           
       </table>
    </div>
  )
}
