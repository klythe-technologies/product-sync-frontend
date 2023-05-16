import React from 'react';
import {
  Box,
  Dialog,
  Button,
  Checkbox,
  FormGroup,
  Typography,
  DialogTitle,
  DialogContent,
  DialogActions,
  FormControlLabel,
  DialogContentText
} from '@mui/material';
import { countryOptions } from 'src/constants/country-name';


const ShippingCountries = () => {
  const [open, setOpen] = React.useState(false);
  const [checked, setChecked] = React.useState(countryOptions);
  const [isAllSelected, setIsAllSelected] = React.useState(false);
  const [checkList, setCheckList] = React.useState<any>([]);

  const handleChange = (event: any) => {
    setIsAllSelected(event.target.checked);
    setChecked([...countryOptions.map((option) => ({ ...option, checked: event.target.checked }))]);
  }

  const handleCheckBox = (e: any, id: any) => {
    const currentCheckBoxIndex = checked.findIndex((element: any) => element.id === id);
    const updateCheckBox = { ...checked[currentCheckBoxIndex], checked: e }
    console.log("update-check", updateCheckBox)
    const newList = [...checked];
    newList[currentCheckBoxIndex] = updateCheckBox;
    setChecked(newList);
    setIsAllSelected(e);
  }

  const listItem = checked.map((option: any) => {
    return (
      <div key={option.id}>
        <Checkbox
          value={option}
          onChange={(event) => handleCheckBox(event.target.checked, option.id)}
          checked={option.checked} />
        <span>{option.label}</span>
      </div>
    )
  })

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSave = () => {
    setOpen(false);
    setCheckList([...checked.filter((item) => item.checked)]);
  }
  return (
    <Box sx={{ padding: '24px', display: 'flex', gap: '60px' }}>
      <Box>
        <Typography
          sx={{
            marginBottom: '25px',
            fontFamily: 'Google Sans,Roboto,Arial,sans-serif'
          }}>
          Countries
        </Typography>
      </Box>
      <Box>
        <Box>
          <Typography
            sx={{
              maxWidth: '530px',
              fontSize: '1rem',
              paddingBottom: '10px'
            }}>
            To begin adding shipping information select a single
            country or multiple countries that share shipping costs and delivery countryOptions.
          </Typography>
        </Box>
        <Box>
          <FormGroup>
            <FormControlLabel control={
              <Checkbox />
            }
              label="India" sx={{ color: '#1a73e8' }} />
          </FormGroup>
          {
            checkList.map((item: any) => <Box><Checkbox /> <span>{item.label}</span></Box>)
          }
        </Box>
        <Box>
          <Dialog
            open={open}
            onClose={handleClose}
            aria-labelledby="responsive-dialog-title"
          >
            <DialogTitle id="responsive-dialog-title">
              {"Add more countries"}
            </DialogTitle>
            <DialogContent dividers>
              <DialogContentText>
                <Checkbox
                  onChange={handleChange}
                  checked={isAllSelected}
                />
                <span>All countries</span>
                <DialogContent dividers>
                  {listItem}
                </DialogContent>
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button autoFocus onClick={handleClose} sx={{ textTransform: 'none' }}>
                Cancel
              </Button>
              <Button onClick={handleSave}
                autoFocus sx={{ textTransform: 'none' }}>
                Save
              </Button>
            </DialogActions>
          </Dialog>
        </Box>
        <Box>
          <Button sx={{ textTransform: 'none' }} onClick={handleClickOpen}>Add country</Button>
        </Box>
      </Box>
    </Box>
  )
}
export default ShippingCountries;