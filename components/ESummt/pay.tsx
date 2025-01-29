import React from 'react';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogTitle from '@mui/material/DialogTitle';
import { Button } from '@mui/material';
import Slide from '@mui/material/Slide';
import { TransitionProps } from '@mui/material/transitions';
import PaymentPortal from './ecpay.jsx'; // Import your PaymentPortal component

import { useMediaQuery } from "@mui/material";


const Transition = React.forwardRef(function Transition(
  props: TransitionProps & { children: React.ReactElement<any, any> },
  ref: React.Ref<unknown>
) {
  return <Slide direction="up" ref={ref} {...props} />;
});

export default function PayDialogSlide({ open, onClose, title, price, logoLink, width , userID, accommodation, isOpen}) {
  return (
    <Dialog
      open={open}
      TransitionComponent={Transition}
      keepMounted
      onClose={onClose}
      aria-describedby="alert-dialog-slide-description"
      fullWidth // Makes the dialog take the full width defined by `maxWidth`
      maxWidth="md" // Set the desired maxWidth ('xs', 'sm', 'md', 'lg', 'xl')
      sx={{
        '& .MuiDialog-paper': {
          width: {width}, // Custom width
          maxWidth: 'none', // Disable Material-UI's default max-width constraint
          overflowY: 'hidden', // Disable Material-UI's default overflow-x: hidden
        },
      }}
    >
      
      <DialogContent>
        <PaymentPortal title={title} price={price} logoLink={logoLink} userID={userID} accommodation={accommodation} isOpen={open}/>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel Transaction</Button>
      </DialogActions>
    </Dialog>
  );
}
