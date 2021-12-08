import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function Deletecustomer(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };

    const deleteCustomer = () => {
        props.deleteCustomer(props.customer.links[1].href);
        handleClose();
    }
    
    return(
        <div>
           <Tooltip title='Delete this row'>
                <Button
                    size='large'
                    color='error'
                    startIcon={<DeleteIcon />}
                    onClick={handleClickOpen}>
                </Button>
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
            >
                <DialogTitle color='error'>
                    {"Delete a customer?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText color='text'>
                        Deleting a customer will remove all of the customers data and trainings permanetly.
                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button
                        variant='outlined'
                        size='medium'
                        color='primary'
                        onClick={handleClose}>
                        Cancel
                    </Button>
                    <Button
                        variant='contained'
                        size='medium'
                        color='error'
                        onClick={deleteCustomer}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}