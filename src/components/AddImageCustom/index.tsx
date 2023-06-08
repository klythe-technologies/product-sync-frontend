import React from "react";
import {
  Box,
  Paper,

} from '@mui/material';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddImageDialog from '../AddImageDialog';

const AddImageCustomComponent = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Paper
        variant="outlined"
        sx={{
          width: 128,
          height: 110,
          marginBottom: '10px',
          display: 'flex'
        }}>
        <Box sx={{ alignItems: 'center', display: 'flex', margin: 'auto' }}>
          <AddAPhotoIcon onClick={handleClickOpen} />
          <AddImageDialog
            open={open}
            handleClose={handleClose} />
        </Box>
      </Paper>
    </Box>
  )
}
export default AddImageCustomComponent;