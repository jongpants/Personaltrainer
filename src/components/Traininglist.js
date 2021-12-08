import React, {useState, useEffect} from 'react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-material.css';
import '@mui/material/Grid';
import { DataGrid } from '@mui/x-data-grid';
import syncFetch from 'sync-fetch';
import { format } from 'date-fns';
import Deletetraining from './Deletetraining';


function Traininglist() {
  const [training, setTraining] = useState([]);
  const [pageSize, setPageSize] = React.useState(10);

  const fetchData = () => {
    fetch('https://customerrest.herokuapp.com/api/trainings')
    .then(response => response.json())
    .then(data => {
      data.content.forEach((training, index) => {
        training.id = index;
        var data = syncFetch(training.links[2].href).json()
        training.customer = data.firstname + ' ' + data.lastname;
      });
      setTraining(data.content)
    })
    .catch(err => console.error(err))
  }

  useEffect(() => fetchData(), []);

  const removeTraining = (link) => {
    console.log(link)
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
        <Deletetraining deleteTraining={removeTraining} training={row.row} />
      ),
    },
    {
      headerName: 'Activity',
      field: 'activity',
      flex: 28,
    },
    {
      headerName: 'Date',
      field: 'date',
      flex: 28,
      valueFormatter: (params) => {
        return format(new Date (params.value), 'dd/MM/yyy');
      }
    },
    {
      headerName: 'Duration (min)',
      field: 'duration',
      flex: 28,
    },
    {
      headerName: 'Customer',
      field: 'customer',
      flex: 28,
    },
  ];

  return(
    <div> 
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
      rows={training}
      columns={columns}
      autoHeight
      //autoPageSize
      //checkboxSelection
      disableSelectionOnClick
      disableColumnMenu
      
      pageSize={pageSize}
      onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
      rowsPerPageOptions={[5, 10, 15, 20, 25, 30, 35, 40, 45, 50]}
    />
    </div>
  );
}

export default Traininglist;