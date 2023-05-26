import React from 'react';
import {
  Box,
  Link,
  Divider,
  TextField,
  Typography,
  FormControl,
} from '@mui/material';

const BusinessDetails = () => {
  return (
    <Box>
      <Box>
        <Box>
          <Typography
            sx={{
              fontSize: '22px', padding: '15px',
              fontFamily: 'Google Sans,Roboto,Arial,sans-serif'
            }}>
            Your business details
          </Typography>
        </Box>
        <Divider />
        <Box sx={{ display: 'flex', padding: '24px 24px', flexWrap: 'wrap' }}>
          <Box sx={{ flexGrow: 1, flexBasis: 0, margin: '0 24px 24px 0' }}>
            <Typography
              sx={{ fontWeight: '500', fontSize: '1em', color: 'black', whiteSpace: 'nowrap' }}>
              Business name
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', flexGrow: 3, flexBasis: '48px' }}>
            <Box sx={{ display: 'flex', flexGrow: 3, flexBasis: '24px' }}>
              <form style={{ width: '100%' }}>
                <FormControl sx={{ width: '100%', minWidth: "400px" }}>
                  <TextField id="outlined-basic"
                    label="Name"
                    variant="outlined"
                    name="name"
                    sx={{ lineHeight: '1.25rem !important' }}
                  />
                </FormControl>
              </form>
            </Box>
            <Box sx={{ flexGrow: 1, flexBasis: '24px', marginLeft: '24px', minWidth: "200px" }}>
              <Typography
                sx={{ fontSize: '12px', marginTop: 0, letterSpacing: '0.025em' }}>
                To change your store name, edit it here and re-submit your product data.
              </Typography>
              <Link sx={{ textDecoration: 'underline', fontSize: '12px' }}>Learn more</Link>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box >
  )
}
export default BusinessDetails;