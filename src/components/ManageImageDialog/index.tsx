import * as React from 'react';
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Paper,
  Box,
  Typography
} from '@mui/material';
import Image from 'next/image';
import AddImageDialog from '../AddImageDialog';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import DeleteIcon from '@mui/icons-material/Delete';

const ManageImageDialogBox = () => {
  const [open, setOpen] = React.useState(false);
  const [imageDialog, setImageDialog] = React.useState(false);

  // const handleClickOpen = () => {
  //   setOpen(true);
  // };

  const handleClose = () => {
    setOpen(false);
  };

  const handleAddImageClick = () => {
    setImageDialog(true);
  }

  const handleCloseAddImage = () => {
    setImageDialog(false);
  }

  return (
    <div>
      {/* <Button variant="outlined" onClick={handleClickOpen}>
        Open responsive dialog
      </Button> */}
      <Dialog
        open={open}
        onClose={handleClose}
        sx={{padding: '20px', maxWidth: '1190px'}}
        >
        <DialogContent
          sx={{
            maxWidth: '1190px'
          }}
        >
          <Box sx={{ display: 'flex', gap: '10%' }}>
            <Box>
              <Paper
                variant="outlined"
                sx={{
                  width: 708,
                  height: 488
                }}>
                <Box sx={{
                  alignItems: 'center',
                  display: 'flex',
                  justifyContent: 'center'
                }}>
                  {/* <Box sx={{ alignItems: 'center', display: 'flex', justifyContent: 'center' }}> */}
                  <Image
                    src={'/images/avatars/avatar.jpg'}
                    alt={'logo'}
                    width={256}
                    height={256} />
                  {/* </Box> */}
                </Box>
              </Paper>
              <Box sx={{ textAlign: 'start', marginTop: '40px', display: 'flex', gap: '35%' }}>
                <Box sx={{ display: 'flex' }}>
                  <InsertPhotoIcon sx={{ marginRight: '10px', width: '25px' }} />
                  <Typography sx={{ fontWeight: '500px' }}> Main image</Typography>
                </Box>
                <Box sx={{ display: 'flex' }}>
                  <Typography>1</Typography>
                  <Typography>of</Typography>
                  <Typography>1</Typography>
                </Box>
                <Box>
                  <DeleteIcon />
                </Box>
              </Box>
            </Box>

            <Box >
              <Paper variant="outlined"
                sx={{
                  width: 230,
                  height: 230,
                  display: 'flex'
                }}>
                <Box sx={{ alignItems: 'center', display: 'flex', margin: 'auto', justifyContent: 'center' }}>
                  <Image
                    src={'/images/avatars/avatar.jpg'}
                    alt={'logo'}
                    width={256}
                    height={256}
                  />
                </Box>
              </Paper>
              <Paper variant="outlined"
                sx={{
                  width: 230,
                  height: 230,
                  display: 'flex',
                  marginTop: '15px'
                }}>
                <Box sx={{ alignItems: 'center', display: 'flex', margin: 'auto', justifyContent: 'center' }}>
                  <AddPhotoAlternateIcon onClick={handleAddImageClick} />
                </Box>
              </Paper>
              <Paper variant="outlined"
                sx={{
                  width: 230,
                  height: 230,
                  display: 'flex',
                  marginTop: '15px'
                }}>
                <Box sx={{ alignItems: 'center', display: 'flex', margin: 'auto', justifyContent: 'center' }}>
                  <AddPhotoAlternateIcon onClick={handleAddImageClick} />
                </Box>
              </Paper>
            </Box>
          </Box>
        </DialogContent>
        <DialogActions>
          <Button autoFocus
            onClick={handleClose}
            sx={{
              textTransform: 'none',
              color: 'blue'
            }}
          >
            Cancel
          </Button>
          <Button
            autoFocus
            onClick={handleAddImageClick}
            sx={{
              textTransform: 'none',
              color: 'blue'
            }}
          >
            Add an Image
          </Button>
          <AddImageDialog
            open={imageDialog}
            handleClose={handleCloseAddImage}
          />
          <Button
            sx={{
              textTransform: 'none',
              color: 'blue'
            }}
            onClick={handleClose}
          >
            Save
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}
export default ManageImageDialogBox;