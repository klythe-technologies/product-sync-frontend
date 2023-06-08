import React from 'react';
import { Box, Typography } from '@mui/material';

const ProductDescription = ({ fieldData }: any) => {
  return (
    <Box>
      <Box className='main_div' style={{ display: 'flex', gap: '25px', marginTop: '20px', flexWrap: 'wrap' }}>
        <Box sx={{ flexGrow: 1, flexBasis: 0, margin: '0 24px 24px 0' }} key={fieldData.key}>
          <Typography sx={{ fontWeight: '500', fontSize: '16px', color: 'black', whiteSpace: 'nowrap' }}>
            {fieldData.title}
          </Typography>
          <Typography sx={{ fontSize: '12px' }}>
            {fieldData.description}
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductDescription;
