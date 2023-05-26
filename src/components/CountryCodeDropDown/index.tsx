import * as React from 'react';
import {
  Box,
  Link,
  TextField,
  Typography,
  Autocomplete,
  InputAdornment
} from '@mui/material';
import { countryCode } from 'src/constants/phone-code';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const CountryCode = () => {
  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex', padding: '24px 24px', flexWrap: 'wrap' }}>
          <Box sx={{ flexGrow: 1, flexBasis: 0, margin: '0 24px 24px 0' }}>
            <Typography
              sx={{ fontWeight: '500', fontSize: '1em', color: 'black', whiteSpace: 'nowrap' }}>
              Phone number
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexGrow: 3, flexBasis: '48px', gap: '5%' }}>
            <Box sx={{ display: 'flex', flexGrow: 1, flexBasis: '24px' }}>
              <Autocomplete
                id="combo-box-demo"
                options={countryCode}
                getOptionLabel={(option) => option.label}
                sx={{ width: 200 }}
                defaultValue={countryCode[7]}
                renderOption={(props, option) =>
                (<Box component="li" {...props}>
                  {option.label}  {option.code}
                </Box>
                )
                }
                renderInput={(params) =>
                  <TextField {...params} label="Country code" />}
              />
            </Box>
            <Box sx={{ display: 'flex', flexGrow: 3, flexBasis: '20px' }}>
              <TextField label="Phone number" sx={{ width: '400px' }}
                InputProps={{
                  startAdornment: <InputAdornment position="start">ph</InputAdornment>,
                }}
              />
            </Box>
          </Box>
          <Box sx={{ flexGrow: 1, flexBasis: '24px', marginLeft: '24px', minWidth: "200px" }}>
            <Typography
              sx={{ fontSize: '12px', marginTop: 0, letterSpacing: '0.025em' }}>
              Google will use this number to verify you're the owner of the business. It won't be displayed to customers.
            </Typography>
            <Link sx={{ textDecoration: 'underline', fontSize: '12px' }}>Learn more</Link>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', gap: '2%' }}>
          <WarningAmberIcon sx={{ color: 'orange' }} />
          <Typography>Not verified</Typography>
        </Box>
      </Box>
    </Box>
  );
}
export default CountryCode;