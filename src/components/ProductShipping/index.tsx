import React from 'react';
import {
  Box,
  Typography,
  FormControl,
  TextField,
  MenuItem
} from '@mui/material';
import { WeightUnit } from '../../constants/shipping-weight-unit';
import { LengthUnit } from '../../constants/shipping-length-unit';
import { styled } from '@mui/material/styles';

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
    <Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Box className='main_div' sx={{ display: 'flex', gap: '25px', marginTop: '20px', flexWrap: 'wrap' }}>
          <Box sx={{ flexGrow: 1, flexBasis: 0, margin: '0 24px 24px 0' }}>
            <Typography sx={{ fontWeight: '500', fontSize: '16px', color: 'black', whiteSpace: 'nowrap' }}>
              Shipping, tax & returns
            </Typography>
            <Typography
              sx={{ fontSize: '12px' }}>
              Once you've set up a shipping service, use
              advanced settings to define its shipping
              cost in more detail.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexGrow: 2, flexBasis: '48px' }}>
            <Box sx={{ display: 'flex', flexGrow: 2, flexBasis: '24px' }}>
              <form style={{ width: '100%' }}>
                <Box>
                  <FormControlDiv>
                    <FormControl sx={{ width: '250px' }}>
                      <TextField label="Shipping weight" />
                    </FormControl>
                    <FormControl sx={{ width: '250px' }}>
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
                  </FormControlDiv>
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
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default ProductShipping;