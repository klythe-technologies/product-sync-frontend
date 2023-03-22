import React from 'react';
import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Link,
  Divider,
  FormControl,
  TextField,
  MenuItem,
  Button,
  Box
} from '@mui/material';
import { WeightUnit } from '../../constants/shipping-weight-unit';
import { LengthUnit } from '../../constants/shipping-length-unit';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import LaunchIcon from '@mui/icons-material/Launch';
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

const Shipping = () => {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
        >
          <Typography>
            Shipping, tax & returns
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <ShippingMainDiv>
            <div>
              <Typography
                sx={{ maxWidth: '250px', fontSize: '12px' }}>
                Once you've set up a shipping service, use
                advanced settings to define its shipping
                cost in more detail.
              </Typography>
            </div>
            <div style={{ gap: '170px' }}>
              <div>
                <Typography sx={{ fontSize: '14px' }}>
                  No shipping service added
                  <Link
                    sx={{ color: 'blue', marginLeft: '10px', textDecoration: 'underline' }}>
                    About shipping settings
                  </Link>
                </Typography>
              </div>

              <div>
                <Button
                  variant='text'
                  sx={{ color: 'blue', marginTop: '10px', textTransform: 'none', gap: '10px' }}>
                  Shipping
                  <LaunchIcon sx={{ color: 'blue', fontSize: '1.225rem' }} />
                </Button>
              </div>
              <Divider sx={{ marginTop: '40px', marginBottom: '30px' }} />
              <div>
                <form>
                  <div style={{ display: 'flex', gap: '50px' }}>
                    <div>
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
                    </div>
                    <Divider orientation="vertical" flexItem sx={{ height: '38vh' }} />
                    <div>
                      <Box>
                        <Typography
                          sx={{ maxWidth: '250px', fontSize: '12px' }}>
                          Shipping price must be set up at the
                          account-level in Merchant Center.
                        </Typography>
                        <Link
                          sx={{ textTransform: 'none', fontSize: '12px', textDecoration: 'underline', color: 'blue', marginTop: '8px' }}>
                          Learn more about shipping price
                        </Link>
                      </Box>
                      <div style={{ marginTop: '35px' }}>
                        <Typography
                          sx={{ maxWidth: '250px', fontSize: '12px' }}>
                          The shipping weight attribute lets you
                          include the weight to use when calculating shipping costs.
                        </Typography>
                        <Link
                          sx={{ textTransform: 'none', fontSize: '12px', textDecoration: 'underline', color: 'blue' }}>
                          Learn more about shipping weight
                        </Link>
                      </div>
                      <div style={{ marginTop: '30px' }}>
                        <Typography
                          sx={{ maxWidth: '250px', fontSize: '12px' }}>
                          Enter the dimensions of the package
                          for your product using the shipping
                          length, shipping width, and
                          shipping height attributes. These 3 attributes
                          help determine the shipping cost if
                          you're using a carrier-calculated
                          shipping method in Merchant Center.
                        </Typography>
                        <Link
                          sx={{ textTransform: 'none', fontSize: '12px', textDecoration: 'underline', color: 'blue' }}>
                          Learn more about shipping dimensions
                        </Link>
                      </div>
                    </div>
                  </div>
                  <Divider sx={{width: '62%'}} />
                  <div>
                    <HandlingTimeDiv>
                      <FormControl sx={{ width: '250px' }}>
                        <TextField label="Minimum handling time" />
                      </FormControl>
                      <FormControl sx={{ width: '250px' }}>
                        <TextField label="Maximum handling time" />
                      </FormControl>
                    <Divider orientation="vertical" flexItem sx={{ height: '10vh' }} />
                      <div>
                        <Typography
                          sx={{ maxWidth: '250px', fontSize: '12px' }}>
                          Use minimum and maximum handling
                          time to help us give users accurate
                          information about how long it will
                          take for a product to arrive at its
                          destination.
                        </Typography>
                        <Link
                          sx={{ textTransform: 'none', fontSize: '12px', textDecoration: 'underline', color: 'blue' }}>
                          Learn more about handling time
                        </Link>
                      </div>
                    </HandlingTimeDiv>
                    <Divider sx={{width: '62%'}} />
                    <div>
                      <Typography
                        sx={{ marginTop: '4%', fontSize: '14px' }}>
                        No taxes set up
                      </Typography>
                    </div>
                    <div>
                      <Button
                        variant='text'
                        sx={{ color: 'blue', marginTop: '4%', textTransform: 'none', gap: '10px' }}>
                        Tax
                        <LaunchIcon sx={{ color: 'blue', fontSize: '1.225rem' }} />
                      </Button>
                    </div>
                  </div>
                </form>
              </div>
            </div>
            <div>
            </div>
          </ShippingMainDiv>
        </AccordionDetails>
      </Accordion>
    </div>
  )
}
export default Shipping;