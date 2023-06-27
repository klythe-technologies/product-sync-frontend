import React from 'react';
import {
  Typography,
  Paper,
  Button,
  Box,
  Divider,
  Link
} from '@mui/material';

import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import AddImageDialog from '../AddImageDialog';

const ProductImages = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Box className='main_Box' sx={{ display: 'flex', gap: '25px', marginTop: '20px', flexWrap: 'wrap' }}>
          <Box className='product_details_title' sx={{ flexGrow: 1, flexBasis: 0, margin: '0 24px 24px 0' }}>
            <Typography
              sx={{ fontWeight: '500', fontSize: '16px', color: 'black', whiteSpace: 'nowrap' }}>
              Product images
            </Typography>
            <Typography
              sx={{ fontSize: '10px' }}>
              Additional images are often critical for
              users to understand what the product
              looks like from different angles and in
              different contexts.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexGrow: 2, flexBasis: '48px' }}>
            <Box sx={{ display: 'flex' }}>
              <Paper
                variant="outlined"
                sx={{
                  minWidth: 100,
                  // width: 350,
                  maxWidth: 350,
                  height: 350,
                  backgroundColor: 'rgba(50, 50, 50, 0)'
                }}>
                <Box>
                  <Box sx={{ textAlign: 'center', paddingTop: '70px' }}>
                    <Box>
                      <Typography
                        sx={{ marginBottom: '16px' }}>
                        Drag an image here
                      </Typography>
                      <Typography
                        sx={{ marginBottom: '16px' }}>
                        or
                      </Typography>
                      <Button
                        variant="outlined"
                        sx={{ textTransform: 'none', color: 'blue', gap: '7px' }}
                        onClick={handleClickOpen}>
                        <AddPhotoAlternateIcon />
                        Add images
                      </Button>
                      <AddImageDialog
                        open={open}
                        handleClose={handleClose} />
                    </Box>
                    <Typography
                      sx={{ fontSize: '12px', minWidth: '150px', marginTop: '20px' }}>
                      Tip: Additional images are often critical for users to understand what the product looks like
                      from different angles and in different contexts.
                    </Typography>
                  </Box>
                </Box>
              </Paper>
            </Box>
            <Box sx={{ marginLeft: '8px' }}>
              <Paper
                variant="outlined"
                sx={{
                  width: 128,
                  height: 110,
                  marginBottom: '10px',
                  display: 'flex',
                  backgroundColor: 'rgba(50, 50, 50, 0)'
                }}>
                <Box sx={{ alignItems: 'center', display: 'flex', margin: 'auto' }}>
                  <AddPhotoAlternateIcon onClick={handleClickOpen} />
                </Box>
              </Paper>
              <Paper
                variant="outlined"
                sx={{
                  width: 128,
                  height: 110,
                  marginBottom: '10px',
                  display: 'flex',
                  backgroundColor: 'rgba(50, 50, 50, 0)'
                }}>
                <Box sx={{ alignItems: 'center', display: 'flex', margin: 'auto' }}>
                  <AddPhotoAlternateIcon onClick={handleClickOpen} />
                </Box>
              </Paper>
              <Paper variant="outlined" sx={{
                width: 128,
                height: 110,
                marginBottom: '10px',
                display: 'flex',
                backgroundColor: 'rgba(50, 50, 50, 0)'
              }}>
                <Box sx={{ alignItems: 'center', display: 'flex', margin: 'auto' }}>
                  <AddPhotoAlternateIcon onClick={handleClickOpen} />
                </Box>
              </Paper>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default ProductImages;