import "./Transactions.css";
import { DataGrid } from '@mui/x-data-grid';
import { TransactionData } from "../../dummyDataCharts";
import { useState } from "react";
import { Link } from "react-router-dom";

export default function Transactions() {
    const [Data,setData]=useState(TransactionData);
    const columns = [
        { field: 'id', headerName: 'ID', width: 50 },
        { field: 'userID', headerName: 'User', width: 150 ,renderCell:(params)=>{
          return(
            <div style={{display:"flex",alignItems:"center"}}>
                <img   src={params.row.avatar ?params.row.avatar :"https://ps.w.org/user-avatar-reloaded/assets/icon-256x256.png?rev=2540745"} alt="" style={{height:"35px",width:"35px", borderRadius:"50%",marginRight:"10px"}} />
                {params.row.userID}
            </div>
          )
        }},
        { field: 'transactionID', headerName: 'Transaction ID', width: 200 },
        {
          field: 'status',
          headerName: 'Status',
          width: 90,
        },
        {
          field: 'date',
          headerName: 'Date',
          description: 'This column has a value getter and is not sortable.',
          sortable: true,
          width: 100,
    
        },
        {
            field: 'amount',
            headerName: 'Amount',
            description: 'This column has a value getter and is not sortable.',
            sortable: true,
            type:"number",
            width: 100,
      
          },
          {
            field:"action",
            headerName:"Action",
            width:150,
            renderCell:(params)=>{
              return(
                <div className='UserAction'>
                  <Link to={"/Users/EditUser/"+params.row.id}>
                     <button>View</button>
                  </Link>
                  
                   {/* <DeleteOutline style={{cursor:'pointer'}} onClick={()=>{handleClick(params.row.id);}} /> */}
                </div>
              )
            }
          }
      ];
    return (
    <div className="Transaction">
        <DataGrid
        rows={Data}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[10]}
        checkboxSelection
        disableSelectionOnClick
       />
    </div>
  )
}
