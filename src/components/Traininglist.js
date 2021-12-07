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
import syncFetch from 'sync-fetch';
import { format } from 'date-fns';


function Traininglist() {
  const [training, setTraining] = useState([]);

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

  const gridRef = useRef();

  const columns = [
    // { field: 'id', headername: 'ID'},
    {
      headerName: 'Activity',
      field: 'activity',
      flex: 1,
      editable: true
    },
    {
      headerName: 'Date',
      field: 'date',
      flex: 1,
      valueFormatter: (params) => {
        return format(new Date (params.value), 'dd/MM/yyy');
      }
    },
    {
      headerName: 'Duration (min)',
      field: 'duration',
      flex: 1,
    },
    {
      headerName: 'Customer',
      field: 'customer',
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
      rows={training}
      columns={columns}
      autoHeight
      checkboxSelection
      disableSelectionOnClick
      editMode= 'row'
    />
    </div>
  );
}

export default Traininglist;