import './Product.css'
import {Link} from "react-router-dom";
import Chart from "../../components/Charts/Chart";
import {productData} from "../../dummyDataCharts";
import { Publish } from '@material-ui/icons';


export default function Product() {
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
                <Chart  Title="Sale Performance " data={productData} dataKey="Sales"/>
            </div>
            <div className='ProductTopRight'>
                <div className='ProductInfoTop'>
                     <img className='ProductImg' src='https://rukminim1.flixcart.com/image/312/312/kpinwy80/headphone/r/1/q/mwp22hn-a-apple-original-imag3qe9eqkfhmg8.jpeg?q=70' alt=''/>
                     <span className='ProductName'>Apple AirPods</span>
                </div>
                <div className='ProductInfoBottom'>
                  <div className='ProductInfoItem'>
                     
                     <span className='ProductInfoKey'>Id</span>
                     <span className='ProductInfoValue'>123</span>
                  </div>
                  <div className='ProductInfoItem'>
                     <span className='ProductInfoKey'>Sales</span>
                     <span className='ProductInfoValue'>$1233</span>
                  </div>
                  <div className='ProductInfoItem'>
                     <span className='ProductInfoKey'>status</span>
                     <span className='ProductInfoValue'>Active</span>
                  </div>
                  <div className='ProductInfoItem'>
                     <span className='ProductInfoKey'>Price</span>
                     <span className='ProductInfoValue'>$123</span>
                  </div>
                </div>
                
            </div>
        </div>
        <div className='ProductBottom'>
        <h2>Edit Product</h2>
        <form className='ProductForm'>
             <div className='ProductBottomLeft'>
                    <labal>Product name</labal>
                    <input type="text"  placeholder='Product name'/>
                    <labal htmlFor="stock">In Stock</labal>
                    <select name='stock' id='stock'>
                        <option value="Yes"  >yes</option>
                        <option value="No">No</option>
                    </select>
                    <labal htmlFor="Active">Active</labal>
                    <select name='Active' id='Active'>
                        <option value="Yes" >yes</option>
                        <option value="No">No</option>
                    </select>
                    <labal>Price</labal>
                    <input type="Number" placeholder='Number' />

            </div>
            <div className='ProductBottomRight'>
                          <div className="UserUpdateUpload">
                                <img className="UploadImg" src="https://rukminim1.flixcart.com/image/312/312/kpinwy80/headphone/r/1/q/mwp22hn-a-apple-original-imag3qe9eqkfhmg8.jpeg?q=70"  alt=""/>
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
