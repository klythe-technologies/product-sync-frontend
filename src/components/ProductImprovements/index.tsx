import React from 'react';
import {
  Box,
  Card,
  Typography,
  Link,
  Divider,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  Checkbox,
  FormGroup,
  FormControlLabel,
  RadioGroup,
  Radio,
  FormControl
} from '@mui/material';
import Grid from '@mui/material/Grid';
import LoopIcon from '@mui/icons-material/Loop';

const UpdatesTitle = [
  {
    image: <LoopIcon />,
    title: 'Prices updated automatically'
  },
  {
    image: <LoopIcon />,
    title: 'Availability updated automatically'
  },
  {
    image: <LoopIcon />,
    title: 'Condition updated automatically'
  }
]

const ProductImprovements = () => {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(true);
  const [value, setValue] = React.useState('regardless');

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleChange = (event: any) => {
    setChecked(event.target.checked);
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={2}>
          <Grid item xs={5}>
            <Card variant='outlined'>
              <Box sx={{ padding: '25px', paddingBottom: '0' }}>
                <Box>
                  <Typography
                    sx={{
                      fontSize: '1.125rem',
                      fontFamily: ' Google Sans,Roboto,Arial,sans-serif'
                    }}>
                    Automatic updates
                  </Typography>
                  <Box>
                    <Typography sx={{ fontSize: '.875rem', marginTop: '10px' }}>
                      Google can automatically update product details to match your website.
                      <Link sx={{ color: '#1a73e8', textDecoration: 'underline', marginLeft: '5px' }}>
                        Learn more about automatic item updates
                      </Link>
                    </Typography>
                  </Box>
                </Box>
                <Box sx={{ marginTop: '25px' }}>
                  {UpdatesTitle.map((updates) => (
                    <Box
                      key={updates.title}
                      sx={{ display: 'flex', color: 'green', marginBottom: '16px' }}
                    >
                      {updates.image}
                      <Typography sx={{ color: 'green', fontSize: '.875rem', marginLeft: '8px' }}>{updates.title}</Typography>
                    </Box>
                  ))}
                </Box>
              </Box>
              <Divider />
              <Box>
                <Button sx={{ textTransform: 'none', color: '#1a73e8' }} onClick={handleClickOpen}>Edit</Button>
              </Box>
            </Card>
          </Grid>
        </Grid>
      </Box>
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
              width: '450px',
              height: '300px'
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '1.125rem' }}>Automatic updates</Typography>
            </Box>
            <Divider />
            <Box>
              <FormGroup>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      style={{
                        color: "#1a73e8",
                      }}
                    />
                  }
                  label="Update prices"
                />
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      style={{
                        color: "#1a73e8",
                      }}
                    />
                  }
                  label="Update availability"
                />
                <FormControl sx={{ marginLeft: '25px' }}>
                  <RadioGroup
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="regardless"
                    name="radio-buttons-group"
                    value={value}
                    onChange={handleRadioChange}
                    style={{
                      color: "#1a73e8",
                    }}
                  >
                    <FormControlLabel
                      control={
                        <Radio
                          checked={value === 'regardless'}
                          value="regardless"
                          onChange={handleRadioChange}
                          style={{
                            color: "#1a73e8",
                          }}
                        />
                      }
                      label="Update regardless of availability on website"
                    />
                    <FormControlLabel
                      control={
                        <Radio
                          checked={value === 'onlyUpdate'}
                          value="onlyUpdate"
                          onChange={handleChange}
                          style={{
                            color: "#1a73e8",
                          }}
                        />
                      }
                      label="Only update when out of stock on website"
                    />
                  </RadioGroup>
                </FormControl>
                <FormControlLabel
                  control={
                    <Checkbox
                      defaultChecked
                      style={{
                        color: "#1a73e8",
                      }}
                    />
                  }
                  label="Update condition"
                />
              </FormGroup>
            </Box>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} sx={{ textTransform: 'none', color: '#1a73e8' }}>
              Cancel
            </Button>
            <Button autoFocus onClick={handleClose} sx={{ textTransform: 'none', color: '#1a73e8' }}>
              Save
            </Button>
          </DialogActions>
        </Dialog>
      </Box>
    </Box>
  )
}
export default ProductImprovements;