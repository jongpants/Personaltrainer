import React, {useState, useEffect} from 'react';
import '@mui/material/Grid';
import {
  DataGrid,
  GridToolbar,
} from '@mui/x-data-grid';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import Addcustomer from './Addcustomer';
import Editcustomer from './Editcustomer';
import Deletecustomer from './Deletecustomer';
import Addtraining from './Addtraining';

function Customerlist() {
  const [customer, setCustomer] = useState([]);
  const [pageSize, setPageSize] = React.useState(10);

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
  };

  useEffect(() => fetchData(), []);

  const saveCustomer = (customer) => {
    fetch('https://customerrest.herokuapp.com/api/customers', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    })
    .then(res => fetchData())
    .catch(err => console.error(err))
  }

  const saveTraining = (training) => {
    fetch('https://customerrest.herokuapp.com/api/trainings', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(training)
    })
    .then(res => fetchData())
    .catch(err => console.error(err))
  }

  const updateCustomer = (customer, link) => {
    fetch(link, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(customer)
    })
    .then(res => fetchData())
    .catch(err => console.error(err))
  }

  const removeCustomer = (link) => {
    fetch(link, {method: 'DELETE'})
    .then(res => fetchData())
    .catch(err => console.error(err))
  };


  const columns = [
    {
      headerName: '',
      field: 'Delete',
      disableExport: true,
      sortable: false,
      filterable: false,
      flex: 1,
      renderCell: (row) => (
        <Deletecustomer deleteCustomer={removeCustomer} customer={row.row} />
      ),
    },
    {
      headerName: '',
      field: 'Edit',
      disableExport: true,
      sortable: false,
      filterable: false,
      flex: 1,
      renderCell: (row) => (
        <Editcustomer editCustomer={updateCustomer} customer={row.row} />
      ),
    },
    {
      headerName: '',
      field: 'Training',
      disableExport: true,
      sortable: false,
      filterable: false,
      flex: 1,
      renderCell: (row) => (
        <Addtraining addTraining={saveTraining} customer={row.row} />
      ),
    },
    {
      headerName: 'First Name',
      field: 'firstname',
      flex: 15
    },
    {
      headerName: 'Last Name',
      field: 'lastname',
      flex: 15
    },
    {
      headerName: 'Street Address',
      field: 'streetaddress',
      flex: 15
    },
    {
      headerName: 'Postcode',
      field: 'postcode',
      flex: 15
    },
    {
      headerName: 'City',
      field: 'city',
      flex: 15
    },
    {
      headerName: 'Email',
      field: 'email',
      flex: 15
    },
    {
      headerName: 'Phone',
      field: 'phone',
      flex: 15,
    },
  ];

  return(
    <div> 
    <Addcustomer addCustomer={saveCustomer} /> 
    <DataGrid
      sx={{
        m: 2,
        mt: 5,
        border: 0,
        borderColor: 'success.light',
        '& .MuiDataGrid-cell:hover': {
          color: 'success.main',
        }
      }}
      rows={customer}
      columns={columns}
      autoHeight
      //autoPageSize
      //checkboxSelection
      disableSelectionOnClick
      disableColumnMenu
      
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]}
      components={{
        Toolbar: GridToolbar,
        color: 'success'
      }}
    />
    </div>
  );
}

export default Customerlist;