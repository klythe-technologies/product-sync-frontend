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
    id: 'prices',
    enabled: true,
    title: 'Prices updated automatically'
  },
  {
    id: 'availability',
    enabled: false,
    title: 'Availability updated automatically'
  },
  {
    id: 'condition',
    enabled: true,
    title: 'Condition updated automatically'
  }
]

const UpdatesCard = () => {
  const [checkBoxState, setCheckBox] = React.useState(UpdatesInfo);
  const [updateState, setUpdateState] = React.useState(checkBoxState);
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState('regardless');

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const onCheckboxPress = (e: any, id: any) => {
    console.log("target", e);
    console.log("id", id);
    const currentCheckBoxIndex = checkBoxState.findIndex((element) => element.id === id);
    console.log("current-checkbox", currentCheckBoxIndex);
    const updateCheckBox = { ...checkBoxState[currentCheckBoxIndex], enabled: e }
    console.log("updated", updateCheckBox)
    const newList = [...checkBoxState];
    newList[currentCheckBoxIndex] = updateCheckBox;
    setUpdateState(newList)
  }

  const onSave = () => {
    setUpdateState([...checkBoxState])
    setOpen(false);
  }

  const handleRadioChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue((event.target as HTMLInputElement).value);
  };

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
                Klythe Sync can automatically update product details to match your website.
                <Link sx={{ color: '#1a73e8', textDecoration: 'underline', marginLeft: '5px' }}>
                  Learn more about automatic item updates
                </Link>
              </Typography>
            </Box>
          </Box>
          {
            updateState &&
            <Box sx={{ marginTop: '25px' }}>
              {updateState.map((updates: any) => (
                <Box
                  key={updates.id}
                  sx={{ display: 'flex', color: 'green', marginBottom: '16px' }}
                >
                  <Box sx={{ display: 'flex' }}>
                    {updates.enabled ? <LoopIcon /> : <SyncDisabledIcon sx={{ color: 'gray' }} />}
                    <Typography sx={{ color: updates.enabled ? 'green' : 'gray', fontSize: '.875rem', marginLeft: '8px' }}>
                      {updates.title}
                    </Typography>
                  </Box>
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
              width: '400px'
            }}
          >
            <Box>
              <Typography sx={{ fontSize: '1.125rem' }}>Automatic updates</Typography>
            </Box>
            <Divider />
            <Box>
              {
                <Box sx={{ marginTop: '25px' }}>
                  {updateState.map((updates: any) => (
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
                              name={updates.id}
                              onChange={(e) => onCheckboxPress(e.target.checked, updates.id)}
                            />
                          }
                          label={updates.title}
                        />
                        {
                          updates.id === 'availability' && updates.enabled ?

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
                            : ''
                        }
                      </FormGroup>
                    </Box>
                  ))}
                </Box>
              }
            </Box>
          </DialogContent>
          <DialogActions>
            <Button autoFocus onClick={handleClose} sx={{ textTransform: 'none', color: '#1a73e8' }}>
              Cancel
            </Button>
            {
              <Button autoFocus onClick={onSave}
                sx={{ textTransform: 'none', color: '#1a73e8' }}>
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