import './Product.css'
import {Link, useLocation} from "react-router-dom";
import Chart from "../../components/Charts/Chart";
import {productData} from "../../dummyDataCharts";
import { Publish } from '@material-ui/icons';
import { useSelector } from 'react-redux';
import { useEffect, useMemo, useState } from 'react';
import { userRequest } from '../../requestMethod';


export default function Product() {
   const location = useLocation();
   const productId=location.pathname.split("/")[3];
   const [productStats,setProductStats]=useState([]);

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
     const getProductStats = async ( )=>{
      try{
          const res=await userRequest.get(`order/income?pid=`+productId);
          res.data.map(item=>
            setProductStats(prev=>[
              ...prev,
              {name:months[item._id-1],"Sales":item.total},
            ])
          )
      }catch(err){

      }
     }
     getProductStats();
  },[months]);


   const product = useSelector((state)=>state.product.product.find((product)=>product._id===productId));
   console.log(product);
   console.log(productStats);
    return (
    <div className='Product'>
         <div className="ProductTitleContainer">
            <h2 className="ProductTitle">Product</h2>
            <Link to="/newProduct">
                <button className="CreateProductButton" >Create</button>   
            </Link>
            
        </div>
        <div className='ProductTop'>
            <div className='ProductTopLeft'>
                <Chart  Title="Sale Performance " data={productStats} dataKey="Sales"/>
            </div>
            <div className='ProductTopRight'>
                <div className='ProductInfoTop'>
                     <img className='ProductImg' src={product.img} alt=''/>
                     <div>
                       <span className='ProductName'>{product.title}</span> <br/>
                       <span className='ProductName' style={{color:"gray"}}>{product.desc}</span>
                     </div>
                     
                </div>
                <div className='ProductInfoBottom'>
                  <div className='ProductInfoItem'>
                     
                     <span className='ProductInfoKey'>Id: </span>
                     <span className='ProductInfoValue'>{product._id}</span>
                  </div>
                  <div className='ProductInfoItem'>
                     <span className='ProductInfoKey'>Price</span>
                     <span className='ProductInfoValue'>{product.price}</span>
                  </div>
                  <div className='ProductInfoItem'>
                     <span className='ProductInfoKey'>InStock</span>
                     <span className='ProductInfoValue'>{product.inStock?"Yes":"No"}</span>
                  </div>
                </div>
                
            </div>
        </div>
        <div className='ProductBottom'>
        <h2>Edit Product</h2>
        <form className='ProductForm'>
             <div className='ProductBottomLeft'>
                    <labal>Product name</labal>
                    <input type="text"  placeholder={product.title}/>
                    <labal>Description</labal>
                    <input type="text" placeholder={product.desc} />
                    <labal htmlFor="stock">In Stock</labal>
                    <select name='stock' id='stock'>
                        <option value="true"  >yes</option>
                        <option value="false">No</option>
                    </select>
                    <labal>Price</labal>
                    <input type="Number" placeholder={product.price} />
                    

            </div>
            <div className='ProductBottomRight'>
                          <div className="UserUpdateUpload">
                                <img className="UploadImg" src={product.img} alt=""/>
                                <labal htmlFor="file"><Publish /> </labal>
                                <input type="file" id="file" />
                           </div>
                           <button className="UserUpdateButton">Update</button>
            </div>

        </form>
             
        </div>
    </div>
  )
}
