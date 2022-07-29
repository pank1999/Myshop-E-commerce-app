import './Products.css';
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {productRows} from "../../dummyDataCharts";
import { useState } from 'react';


export default function Products() {
  
    const [data,setData]=useState(productRows);
     const handleClick=(id)=>{
         setData(data.filter(items=>items.id!==id));
     }

     const columns = [
        { field: 'id', headerName: 'ID', width: 70 },
        { field: 'Product', headerName: 'Product', width: 150 ,renderCell:(params)=>{
          return(
            <div style={{display:"flex",alignItems:"center"}}>
                <img   src={params.row.avatar} alt="" style={{height:"35px",width:"35px", borderRadius:"50%",marginRight:"10px"}} />
                {params.row.name}
            </div>
          )
        }},

        {
          field: 'status',
          headerName: 'Status',
          type: 'number',
          width: 90,
        },
        {
          field: 'price',
          headerName: 'price',
          description: 'This column has a value getter and is not sortable.',
          sortable: true,
          width: 160,
    
        },
        {
            field: 'stock',
            headerName: 'stock',
            description: 'This column has a value getter and is not sortable.',
            sortable: true,
            width: 160,
      
          },
          {
            field:"action",
            headerName:"Action",
            width:150,
            renderCell:(params)=>{
              return(
                <div className='productAction'>
                  <Link to={"/product/EditProduct/"+params.row.id}>
                     <button>Edit</button>
                  </Link>
                  
                   <DeleteOutline style={{cursor:'pointer'}} onClick={()=>{handleClick(params.row.id);}} />
                </div>
              )
            }
          }
      ];

    return (
    <div className="Products">
        
       <DataGrid
        rows={data}
        columns={columns}
        pageSize={10}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
      />
  
    </div>
  )
}
