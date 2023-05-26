import React from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  FormControl,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import InfoIcon from '@mui/icons-material/Info';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 13,
    height: '17vh',
    paddingTop: '20px',
    paddingLeft: '20px'
  },
}));


const BusinessAddress = () => {

  const [values, setValues] = React.useState({
    address1: '',
    address2: '',
    city: '',
    state: '',
    zipcode: ''
  })

  // const handleChange = (event: any) => {
  //   console.log("event", event)
  //   setValues({
  //     address1: values.address1,
  //     address2: values.address2,
  //     city: values.city,
  //     state: values.state,
  //     zipcode: values.zipcode
  //   })
  // }
  console.log("value", values)

  return (
    <Box>
      <Box>
        <Box sx={{ display: 'flex', padding: '24px 24px', flexWrap: 'wrap' }}>
          <Box sx={{ flexGrow: 1, flexBasis: 0, margin: '0 24px 24px 0' }}>
            <Typography
              sx={{ fontWeight: '500', fontSize: '1em', color: 'black', whiteSpace: 'nowrap' }}>
              Business address
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexGrow: 3, flexBasis: '48px' }}>
            <Box sx={{ display: 'flex', flexGrow: 3, flexBasis: '24px' }}>
              <form style={{ width: '100%' }}>
                <FormControl sx={{ width: '100%', minWidth: "400px" }}>
                  <TextField id="outlined-basic"
                    label="Address line 1"
                    variant="outlined"
                    name="address1"
                    required
                    value={values.address1}
                    sx={{ lineHeight: '1.25rem !important', marginBottom: '25px' }}
                    onChange={(e) => setValues({ ...values, address1: e.target.value })}
                  />
                </FormControl>
                <FormControl sx={{ width: '100%', minWidth: "400px" }}>
                  <TextField id="outlined-basic"
                    label="Address line 2"
                    variant="outlined"
                    name="address2"
                    value={values.address2}
                    sx={{ lineHeight: '1.25rem !important', marginBottom: '25px' }}
                    onChange={(e) => setValues({ ...values, address2: e.target.value })}
                  />
                </FormControl>
                <FormControl sx={{ width: '100%', minWidth: "400px" }}>
                  <TextField id="outlined-basic"
                    label="City"
                    variant="outlined"
                    name="city"
                    value={values.city}
                    required
                    sx={{ lineHeight: '1.25rem !important', marginBottom: '25px' }}
                    onChange={(e) => setValues({ ...values, city: e.target.value })}
                  />
                </FormControl>
                <FormControl sx={{ width: '100%', minWidth: "400px" }}>
                  <TextField id="outlined-basic"
                    label="State/Province"
                    variant="outlined"
                    name="state"
                    value={values.state}
                    sx={{ lineHeight: '1.25rem !important', marginBottom: '25px' }}
                    onChange={(e) => setValues({ ...values, state: e.target.value })}
                  />
                </FormControl>
                <FormControl sx={{ width: '100%', minWidth: "400px" }}>
                  <TextField id="outlined-basic"
                    label="Postal/ZIP code"
                    variant="outlined"
                    name="zipcode"
                    required
                    value={values.zipcode}
                    sx={{ lineHeight: '1.25rem !important', marginBottom: '25px' }}
                    onChange={(e) => setValues({ ...values, zipcode: e.target.value })}
                  />
                </FormControl>
                <Box sx={{ paddingLeft: '10px' }}>
                  <Box sx={{ display: 'flex' }}>
                    <Typography sx={{ fontSize: '12px', marginRight: '10px' }}>
                      Country
                    </Typography>
                    <LightTooltip title="The country in which your business is based. 
                    This country was selected when creating Merchant Center, and cannot be changed."
                      placement="right-start"
                    >
                      <InfoIcon sx={{ color: 'gray', width: '20px' }} />
                    </LightTooltip>
                  </Box>
                  <Box>
                    <Typography sx={{ fontSize: '14px' }}>India</Typography>
                  </Box>
                </Box>
                {
                  values.address1 || values.address2 || values.city || values.state || values.zipcode ?
                    <Box>
                      <Box sx={{ textAlign: 'end' }}>
                        <Button sx={{ textTransform: 'none', color: '#1A73E8' }}>Cancel</Button>
                        <Button sx={{ textTransform: 'none', backgroundColor: '#1A73E8' }} variant="contained">Save</Button>
                      </Box>
                    </Box>
                    : <></>
                }
              </form>
            </Box>
            <Box sx={{ flexGrow: 1, flexBasis: '24px', marginLeft: '24px', minWidth: "200px" }}>
            </Box>
          </Box>
        </Box>
      </Box >
    </Box >
  )
}
export default BusinessAddress;