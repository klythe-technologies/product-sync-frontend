import React from 'react';
import {
  Box,
  Alert,
  Typography,
  Button
} from '@mui/material';

const ShippingAlert = () => {
  return (
    <Box>
      <Box sx={{ display: 'flex', justifyContent: 'center', marginTop: '25px' }}>
        <Alert variant="outlined" severity="warning" sx={{ display: 'flex' }}>
          <Typography sx={{ color: 'black', fontSize: '.875rem', width: '850px' }}>
            To show products to customers in all the countries you sell in, add your shipping information for the following countries (1): India
          </Typography>
          <Box>
            <Button sx={{ textTransform: 'none', backgroundColor: 'orange', color: 'black' }}>Add shipping</Button>
          </Box>
        </Alert>
      </Box>  
    </Box>
  )
}
export default ShippingAlert;