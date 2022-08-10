import './userList.css';
import { DataGrid } from '@mui/x-data-grid';
import {DeleteOutline} from "@material-ui/icons";
import {Link} from "react-router-dom";
import {userRows} from "../../dummyDataCharts";
import { useEffect, useState } from 'react';
import {useDispatch, useSelector} from "react-redux";
import { deleteClient, getClients } from '../../redux/apiCalls';


 
  
  
export default function UserList() {

  const dispatch=useDispatch();

  useEffect(()=>{
        getClients(dispatch)
  },[dispatch])

  const [data,setData]=useState(userRows);
  const handleClick=(id)=>{
     deleteClient(id,dispatch);
     setData(data.filter(items=>items.id!==id));
  } 
  const clients=useSelector((state)=>state.client.currentClients);
  console.log(clients);

  const columns = [
    { field: '_id', headerName: 'ID', width: 150 },
    { field: 'userName', headerName: 'User', width: 150 ,renderCell:(params)=>{
      return(
        <div style={{display:"flex",alignItems:"center"}}>
            {/* <img   src={params.row.avatar} alt="" style={{height:"35px",width:"35px", borderRadius:"50%",marginRight:"10px"}} /> */}
            {params.row.userName}
        </div>
      )
    }},
    { field: 'email', headerName: 'Email', width: 150 },
    {
      field: 'status',
      headerName: 'Status',
      type: 'number',
      width: 90,
    },
    {
      field: 'dob',
      headerName: 'D.O.B',
      description: 'This column has a value getter and is not sortable.',
      sortable: false,
      width: 100,

    },
    {
        field: 'gender',
        headerName: 'Gender',
        description: 'This column has a value getter and is not sortable.',
        sortable: false,
        width: 100,
  
      },
      {
        field:"action",
        headerName:"Action",
        width:150,
        renderCell:(params)=>{
          return(
            <div className='UserAction'>
              <Link to={"/Users/EditUser/"+params.row._id}>
                 <button>Edit</button>
              </Link>
              
               <DeleteOutline style={{cursor:'pointer'}} onClick={()=>{handleClick(params.row._id);}} />
            </div>
          )
        }
      }
  ];
    return (
    <div className='userList'>
       <DataGrid
        rows={clients}
        columns={columns}
        pageSize={5}
        rowsPerPageOptions={[5]}
        checkboxSelection
        getRowId={row=>row._id}
        disableSelectionOnClick
      />
    </div>
  )
}
