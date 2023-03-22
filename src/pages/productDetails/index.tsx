import React, { useState } from 'react';
import {
  Typography,
  Divider,
  FormControl,
  TextField,
  Button
} from '@mui/material';
// import MuiBox, { BoxProps } from '@mui/material/Box';
// import { styled } from '@mui/material/styles';

//  const Box = styled(MuiBox)<BoxProps>(({ theme }) => ({
//     [theme.breakpoints.up('xs')]: { minWidth: '170px', fontSize: '10px' }
//   }))

const ProductDetails = () => {
  const [value, setValue] = useState('');
  const [title, setTitle] = useState('');
  const [brand, setBrand] = useState('');
  const [description, setDescription] = useState('');

  const VALUE_LIMIT = 2000;
  const TITLE_LIMIT = 150;
  const BRAND_LIMIT = 70;
  const DESCRIPTION_LIMIT = 5000;

  const handleSubmit = () => {
    console.log("product-details", value, title, brand, description)
  }

  return (
    <>
      <Typography
        sx={{ fontSize: '22px' }}>
        Add products one by one
      </Typography>
      <Divider />
      <div className='main_div' style={{ display: 'flex', gap: '25px', marginTop: '20px' }}>
        <div>
          <Typography
            sx={{ fontWeight: 'bold', fontSize: '16px' }}>
            Product details
          </Typography>
          <Typography
            sx={{ maxWidth: '250px', fontSize: '12px' }}>
            Make sure to add high quality product
            details that match your online store, if you
            have one. Add more details to help your
            products appear in more places on Klythe.</Typography>
        </div>
        <div style={{ width: '500px' }}>
          <form>
            <FormControl
              sx={{ width: '500px', marginBottom: '25px' }}>
              <TextField id="outlined-basic"
                label="Product page on your online store"
                variant="outlined"
                value={value}
                onChange={e => setValue(e.target.value)}
                required
                inputProps={{
                  maxlength: VALUE_LIMIT
                }}
              />
              <div className='bottom_section' style={{ display: 'flex', gap: '35%', fontSize: '12px' }}>
                <Typography
                  sx={{ fontSize: '12px' }}>
                  Example: https://www.mystore.com/product1
                </Typography>
                <Typography
                  sx={{ fontSize: '12px' }}>
                  {`${value.length}/${VALUE_LIMIT}`}
                </Typography>
              </div>
            </FormControl>
            <FormControl
              sx={{ width: '500px', marginBottom: '25px' }}>
              <TextField id="outlined-basic"
                label="Title*"
                variant="outlined"
                value={title}
                onChange={e => setTitle(e.target.value)}
                inputProps={{
                  maxlength: TITLE_LIMIT
                }}
              />
              <div>
                <Typography
                  sx={{ fontSize: '12px', textAlign: 'right' }}>
                  {`${title.length}/${TITLE_LIMIT}`}
                </Typography>
              </div>
            </FormControl>
            <FormControl
              sx={{ width: '500px', marginBottom: '25px' }}>
              <TextField id="outlined-basic"
                label="Brand"
                variant="outlined"
                value={brand}
                onChange={e => setBrand(e.target.value)}
                inputProps={{
                  maxlength: BRAND_LIMIT
                }}
              />
              <div>
                <Typography sx={{ fontSize: '12px', textAlign: 'right' }}>{`${brand.length}/${BRAND_LIMIT}`}</Typography>
              </div>
            </FormControl>
            <FormControl
              sx={{ width: '500px', marginBottom: '25px' }}>
              <TextField id="outlined-basic"
                label="Description"
                variant="outlined"
                value={description}
                onChange={e => setDescription(e.target.value)}
                inputProps={{
                  maxlength: DESCRIPTION_LIMIT
                }}
                multiline
                rows={3}
                required
              />
              <div>
                <Typography
                  sx={{ fontSize: '12px', textAlign: 'right' }}>
                  {`${description.length}/${DESCRIPTION_LIMIT}`}
                </Typography>
              </div>
            </FormControl>
            <Button
              variant="outlined"
              onClick={handleSubmit}>
              Submit
            </Button>
          </form>
        </div>
        <Divider orientation="vertical" flexItem sx={{ height: '5vh' }} />
        <div>
          <Typography
            sx={{ maxWidth: '215px', fontSize: '12px' }}>
            This is the page on your website where people land
            when they click this product on Klythe.
          </Typography>
        </div>
      </div>
    </>
  )
}
export default ProductDetails;
