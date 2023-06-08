import React from 'react';
import {
  Box,
  Paper,
  Button,
  Container
} from '@mui/material';
import { useRouter } from 'next/router';

const ProductFooter = () => {
  const router = useRouter();

  const handleCancel = () => {
    router.push('/products')
  }

  return (
    <Box>
      <Paper
        sx={{ position: 'fixed', bottom: 0, width: '100%', zIndex: 100 }}
        component="footer" square variant="outlined">
        <Container maxWidth="lg">
          <Box sx={{ display: 'flex', flexGrow: 1, float: 'right', padding: '8px', paddingRight: '20px' }}>
            <Button sx={{ textTransform: 'none' }} onClick={handleCancel}>Cancel</Button>
            <Button sx={{ textTransform: 'none' }} disabled>Save & add another</Button>
            <Button variant="contained" sx={{ textTransform: 'none' }} disabled>Save</Button>
          </Box>
        </Container>
      </Paper>
    </Box>
  )
}
export default ProductFooter;