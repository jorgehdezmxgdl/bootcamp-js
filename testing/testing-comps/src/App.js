import * as React from 'react';
import  { useRef } from 'react'
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Swal from 'sweetalert2'


export default function App() {
  const [open, setOpen] = React.useState(false);
  const valueRef = useRef('');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleClickOpen2 = () => {
    var validRegex = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;
    if (valueRef.current.value.match(validRegex)) {
        Swal.fire({
          title: 'Information',
          text: 'The email is valid',
          confirmButtonText: 'Ok'
        });
    } else {
       Swal.fire({
        title: 'Error!',
        text: 'The email is not valid',
        icon: 'error',
        confirmButtonText: 'Close'
      });
    }
    setOpen(false);
  }

  return (
    <div>
      <Button variant="outlined" onClick={handleClickOpen}>
        Open form dialog
      </Button>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle>Subscribe</DialogTitle>
        <DialogContent>
          <DialogContentText>
            To subscribe to this website, please enter your email address here. We
            will send updates occasionally.
          </DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="e-mail"
            type="email"
            fullWidth
            inputRef={valueRef} 
            variant="standard"
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button onClick={handleClickOpen2}>Ok</Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}