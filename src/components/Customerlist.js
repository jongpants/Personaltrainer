import React, {useState, useEffect} from 'react';
import {useRef} from 'react';
import {AgGridReact} from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import AddIcon from '@mui/icons-material/Add';
import TextField from '@mui/material/TextField';
import Tooltip from '@mui/material/Tooltip';
import '@mui/material/Grid';
import {DataGrid} from '@mui/x-data-grid';

function Customerlist() {
  const [customer, setCustomer] = useState([]);

  const fetchData = () => {
    fetch('https://customerrest.herokuapp.com/api/customers')
    .then(response => response.json())
    .then(data => {
      data.content.forEach((customer, index) => {
        customer.id = index;
      });
      setCustomer(data.content)
    })
    .catch(err => console.error(err))
  }

  useEffect(() => fetchData(), []);

  const gridRef = useRef();

  const columns = [
    // { field: 'id', headername: 'ID'},
    {
      headerName: 'First Name',
      field: 'firstname',
      flex: 1
    },
    {
      headerName: 'Last Name',
      field: 'lastname',
      flex: 1
    },
    {
      headerName: 'Street Address',
      field: 'streetaddress',
      flex: 1
    },
    {
      headerName: 'Postcode',
      field: 'postcode',
      flex: 1
    },
    {
      headerName: 'City',
      field: 'city',
      flex: 1
    },
    {
      headerName: 'Email',
      field: 'email',
      flex: 1
    },
    {
      headerName: 'Phone',
      field: 'phone',
      flex: 1,
    },
  ];

  return(
    <div className='ag-theme-material' style={{width: '100%'}}>  
    <DataGrid
      sx={{
        m: 2,
        height: 1,
        boxShadow: 2,
        border: 1,
        borderColor: 'success.light',
        '& .MuiDataGrid-cell:hover': {
          color: 'success.main',
        }
      }}
      rows={customer}
      columns={columns}
      autoHeight
      checkboxSelection
      disableSelectionOnClick
    />
    </div>
  );
}

export default Customerlist;