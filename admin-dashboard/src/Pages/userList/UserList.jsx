import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {userRows} from "../../dummyDataCharts";
import { useState } from 'react';



 
  
  
export default function UserList() {

  const [data,setData]=useState(userRows);
  const handleClick=(id)=>{
      setData(data.filter(items=>items.id!==id));
  }

  const columns = [
    { field: 'id', headerName: 'ID', width: 70 },
    { field: 'User', headerName: 'User', width: 150 ,renderCell:(params)=>{
      return(
        <div style={{display:"flex",alignItems:"center"}}>
            <img   src={params.row.avatar} alt="" style={{height:"35px",width:"35px", borderRadius:"50%",marginRight:"10px"}} />
            {params.row.username}
        </div>
      )
    }},
    { field: 'email', headerName: 'Email', width: 200 },
    {
      field: 'status',
      headerName: 'Status',
      type: 'number',
      width: 90,
    },
    {
      field: 'transaction',
      headerName: 'Transaction',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 160,

    },
    {
        field: 'avatar',
        headerName: 'Avatar',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 160,
  
      },
      {
        field:"action",
        headerName:"Action",
        width:150,
        renderCell:(params)=>{
          return(
            <div className='UserAction'>
              <Link to={"/Users/EditUser/"+params.row.id}>
                 <button>Edit</button>
              </Link>
              
               <DeleteOutline style={{cursor:'pointer'}} onClick={()=>{handleClick(params.row.id);}} />
            </div>
          )
        }
      }
  ];
    return (
    <div className='userList'>
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
