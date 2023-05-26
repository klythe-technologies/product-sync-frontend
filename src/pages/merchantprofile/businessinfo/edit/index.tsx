import React from 'react';
import { Box, Divider } from '@mui/material';
import BusinessDetails from 'src/components/BusinessDetails';
import BusinessAddress from 'src/components/BusinessAddress';
import CountryCode from 'src/components/CountryCodeDropDown';

const EditBusinessInfo = () => {
  return (
    <Box>
      <BusinessDetails />
      <Divider />
      <BusinessAddress />
      <Divider />
      <CountryCode />
    </Box>
  )
}
export default EditBusinessInfo;