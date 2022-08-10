import './Products.css';
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import { useEffect } from 'react';
import { getProducts,deleteProducts } from '../../redux/apiCalls';

export default function Products() {
  
    const dispatch=useDispatch();
    
    useEffect(()=>{
            getProducts(dispatch)
    },[dispatch])
    
    
     const handleClick=(id)=>{
          deleteProducts(id,dispatch);       
     }

     const products=useSelector((state)=>state.product.product);
     console.log(products);

     const columns = [
        { field: '_id', headerName: 'ID', width: 250 },
        { field: 'Product', headerName: 'Product', width: 150 ,renderCell:(params)=>{
          return(
            <div style={{display:"flex",alignItems:"center"}}>
                <img   src={params.row.img} alt="" style={{height:"50px",width:"50px", borderRadius:"50%",marginRight:"10px"}} />
                {params.row.title}
            </div>
          )
        }},
        {
          field: 'price',
          headerName: 'price',
          description: 'This column has a value getter and is not sortable.',
          sortable: true,
          width: 160,
    
        },
        {
            field: 'inStock',
            headerName: 'stock',
            description: 'This column has a value getter and is not sortable.',
            sortable: true,
            width: 100,
      
          },
          {
            field:"action",
            headerName:"Action",
            width:150,
            renderCell:(params)=>{
              return(
                <div className='productAction'>
                  <Link to={"/product/EditProduct/"+params.row._id}>
                     <button>Edit</button>
                  </Link>
                  
                   <DeleteOutline style={{cursor:'pointer',color:"red"}} onClick={()=>{handleClick(params.row._id);}} />
                </div>
              )
            }
          }
      ];

    return (
    <div className="Products">
        
       <DataGrid
        rows={products}
        columns={columns}
        pageSize={10}
        getRowId={row=>row._id}
        rowsPerPageOptions={[5]}
        checkboxSelection
        disableSelectionOnClick
      />
  
    </div>
  )
}
