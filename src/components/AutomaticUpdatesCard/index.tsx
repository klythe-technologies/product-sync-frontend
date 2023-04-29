import React from 'react';
import {
  Box,
  Card,
  Link,
  Divider,
  Button,
  Dialog,
  Radio,
  Checkbox,
  FormGroup,
  RadioGroup,
  Typography,
  FormControl,
  DialogActions,
  DialogContent,
  FormControlLabel
} from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import SyncDisabledIcon from '@mui/icons-material/SyncDisabled';

const UpdatesInfo = [
  {
    id: '1',
    enabled: true,
    title: 'Prices updated automatically'
  },
  {
    id: '2',
    enabled: true,
    title: 'Availability updated automatically'
  },
  {
    id: '3',
    enabled: true,
    title: 'Condition updated automatically'
  }
]

const UpdatesCard = () => {
  const [checkBoxState, setCheckBox] = React.useState([UpdatesInfo]);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('regardless');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleCheckedBox = () => {
    setOpen(false);
  }

  const handleUncheckedBox = () => {
    setOpen(false);
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

  const handleChange = (id: any) => {
    const updatedList = [...checkBoxState];

    const newState = updatedList.map(item => item.id === id ? { ...item, checked: item.enabled } : item)
    setCheckBox(newState);
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
          {
            UpdatesInfo &&
            <Box sx={{ marginTop: '25px' }}>
              {UpdatesInfo.map((updates: any) => (
                <Box
                  key={updates.id}
                  sx={{ display: 'flex', color: 'green', marginBottom: '16px' }}
                >
                  {updates.enabled ?
                    <Box sx={{ display: 'flex' }}>
                      <LoopIcon />
                      <Typography sx={{ color: 'green', fontSize: '.875rem', marginLeft: '8px' }}>
                        {updates.title}
                      </Typography>
                    </Box>
                    :
                    <Box sx={{ display: 'flex' }}>
                      <SyncDisabledIcon />
                      <Typography sx={{ color: 'gray', fontSize: '.875rem', marginLeft: '8px' }}>
                        {updates.title}
                      </Typography>
                    </Box>
                  }
                </Box>
              ))}
            </Box>
          }
        </Box>
        <Divider />
        <Box>
          <Button sx={{ textTransform: 'none', color: '#1a73e8' }} onClick={handleClickOpen}>Edit</Button>
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
              width: '450px',
              height: '300px'
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '1.125rem' }}>Automatic updates</Typography>
            </Box>
            <Divider />
            <Box>
              {
                <Box sx={{ marginTop: '25px' }}>
                  {UpdatesInfo.map((updates: any) => (
                    <Box
                      key={updates.id}
                      sx={{ display: 'flex', color: 'green', marginBottom: '16px' }}
                    >
                      <FormGroup>
                        <FormControlLabel
                          control={
                            <Checkbox
                              checked={updates.enabled}
                              style={{
                                color: "#1a73e8",
                              }}
                              onChange={() => handleChange(updates.id)}
                            />
                          }
                          label={updates.title}
                        />
                      </FormGroup>
                    </Box>
                  ))}
                </Box>
              }
            </Box>
            {/* <Box>
              {
                checkBoxState ?
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox
                          defaultChecked
                          style={{
                            color: "#1a73e8",
                          }}
                          onChange={handleCheck}
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
                              onChange={handleRadioChange}
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
                  :
                  <FormGroup>
                    <FormControlLabel
                      control={
                        <Checkbox />
                      }
                      label="Update prices"
                    />
                    <FormControlLabel
                      control={
                        <Checkbox />
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
                          style={{
                            color: "#1a73e8",
                          }}
                        />
                      }
                      label="Update condition"
                    />
                  </FormGroup>
              }

            </Box> */}
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} sx={{ textTransform: 'none', color: '#1a73e8' }}>
              Cancel
            </Button>
            {
              UpdatesInfo ?
                <Button autoFocus onClick={() => handleCheckedBox(UpdatesInfo.id)} sx={{ textTransform: 'none', color: '#1a73e8' }}>
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
export default UpdatesCard;