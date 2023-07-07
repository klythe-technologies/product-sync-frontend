import React from 'react';
import { Box, Divider, Typography } from '@mui/material';
import VerticalStepper from '../VerticalStepper copy';
import ShippingCountries from '../ShippingCountries';

const AddShippingInformation = () => {
  return (
    <Box sx={{ display: 'flex' }}>
      <Box>
        <VerticalStepper />
      </Box>
      <Divider orientation="vertical" flexItem sx={{ borderRightWidth: 2 }} />
      <Box>
        <ShippingCountries />
      </Box>
    </Box>
  )
}
export default AddShippingInformation;