import React from 'react';
import { Box, Typography, Link } from '@mui/material';

const ProductIssueView = () => {
  return (
    <Box>
      <Box>
        <Typography>
          Submit a valid value based on Google's product data specification
        </Typography>
        <Link sx={{ textDecoration: 'underline', color: 'blue' }}>Learn more</Link>
      </Box>
      <Box>
        <Typography>Affects</Typography>
        <Typography>Online store(India)</Typography>
      </Box>
    </Box>
  )
}
export default ProductIssueView;