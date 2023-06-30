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
            <Card elevation={0} variant= "outlined">
               <Container
              sx={{
                padding: '20px'
              }}
            >
                <Box>
                  <Grid3x3>
                    <FormControl >
                      <TextField 
                      label="Shipping weight" 
                      sx={{width:'45vw'}}
                      
                      />
                    </FormControl>
                    <FormControl >
                      <TextField
                        select
                        label="Shipping weight unit"
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
                  </Grid3x3>
                  <FormControlDiv>
                    <FormControl sx={{ width: '250px' }}>
                      <TextField label="Shipping length" />
                    </FormControl>
                    <FormControl sx={{ width: '250px' }}>
                      <TextField
                        select
                        label="Shipping length unit"
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
                    <FormControl sx={{ width: '250px' }}>
                      <TextField label="Shipping width" />
                    </FormControl>
                    <FormControl sx={{ width: '250px' }}>
                      <TextField
                        select
                        label="Shipping width unit"
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
                    <FormControl sx={{ width: '250px' }}>
                      <TextField label="Shipping height" />
                    </FormControl>
                    <FormControl sx={{ width: '250px' }}>
                      <TextField
                        select
                        label="Shipping height unit"
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
                </Box>
                <Box>
                  <HandlingTimeDiv>
                    <FormControl sx={{ width: '250px' }}>
                      <TextField label="Minimum handling time" />
                    </FormControl>
                    <FormControl sx={{ width: '250px' }}>
                      <TextField label="Maximum handling time" />
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