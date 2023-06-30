import React from 'react';
import {
  Box,
  Typography,
  FormControl,
  TextField,
  MenuItem,
  Grid,
  Card,
  Container
} from '@mui/material';
import { WeightUnit } from '../../constants/shipping-weight-unit';
import { LengthUnit } from '../../constants/shipping-length-unit';
import { styled } from '@mui/material/styles';
import { Grid3x3 } from '@mui/icons-material';

const FormControlDiv = styled('div')(() => ({
  display: 'flex',
  marginBottom: '8%',
  gap: '20px'
}))

const ShippingMainDiv = styled('div')(() => ({
  display: 'flex',
  gap: '20px',
  marginTop: '8px'
}))

const HandlingTimeDiv = styled('div')(() => ({
  gap: '20px',
  display: 'flex',
  marginBottom: '10%',
  marginTop: '30px'
}))

const ProductShipping = () => {
  return (
    <Box sx={{ width: '80%', margin: '0 auto' }}>
      <Grid container rowSpacing={1} columnSpacing={6}>
        <Grid item xs={12} lg={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Typography variant="subtitle1">
              Shipping, tax & returns
            </Typography>
            <Typography variant="subtitle2">
              Once you've set up a shipping service, use
              advanced settings to define its shipping
              cost in more detail.
            </Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Card elevation={0} variant="outlined">
            <Container
              sx={{
                padding: '20px'
              }}
            >

              <FormControlDiv>
                <FormControl sx={{ width: '350px' }}>
                  <TextField
                    label="Shipping weight"
                    size="small"
                    margin="dense"
                    InputLabelProps={{ style: { fontSize: 12 } }}
                  />
                </FormControl>
                <FormControl sx={{ width: '350px' }}>
                  <TextField
                    select
                    label="Shipping weight unit"
                    size="small"
                    margin="dense"
                    InputLabelProps={{ style: { fontSize: 12 } }}
                  >
                    {
                      WeightUnit.map((option: any) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))
                    }
                  </TextField>
                </FormControl>
              </FormControlDiv>
              <FormControlDiv>
                <FormControl sx={{ width: '350px' }}>
                  <TextField label="Shipping length"
                    size="small"
                    margin="dense"
                    InputLabelProps={{ style: { fontSize: 12 } }}
                  />
                </FormControl>
                <FormControl sx={{ width: '350px' }}>
                  <TextField
                    select
                    label="Shipping length unit"
                    size="small"
                    margin="dense"
                    InputLabelProps={{ style: { fontSize: 12 } }}
                  >
                    {
                      LengthUnit.map((option: any) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))
                    }
                  </TextField>
                </FormControl>
              </FormControlDiv>
              <FormControlDiv>
                <FormControl sx={{ width: '350px' }}>
                  <TextField label="Shipping width"
                    size="small"
                    margin="dense"
                    InputLabelProps={{ style: { fontSize: 12 } }}
                  />
                </FormControl>
                <FormControl sx={{ width: '350px' }}>
                  <TextField
                    select
                    label="Shipping width unit"
                    size="small"
                    margin="dense"
                    InputLabelProps={{ style: { fontSize: 12 } }}
                  >
                    {
                      LengthUnit.map((option: any) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))
                    }
                  </TextField>
                </FormControl>
              </FormControlDiv>
              <FormControlDiv>
                <FormControl sx={{ width: '350px' }}>
                  <TextField label="Shipping height"
                    size="small"
                    margin="dense"
                    InputLabelProps={{ style: { fontSize: 12 } }} />
                </FormControl>
                <FormControl sx={{ width: '350px' }}>
                  <TextField
                    select
                    label="Shipping height unit"
                    size="small"
                    margin="dense"
                    InputLabelProps={{ style: { fontSize: 12 } }}
                  >
                    {
                      LengthUnit.map((option: any) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))
                    }
                  </TextField>
                </FormControl>
              </FormControlDiv>

              <Box>
                <HandlingTimeDiv>
                  <FormControl sx={{ width: '350px' }}>
                    <TextField label="Minimum handling time"
                      size="small"
                      margin="dense"
                      InputLabelProps={{ style: { fontSize: 12 } }}
                    />
                  </FormControl>
                  <FormControl sx={{ width: '350px' }}>
                    <TextField label="Maximum handling time"
                      size="small"
                      margin="dense"
                      InputLabelProps={{ style: { fontSize: 12 } }}
                    />
                  </FormControl>
                </HandlingTimeDiv>
              </Box>
            </Container>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
export default ProductShipping;