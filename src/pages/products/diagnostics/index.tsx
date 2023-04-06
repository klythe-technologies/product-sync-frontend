import React from 'react';
import { Box } from '@mui/material';
import ProductFixes from '../../../components/ProductFixes';

const NeedAttention = () => {
  return (
    <Box>
      <ProductFixes
        errorMessage='Mismatched domains'
        resolveError='Use the same domain as the online 
        store URL provided in Merchant center for your product page '
        link='Learn more'
        productCount='All'
      />
    </Box>
  )
}
export default NeedAttention;