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
import AddImageDialog from '../addImageDialog';

const ProductImages = () => {
  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Box className='main_Box' sx={{ display: 'flex', gap: '20px', marginTop: '20px' }}>
        <Box className='product_details_title'>
          <Typography
            sx={{ fontWeight: 'bold', fontSize: '16px' }}>
            Product images
          </Typography>
          <Typography
            sx={{ maxWidth: '250px', fontSize: '12px' }}>
            Additional images are often critical for
            users to understand what the product
            looks like from different angles and in
            different contexts.
          </Typography>
        </Box>
        <Box>
          <Paper
            variant="outlined"
            sx={{
              width: 360,
              height: 350
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
                  sx={{ fontSize: '12px', maxWidth: '350px', marginTop: '20px' }}>
                  Tip: Additional images are often critical for users to understand what the product looks like
                  from different angles and in different contexts.
                </Typography>
              </Box>
            </Box>
          </Paper>
        </Box>
        <Box sx={{ marginLeft: '-10px' }}>
          <Paper
            variant="outlined"
            sx={{
              width: 128,
              height: 110,
              marginBottom: '10px',
              display: 'flex'
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
              display: 'flex'
            }}>
            <Box sx={{ alignItems: 'center', display: 'flex', margin: 'auto' }}>
              <AddPhotoAlternateIcon onClick={handleClickOpen} />
            </Box>
          </Paper>
          <Paper variant="outlined" sx={{
            width: 128,
            height: 110,
            marginBottom: '10px',
            display: 'flex'
          }}>
            <Box sx={{ alignItems: 'center', display: 'flex', margin: 'auto' }}>
              <AddPhotoAlternateIcon onClick={handleClickOpen} />
            </Box>
          </Paper>
        </Box>
        <Divider orientation="vertical" flexItem sx={{ height: '20vh' }} />
        <Box sx={{ width: '215px' }}>
          <Typography
            sx={{ fontSize: '12px' }}>
            Image guidelines and best practices:
          </Typography>
          <ul>
            <li>
              <Typography
                sx={{ fontSize: '10px' }}>
                Non-apparel images: at least 100 x 100 pixels
              </Typography>
            </li>
            <li>
              <Typography
                sx={{ fontSize: '10px' }}>
                Apparel images: at least 250 x 250 pixels
              </Typography>
            </li>
            <li>
              <Typography
                sx={{ fontSize: '10px' }}>
                No image larger than 64 megapixels
              </Typography>
            </li>
            <li>
              <Typography
                sx={{ fontSize: '10px' }}>
                No image file larger than 16MB
              </Typography>
            </li>
          </ul>
          <Link href="#"
            sx={{ fontSize: '12px', textDecoration: 'underline' }}>
            Learn more about images
          </Link>
        </Box>
      </Box>
    </>
  )
}
export default ProductImages;