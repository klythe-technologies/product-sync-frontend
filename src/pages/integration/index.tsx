import React from "react";
import { Box, Grid } from '@mui/material';
import IntegrationCard from "src/@core/components/IntegrationCard";

const Integration = () => {
  return (
    <Box sx={{ margin: 'auto' }}>
      <Grid container spacing={10} sx={{ margin: 'auto', paddingRight: '5rem' }}>
        <Grid item xs={12} sm={4} md={3}>
          <IntegrationCard title="Google Shopping"
            description="Google Shopping is an online platform that allows users to search for products."
          />
        </Grid>
        <Grid item xs={12} sm={8} md={3}>
          <IntegrationCard title="Facebook"
            description="Facebook Shops that enables businesses sell their
             products directly on the platform." />
        </Grid>
        <Grid item xs={12} sm={8} md={3}>
          <IntegrationCard title="Amazon"
            description="Amazon Shops that enables businesses sell their
            products directly on the platform." />
        </Grid>
        <Grid item xs={12} sm={8} md={3}>
          <IntegrationCard title="Amazon"
            description="Amazon Shops that enables businesses sell their
            products directly on the platform." />
        </Grid>
      </Grid>

    </Box>
  )
}

export default Integration;
