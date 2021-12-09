import React from 'react';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import DeleteIcon from '@mui/icons-material/Delete';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import IconButton from '@mui/material/IconButton';

export default function Deletetraining(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
  
    const handleClose = () => {
        setOpen(false);
    };

    const deleteTraining = () => {
        props.deleteTraining(props.training.links[1].href);
        handleClose();
    }
    
    return(
        <div>
           <Tooltip title='Delete this row'>
                <IconButton
                     sx={{
                        ml: -1.35,
                      }}
                    size='large'
                    color='error'
                    onClick={handleClickOpen}>
                    <DeleteIcon fontSize='inherit' />
                </IconButton>
            </Tooltip>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby='alert-dialog-title'
                aria-describedby='alert-dialog-description'
            >
                <DialogTitle color='error' id='alert-dialog-title'>
                    {'Delete a training?'}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText color='text' id='alert-dialog-description'>
                        Deleting a training will only delete this training and the customer will remain.
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
                        onClick={deleteTraining}>
                        Delete
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
}