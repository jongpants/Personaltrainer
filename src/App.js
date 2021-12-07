import './App.css';
import React, {useState} from 'react';
import Traininglist from './components/Traininglist';
import Customerlist from './components/Customerlist';
import AppBar from '@mui/material/AppBar';
import ToolBar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Tabs from '@mui/material/Tabs';
import Tab  from '@mui/material/Tab';

function App() {
  const [value, setValue] = useState('one');

  const handleChange = (event, value) => {
    setValue(value);
  };

  return (
    <div className='App'>
      <AppBar position='static' color='success' >
        <ToolBar variant='dense'>
          <Typography variant='h6'>
            Frontend Personaltrainer
          </Typography>
        </ToolBar>
        <Tabs 
          value={value}
          onChange={handleChange}
          color='inherit'
          textColor='inherit'
          centered
        >
          <Tab value='one' label='Customers' />
          <Tab value='two' label='Trainings' />
        </Tabs>
      </AppBar>
      {value === 'one' && <Customerlist />}
      {value === 'two' && <Traininglist />}
    </div>
  );
}

export default App;