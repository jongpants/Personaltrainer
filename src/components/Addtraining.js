import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Tooltip from '@mui/material/Tooltip';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

// -- Hugely edited version of Carshop Addcar tutorial --

export default function Addtraining(props) {
    const [open, setOpen] = React.useState(false);
    const [training, setTraining] = React.useState({
        activity: ' ', date: ' ', duration: ' ', customer: ' '
    });

    const handleClickOpen = () => {
        setTraining({
            customer: props.customer.links[1].href
        })
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (event) => {
        setTraining({...training, [event.target.name]: event.target.value})

    }

    const addTraining = () => {
        props.addTraining(training);
        handleClose();
    }

    return(
        <div>
            <Tooltip title='Add training for customer'>
                <Button
                    size='large'
                    color='success'
                    startIcon={<FitnessCenterIcon />}
                    onClick={handleClickOpen}>
                </Button>
            </Tooltip>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle color='green' >Add Training</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin='dense'
                        name='activity'
                        value={training.activity}
                        onChange={e => handleInputChange(e)}
                        label='Activity'
                        variant='standard'
                        sx={{
                            m:2,
                            ml:5,
                        }}
                    />
                    <TextField
                        margin='dense'
                        name='date'
                        value={training.date}
                        onChange={e => handleInputChange(e)}
                        type='date'
                        variant='standard'
                        sx={{
                            m:2,
                            ml:5,
                            mt:4,
                        }}
                    />
                    <TextField
                        margin='dense'
                        name='duration'
                        value={training.duration}
                        onChange={e => handleInputChange(e)}
                        type='number'
                        label='Duration (min)'
                        variant='standard'
                        sx={{
                            m:2,
                            ml:5,
                        }}
                    />
                   
                </DialogContent>
                <DialogActions>
                    <Button
                        variant='outlined'
                        color='error'
                        onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant='outlined'
                        color='primary'
                        onClick={addTraining}>
                         Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}