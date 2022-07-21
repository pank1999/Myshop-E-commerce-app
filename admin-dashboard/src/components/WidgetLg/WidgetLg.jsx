import "./WidgetLg.css";

export default function WidgetLg() {

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
           <tr className="WidgetLgTr">
               <td className="WidgetLgUser" >
                  <img src="https://d1fdloi71mui9q.cloudfront.net/c9iUgtZMRdWpZx1UQcxd_82WH7SO06X0IQ9WI" className="WidgetLgImg" alt="img" />
                  <span className="WidgetLgName">pankaj pandey</span> 
                </td>
               <td className="WidgetLgTd">20 Jun 2022</td>
               <td className="WidgetLgTd">$ 453</td>
               <td className="WidgetLgTd">
                    <Button type="Approved"></Button>          
               </td>
           </tr>
           <tr className="WidgetLgTr">
               <td className="WidgetLgUser">
                  <img src="https://d1fdloi71mui9q.cloudfront.net/c9iUgtZMRdWpZx1UQcxd_82WH7SO06X0IQ9WI" className="WidgetLgImg" alt="img" />
                  <span className="WidgetLgName">pankaj pandey</span> 
                </td>
               <td className="WidgetLgTd">20 Jun 2022</td>
               <td className="WidgetLgTd">$ 453</td>
               <td className="WidgetLgTd">
                    <Button type="Declined"></Button>          
               </td>
           </tr>
           <tr className="WidgetLgTr">
               <td className="WidgetLgUser">
                  <img src="https://d1fdloi71mui9q.cloudfront.net/c9iUgtZMRdWpZx1UQcxd_82WH7SO06X0IQ9WI" className="WidgetLgImg" alt="img" />
                  <span className="WidgetLgName">pankaj pandey</span> 
                </td>
               <td className="WidgetLgTd">20 Jun 2022</td>
               <td className="WidgetLgTd">$ 453</td>
               <td className="WidgetLgTd">
                    <Button type="Approved"></Button>          
               </td>
           </tr>
           <tr className="WidgetLgTr">
               <td className="WidgetLgUser">
                  <img src="https://d1fdloi71mui9q.cloudfront.net/c9iUgtZMRdWpZx1UQcxd_82WH7SO06X0IQ9WI" className="WidgetLgImg" alt="img" />
                  <span className="WidgetLgName">pankaj pandey</span> 
                </td>
               <td className="WidgetLgTd">20 Jun 2022</td>
               <td className="WidgetLgTd">$ 453</td>
               <td className="WidgetLgTd">
                    <Button type="Approved"></Button>          
               </td>
           </tr>
           <tr className="WidgetLgTr">
               <td className="WidgetLgUser">
                  <img src="https://d1fdloi71mui9q.cloudfront.net/c9iUgtZMRdWpZx1UQcxd_82WH7SO06X0IQ9WI" className="WidgetLgImg" alt="img" />
                  <span className="WidgetLgName">pankaj pandey</span> 
                </td>
               <td className="WidgetLgTd">20 Jun 2022</td>
               <td className="WidgetLgTd">$ 453</td>
               <td className="WidgetLgTd">
                    <Button type="Pending"></Button>          
               </td>
           </tr>
           <tr className="WidgetLgTr">
               <td className="WidgetLgUser">
                  <img src="https://d1fdloi71mui9q.cloudfront.net/c9iUgtZMRdWpZx1UQcxd_82WH7SO06X0IQ9WI" className="WidgetLgImg" alt="img" />
                  <span className="WidgetLgName">pankaj pandey</span> 
                </td>
               <td className="WidgetLgTd">20 Jun 2022</td>
               <td className="WidgetLgTd">$ 453</td>
               <td className="WidgetLgTd">
                    <Button type="Approved"></Button>          
               </td>
           </tr>
       </table>
    </div>
  )
}
