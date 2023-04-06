import React from 'react';
import { Box } from '@mui/material';
import ProductStatus from '../../../components/ProductStatus';
import DetailsOfProduct from '../../../components/DetailsOfProduct';
import MoreInfo from 'src/components/MoreInfo';

const ItemDetails = () => {
  return (
    <Box>
      <MoreInfo />
      <Box style={{ display: 'flex', gap: '20px' }}>
        <Box>
          <DetailsOfProduct />
        </Box>
        <ProductStatus />
      </Box>
    </Box>
  )
}
export default ItemDetails;
