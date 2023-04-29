import React from 'react';
import { Box } from '@mui/material';
import UpdatesCard from '../AutomaticUpdatesCard';
import Grid from '@mui/material/Grid';
import ImageImprovementsCard from '../AutomaticImageImprovements';

const ProductImprovements = () => {
  return (
    <Box>
      <Box sx={{ flexGrow: 1 }}>
        <Grid container spacing={4}>
          <Grid item xs={5}>
            <UpdatesCard />
          </Grid>
          <Grid item xs={5}>
            <ImageImprovementsCard />
          </Grid>
        </Grid>
      </Box>
    </Box>
  )
}
export default ProductImprovements;