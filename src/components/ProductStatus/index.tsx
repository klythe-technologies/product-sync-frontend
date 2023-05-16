import React from 'react';
import {
  FormControlLabel,
  Checkbox,
  Card,
  CardContent,
  Box,
  Divider,
  Typography,
  Link,
  Paper,
  Button
} from '@mui/material';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import Image from 'next/image';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';

const ProductStatus = () => {
  return (
    <>
      <Card sx={{ width: '300px', boxShadow: 'none', height: '73vh' }} variant="outlined">
        <CardContent>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontSize: '18px' }}>Status</Typography>
              <Typography sx={{ color: 'red' }}>Not approved</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <NotInterestedIcon />
              <Typography sx={{ fontSize: '12px', width: '186px' }}>
                This product cannot be shown.
                <Link href="/products/diagnostics" sx={{ textDecoration: 'underline' }}> Review and fix </Link>
                your product so it can be shown to customers.
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography sx={{ fontSize: '12px' }}>Visibility preference</Typography>
              <div>
                <FormControlLabel
                  sx={{ fontSize: '14px' }}
                  control={<Checkbox defaultChecked sx={{ color: 'blue' }} />}
                  label="Show on Klythe Sync once approved" />
              </div>
            </Box>
            <Divider sx={{ marginBottom: '10px' }} />
            <Paper variant="outlined" sx={{
              width: 152,
              height: '30vh',
            }}>
              <Box sx={{
                width: '150px',
                height: '152px',
              }}>
                <Image
                  src={'/images/avatars/avatar.jpg'}
                  alt={'logo'}
                  width={150}
                  height={152} />
                <Box sx={{ marginLeft: '5px' }}>
                  <Typography sx={{ fontSize: '12px', marginBottom: '10px', marginTop: '5px' }}>Best Kurta</Typography>
                  <Box sx={{ marginTop: '5px' }}>
                    <Typography>test</Typography>
                    <Box sx={{ display: 'flex', gap: '4%', marginBottom: '5px' }}>
                      <Typography
                        sx={{ display: 'flex', color: 'green' }}>
                        <CurrencyRupeeIcon
                          sx={{ width: '15px' }}
                        />
                        800.00
                      </Typography>
                      <Typography sx={{ textDecoration: 'line-through', display: 'flex', fontSize: '12px' }}>
                        <CurrencyRupeeIcon
                          sx={{ width: '15px' }}
                        />
                        1000.00
                      </Typography>
                    </Box>
                    <Typography sx={{ color: 'green', fontSize: '13px' }}>In stock</Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
            <Box sx={{ marginTop: '15px' }}>
              <Box sx={{ marginBottom: '10px' }}>
                <Typography sx={{ fontSize: '12px' }}>Last update</Typography>
                <Typography>3 days ago</Typography>
              </Box>
              <Box sx={{ marginBottom: '10px' }}>
                <Typography sx={{ fontSize: '12px' }}>Source</Typography>
                <Typography>One by one</Typography>
              </Box>
            </Box>
            <Button
              variant='outlined'
              sx={{ color: 'blue', textTransform: 'none', marginTop: '10px' }}>
              Delete Product
            </Button>
          </Box>
        </CardContent>
      </Card></>
  )
}
export default ProductStatus;