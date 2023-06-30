import React from 'react';
import {
  Typography,
  Paper,
  Button,
  Box,
  Divider,
  Link,
  Grid,
  Card
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
    <Box sx={{ width: '80%', margin: '0 auto' }}>
      <Grid container rowSpacing={1} columnSpacing={6}>
        <Grid item xs={12} lg={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Typography variant="subtitle1">
              Product images
            </Typography>
            <Typography variant="subtitle2">
              Additional images are often critical for
              users to understand what the product
              looks like from different angles and in
              different contexts.
            </Typography>
          </Box>
          </Grid>
          <Grid item xs={12} lg={8}>
         <Card elevation={0} variant= "outlined" sx={{padding:'20px', float:'right', width:'100%'}}>
          <Box sx={{ display: 'flex', flexGrow: 2, flexBasis: '48px' }}>
            <Box sx={{ display: 'flex' }}>
              <Paper
                variant="outlined"
                sx={{
                 maxWidth:'100%',
                 minHeight:'105%',
                  height: 350,
                  backgroundColor: 'rgba(50, 50, 50, 0)',
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
                  width: "100px",
                  height: '100px',
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
                  width: '100px',
                  height: '100px',
                  marginBottom: '10px',
                  display: 'flex',
                  backgroundColor: 'rgba(50, 50, 50, 0)'
                }}>
                <Box sx={{ alignItems: 'center', display: 'flex', margin: 'auto' }}>
                  <AddPhotoAlternateIcon onClick={handleClickOpen} />
                </Box>
              </Paper>
              <Paper variant="outlined" sx={{
                width: "100px",
                height: '100px',
                maxWidth:'100%',
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
          </Card>
        </Grid>
        </Grid>
    </Box>
  )
}
export default ProductImages;