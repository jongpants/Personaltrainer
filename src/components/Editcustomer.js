import React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import EditIcon from '@mui/icons-material/Edit';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';

// -- Edited version of Carshop Editcar tutorial --

export default function Editcustomer(props) {
    const [open, setOpen] = React.useState(false);
    const [customer, setCustomer] = React.useState({
        firstname: ' ', lastname: ' ', streetaddress: ' ', postcode: ' ', city: ' ', email: ' ', phone: ' '  
    });

    const handleClickOpen = () => {
        setCustomer({
            firstname: props.customer.firstname,
            lastname: props.customer.lastname,
            streetaddress: props.customer.streetaddress,
            postcode: props.customer.postcode,
            city: props.customer.city,
            email: props.customer.email,
            phone: props.customer.phone
        })
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };

    const handleInputChange = (event) => {
        setCustomer({...customer, [event.target.name]: event.target.value})
    }

    const editCustomer = () => {
        props.editCustomer(customer, props.customer.links[1].href);
        handleClose();
    }



    return(
        <div>
            <Tooltip title='Edit this row'>
                <IconButton
                    sx={{
                        ml: -1.35,
                      }}
                    size='large'
                    color='secondary'
                    onClick={handleClickOpen}>
                    <EditIcon fontSize='inherit' />
                </IconButton>
            </Tooltip>
            <Dialog open={open} onClose={handleClose}>
                <DialogTitle color='secondary' >Edit Customer</DialogTitle>
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
                        color='primary'
                        onClick={editCustomer}>
                         Save
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}