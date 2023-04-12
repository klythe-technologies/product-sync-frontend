import React from 'react';
import {
  Box,
} from '@mui/material';
import ShippingAlert from '../../../components/ShippingAlert';
import ShippingTable from '../../../components/ShppingTable';

const Shipping = () => {
  return (
    <Box sx={{ justifyContent: 'space-between' }}>
      <ShippingAlert />
      <ShippingTable />
    </Box>
  )
}
export default Shipping;