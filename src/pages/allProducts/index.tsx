import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useRouter } from 'next/router';

const AllProducts = () => {
  const router = useRouter();

  return (
    <Box sx={{ alignItems: 'center' }}>
      <div>
        <div style={{ height: '300px' }}>image here</div>
        <div style={{ textAlign: 'center' }}>
          <Typography sx={{ fontSize: '24px', marginTop: '24px' }}>
            No products added yet
          </Typography>
          <Typography sx={{ fontSize: '14px', marginTop: '8px' }}>
            Show your products to customers who are looking to buy products like yours
          </Typography>
          <div style={{ marginTop: '24px', marginBottom: '24px' }}>
            <Button
              variant="outlined"
              sx={{ textTransform: 'none', marginRight: '10px', color: '#1967D2' }}
              onClick={() => router.push('/addProducts')}>
              Add products one by one
            </Button>
            <Button
              variant="outlined"
              sx={{ textTransform: 'none', color: '#1967D2' }}>
              Add products in another way
            </Button>
          </div>
        </div>
      </div>
    </Box >
  )
}
export default AllProducts;