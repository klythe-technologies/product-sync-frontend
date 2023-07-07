import React from 'react';
import {
  Box,
  Card,
  Alert,
  Typography,
  Link,
  Button
} from '@mui/material';
import HistoryIcon from '@mui/icons-material/History';
import ProductsNeedAttention from '../../components/ProductsNeedAttention';


const ProductFixes = (props: any) => {
  const rows = [
    {
      id: '1', product: {  }, potential: 'Low', status: 'Not approved', attention: 'new product'
    },
    {
      id: '2', product: {  }, potential: 'Low', status: 'Not approved', attention: 'new product'
    },
    {
      id: '3', product: {  }, potential: 'Low', status: 'Not approved', attention: 'new product'
    },
  ]

  return (
    <Box sx={{ padding: '10px' }}>
      <Box sx={{ marginTop: '20px' }}>
        <div style={{ gap: '39%', display: 'flex' }}>
          <Typography sx={{ fontSize: '1.125rem' }}>
            Make these fixes to show products on Klythe Sync
          </Typography>
          <Button variant='outlined'
            sx={{ textTransform: 'none', display: 'flex', gap: '5px' }}>
            <HistoryIcon />
            View history
          </Button>
        </div>
      </Box>
      <Box sx={{ marginTop: '30px', marginBottom: '24px' }}>
        <Card
          variant="outlined"
          sx={{
            width: '285px',
            height: '290px'
          }}>
          <Box sx={{
            display: 'flex',
            flexDirection: 'column',
            width: '100%',
            justifyContent: 'flex-start'
          }}>
            <Box sx={{ marginTop: '20px' }}>
              <Alert severity="error"
                sx={{
                  paddingTop: '0',
                  paddingBottom: '0',
                  backgroundColor: 'white',
                  color: 'black'
                }} >
                <Typography sx={{
                  fontFamily: 'Roboto,Arial,sans-serif',
                  fontSize: '.75rem',
                }}>
                  Products not showing to customers
                </Typography>
              </Alert>
            </Box>
            <Box sx={{ padding: ' 0 21px' }}>
              <Typography
                sx={{
                  fontSize: '.875rem',
                  fontFamily: 'Google Sans,Roboto,Arial,sans-serif',
                  fontWeight: 'bold',
                  marginTop: '12px'
                }}>
                {props.errorMessage}
              </Typography>
            </Box>
            <Box sx={{ padding: '6px 21px', display: 'block' }}>
              <Typography
                sx={{
                  fontFamily: 'Roboto,Arial,sans-serif',
                  fontSize: '.875rem',
                  fontWeight: '400',
                  margin: '4px 0 0px 0'
                }}
              >
                {props.resolveError}
              </Typography>
              <Link sx={{ textDecoration: 'underline', color: 'blue', fontSize: '.875rem' }}>
                {props.link}
              </Link>
            </Box>
            <Box sx={{ display: 'flex', gap: '50px' }}>
              <Box
                sx={{
                  marginTop: 'auto',
                  justifyContent: 'space-between',
                  alignItems: 'flex-end',
                  padding: '4px 21px'
                }}>
                <Typography sx={{ fontSize: '13px' }}>Products</Typography>
                <Typography
                  sx={{ fontSize: '32px', fontFamily: 'Roboto,Helvetica Neue,Helvetica,Arial,sans-serif' }}>
                  {props.productCount}
                </Typography>
              </Box>
              <Box sx={{ display: 'flex' }}>
                <Button sx={{ color: 'blue', textTransform: 'none', fontSize: '14px' }}>View products</Button>
              </Box>
            </Box>
          </Box>
        </Card>
      </Box>
      <Box>
        <Box>
          <Typography sx={{ fontSize: '1.125rem', fontFamily: 'Google Sans,Roboto,Arial,sans-serif', marginTop: '15px', marginBottom: '15px' }}>
            All products that need attention
          </Typography>
        </Box>
        <Box>
          <ProductsNeedAttention rows={rows} />
        </Box>
      </Box>
    </Box>
  )
}
export default ProductFixes;