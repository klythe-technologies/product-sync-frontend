import React from 'react';
import {
  Box,
  Paper,
  Button,
  Divider,
  Typography
} from '@mui/material';
import AddImageDialog from '../AddImageDialog';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import AddImageCustomComponent from '../AddImageCustom';

const ProductImages = ({ fieldData }: any) => {

  const [open, setOpen] = React.useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Box className='main_Box' sx={{ display: 'flex', gap: '20px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Box sx={{ display: 'flex' }}>
              <Box sx={{ display: 'flex', flexBasis: 0, flexGrow: 2 }}>
                <Box sx={{ display: 'flex'}}>
                  <Paper
                    variant="outlined"
                    sx={{
                      width: 360,
                      height: 350
                    }}>
                    <Box sx={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Box sx={{ textAlign: 'center', paddingTop: '70px' }}>
                        <Box sx={{ textAlign: 'center' }}>
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
                            <AddAPhotoIcon />
                            Add images
                          </Button>
                          <AddImageDialog
                            open={open}
                            handleClose={handleClose} />
                        </Box>
                        <Box sx={{ textAlign: 'center' }}>
                          <Typography
                            sx={{ fontSize: '12px', maxWidth: '350px', marginTop: '20px' }}>
                            {fieldData.imagetooltip}
                          </Typography>
                        </Box>
                      </Box>
                    </Box>
                  </Paper>
                </Box>
                <Box sx={{ marginLeft: '8px' }}>
                  <AddImageCustomComponent />
                  <AddImageCustomComponent />
                  <AddImageCustomComponent />
                </Box>
              </Box>
              <Box sx={{ display: 'flex', marginLeft: '20px' }}>
                <Divider orientation="vertical" flexItem sx={{ height: '20vh', marginRight: '20px' }} />
                {/* <Box sx={{ width: '215px' }}>
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
                </Box> */}
              </Box>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default ProductImages;