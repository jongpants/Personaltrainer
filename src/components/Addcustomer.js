import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import AddIcon from '@mui/icons-material/Add';

// -- Edited version of Carshop Addcar tutorial --

export default function Addcustomer(props) {
    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({
        firstname: ' ', lastname: ' ', streetaddress: ' ', postcode: ' ', city: ' ', email: ' ', phone: ' '  
    });

    const handleClickOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };

    const handleInputChange = (event) => {
        setCustomer({...customer, [event.target.name]: event.target.value})

    }

    const addCustomer = () => {
        props.addCustomer(customer);
        handleClose();
    }

    return(
        <div>
            <Button
                sx={{
                    mt: -4,
                    ml: 2,
                    float: 'left',
                }}
                variant='contained'
                size='small'
                color='primary'
                startIcon={<AddIcon />}
                onClick={handleClickOpen}>
                Add Customer
            </Button>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle color='primary' >New Customer</DialogTitle>
                <DialogContent>
                    <TextField
                        autoFocus
                        margin='dense'
                        name='firstname'
                        value={customer.firstname}
                        onChange={e => handleInputChange(e)}
                        label='First Name'
                        variant='standard'
                        sx={{
                            m:2,
                            ml:5,
                        }}
                    />
                    <TextField
                        margin='dense'
                        name='lastname'
                        value={customer.lastname}
                        onChange={e => handleInputChange(e)}
                        label='Last Name'
                        variant='standard'
                        sx={{
                            m:2,
                            ml:5,
                        }}
                    />
                    <TextField
                        margin='dense'
                        name='streetaddress'
                        value={customer.streetaddress}
                        onChange={e => handleInputChange(e)}
                        label='Street Address'
                        variant='standard'
                        sx={{
                            m:2,
                            ml:5,
                        }}
                    />
                    <TextField
                        margin='dense'
                        name='postcode'
                        value={customer.postcode}
                        onChange={e => handleInputChange(e)}
                        label='Postcode'
                        variant='standard'
                        sx={{
                            m:2,
                            ml:5,
                        }}
                    />
                    <TextField
                        margin='dense'
                        name='city'
                        value={customer.city}
                        onChange={e => handleInputChange(e)}
                        label='City'
                        variant='standard'
                        sx={{
                            m:2,
                            ml:5,
                        }}
                    />
                     <TextField
                        margin='dense'
                        name='email'
                        value={customer.email}
                        onChange={e => handleInputChange(e)}
                        label='Email'
                        variant='standard'
                        sx={{
                            m:2,
                            ml:5,
                        }}
                    />
                    <TextField
                        margin='dense'
                        name='phone'
                        value={customer.phone}
                        onChange={e => handleInputChange(e)}
                        label='Phone'
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
                        onClick={addCustomer}>
                         Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}