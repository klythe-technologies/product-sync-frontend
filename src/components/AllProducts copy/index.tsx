import React from 'react';
import { Typography, Box, Button } from '@mui/material';
import { useRouter } from 'next/router';
import ProductsList from '../ProductsList copy';


const AllProducts = () => {
  const router = useRouter();

  const rows = [
    {
      id: 1, status: 'Not approved', image: {  }, title: 'new product', productId: '4728420171',
      price: '800.00', lastUpdate: 'Mar 16, 2023', stores: 'example.com', clicks: '0', edit: ''
    },
    {
      id: 2, status: 'Not approved', image: {  }, title: 'new product', productId: '4728420171',
      price: '500.00', lastUpdate: 'Mar 16, 2023', stores: 'example.com', clicks: '0', edit: ''
    },
    {
      id: 3, status: 'Not approved', image: {  }, title: 'new product', productId: '4728420171',
      price: '600.00', lastUpdate: 'Mar 16, 2023', stores: 'example.com', clicks: '0', edit: ''
    }
  ]

  if (rows.length) {
    return <ProductsList rows={rows} />;
  }

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
              onClick={() => router.push('/addproducts')}>
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