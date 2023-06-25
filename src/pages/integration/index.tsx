import React from "react";
import { Box, Grid } from '@mui/material';
import IntegrationCard from "src/@core/components/IntegrationCard";

const Integration = () => {
  return (
    <Box>
      <Grid container spacing={6}>
        <Grid item xs={12} sm={6} md={4}>
          <IntegrationCard title="Google Shopping"
            description="Google Shopping is an online platform that allows users to search for products."
          />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <IntegrationCard title="Facebook"
            description="Facebook Shops that enables businesses sell their
             products directly on the platform." />
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <IntegrationCard title="Amazon"
            description="Amazon Shops that enables businesses sell their
            products directly on the platform." />
        </Grid>
      </Grid>
    </Box>
  )
}

export default Integration;
