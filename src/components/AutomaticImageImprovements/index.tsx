import React from 'react';
import {
  Box,
  Card,
  Link,
  Checkbox,
  Button,
  Dialog,
  Divider,
  FormGroup,
  Typography,
  DialogActions,
  DialogContent,
  FormControlLabel,
} from '@mui/material';

import AutoFixOffIcon from '@mui/icons-material/AutoFixOff';
import AutoFixHighIcon from '@mui/icons-material/AutoFixHigh';

const ImageImprovementsCard = () => {
  const [checked, setChecked] = React.useState(false);
  const [open, setOpen] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckedBox = () => {
    setChecked(true);
    setOpen(false);
  }

  const handleUncheckedBox = () => {
    setChecked(false);
    setOpen(false);
  }

  return (
    <Box>
      <Card variant='outlined'>
        <Box sx={{ padding: '20px', paddingBottom: '0' }}>
          <Box>
            <Typography
              sx={{
                fontSize: '1.125rem',
                fontFamily: ' Google Sans,Roboto,Arial,sans-serif'
              }}>
              Automatic image improvements
            </Typography>
          </Box>
          <Box>
            <Typography sx={{ fontSize: '.875rem', marginTop: '10px' }}>
              Google can remove promotional overlays that would otherwise stop products from being shown.
              <Link sx={{ color: '#1a73e8', textDecoration: 'underline', marginLeft: '5px' }}>
                Learn more about automatic image improvements
              </Link>
            </Typography>
          </Box>
          {
            !checked ?

              <Box sx={{ display: 'flex', gap: '15px', marginTop: '20px', marginBottom: '15px' }}>
                <AutoFixOffIcon />
                <Typography sx={{ color: 'gray' }}>Images not improved automatically</Typography>
              </Box>
              :
              <Box sx={{ display: 'flex', gap: '15px', marginTop: '20px', marginBottom: '15px' }}>
                <AutoFixHighIcon sx={{ color: 'green' }} />
                <Typography sx={{ color: 'green' }}>Images not improved automatically</Typography>
              </Box>
          }
        </Box>
        <Divider />
        <Box>
          <Button sx={{ textTransform: 'none', color: '#1a73e8' }} onClick={handleOpen}>Edit</Button>
        </Box>
      </Card>
      <Box
        sx={{
          maxWidth: '700px',
          height: '350px'
        }}
      >
        <Dialog
          open={open}
          onClose={handleClose}
          aria-labelledby="responsive-dialog-title"
        >
          <DialogContent
            sx={{
              width: '400px',
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '1.125rem' }}>Automatic updates</Typography>
            </Box>
            <Divider />
            <Box>
              <FormGroup>
                {
                  !checked ?
                    <FormControlLabel
                      control={
                        <Checkbox
                          style={{
                            color: "#1a73e8",
                          }}
                        />
                      }
                      label="Automatically improve products' main image"
                    />
                    :
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked
                          style={{
                            color: "#1a73e8",
                          }}
                        />
                      }
                      label="Automatically improve products' main image"
                    />
                }
              </FormGroup>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} sx={{ textTransform: 'none', color: '#1a73e8' }}>
              Cancel
            </Button>
            {
              !checked ?
                <Button autoFocus onClick={handleCheckedBox} sx={{ textTransform: 'none', color: '#1a73e8' }}>
                  Save
                </Button>
                :
                <Button autoFocus onClick={handleUncheckedBox} sx={{ textTransform: 'none', color: '#1a73e8' }}>
                  Save
                </Button>
            }
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  )
}
export default ImageImprovementsCard;