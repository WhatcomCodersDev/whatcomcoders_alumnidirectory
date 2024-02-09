import React, { useState } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import Button from '@mui/material/Button';
import UserInfo from './UserInfo'; // Adjust the import path as needed

const UserInfoDialog = ({ defaultEmail, defaultPicture }) => {
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant='outlined' onClick={handleClickOpen}>
        Edit Profile
      </Button>
      <Dialog
        open={open}
        onClose={handleClose}
        aria-labelledby='form-dialog-title'
        fullWidth
        maxWidth='md' // Adjust size as needed
        BackdropProps={{
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(5px)',
          },
        }}
      >
        <DialogTitle id='form-dialog-title'>Edit Profile</DialogTitle>
        <DialogContent>
          <UserInfo
            defaultEmail={defaultEmail}
            defaultPicture={defaultPicture}
          />
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default UserInfoDialog;
