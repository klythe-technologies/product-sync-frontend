import React from 'react';
import {
  Typography,
  Button,
  Box,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  DialogContentText,
  Link,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  TextField,
} from '@mui/material';
import { styled } from '@mui/material/styles';

const AddImageDialog = (props: any) => {
  const [status, setStatus] = React.useState(0);
  const [radioButton, setRadioButton] = React.useState('Drag and drop an image or browse to find an image on your computer');

  const handleChange = (event: any) => {
    setRadioButton(event.target.value);
  }

  const radioHandler = (status: any) => {
    setStatus(status);
  };

  const DropFileContainer = styled('div')(() => ({
    outline: 'dotted',
    outlineWidth: 'thin',
    marginLeft: '32px',
    padding: '5px',
    width: '500px'
  }))

  const BottomSectionDiv = styled('div')(() => ({
    gap: '35%',
    display: 'flex',
    fontSize: '12px'
  }))

  return (
    <>
      <Dialog
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="responsive-dialog-title"
      >
        <DialogTitle id="responsive-dialog-title">
          {"Add an image"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText sx={{ fontSize: '12px' }}>
            Make sure your images are: at least 100 × 100 pixels for non-apparel images, at least 250 ×
            250 pixels for apparel images, up to 64 megapixels and 16 MB file size.<Link> Learn more</Link>
          </DialogContentText>
        </DialogContent>
        <Box sx={{ paddingLeft: '20px' }}>
          <FormControl>
            <RadioGroup
              aria-labelledby="demo-radio-buttons-group-label"
              defaultValue={radioButton}
              name="radio-buttons-group"
            >
              <FormControlLabel
                value="Drag and drop an image or browse to find an image on your computer"
                control={<Radio />}
                label={
                  <Box component="div" fontSize={14} fontWeight='bold'>
                    Drag and drop an image or browse to find an image on your computer
                  </Box>
                }
                onChange={handleChange}
              />
              <div>
                <DropFileContainer>
                  <Typography sx={{ fontSize: '14px', paddingLeft: '15px' }}>
                    Drop your images, or
                    <Button sx={{ textTransform: 'none' }}>Browse</Button>
                  </Typography>
                </DropFileContainer>
              </div>
              <FormControlLabel value="Provide an image URL" control={<Radio />}
                onClick={() => radioHandler(1)}
                label={
                  <Box component="div" fontSize={14} fontWeight='bold'>
                    Provide an image URL
                  </Box>
                }
                onChange={handleChange}
              />
              {
                status === 1 && (<div>
                  <FormControl sx={{ width: '500px', marginBottom: '25px', marginLeft: '30px' }}>
                    <TextField
                      id="outlined-basic"
                      label="Product image on your website, server or cloud"
                      variant="outlined"
                      aria-hidden={radioButton === "Provide an image URL" ? true : false}
                    />
                    <BottomSectionDiv>
                      <Typography sx={{ fontSize: '12px', marginTop: '5px' }}>
                        Example: https://www.goolge.com/image.jpeg
                      </Typography>
                    </BottomSectionDiv>
                  </FormControl>
                </div>)
              }
            </RadioGroup>
          </FormControl>
        </Box>
        <DialogActions>
          <Button autoFocus onClick={props.handleClose} sx={{ textTransform: 'none' }}>
            Cancel
          </Button>
          <Button onClick={props.handleClose} disabled sx={{ textTransform: 'none' }}>
            Add
          </Button>
        </DialogActions>
      </Dialog>
    </>
  )
}

export default AddImageDialog;