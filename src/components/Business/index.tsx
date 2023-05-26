import React from 'react';
import {
  Box,
  Card,
  Button,
  Divider,
  Typography,
  CardContent,
} from '@mui/material';
import { useRouter } from 'next/router';

const Business = () => {
  const router = useRouter();

  const editBusinessDetails = () => {
    router.push('/merchantprofile/businessinfo/edit')
  }

  return (
    <Box>
      <Box>
        <Card sx={{ borderRadius: '8px', maxWidth: '450px' }} variant='outlined'>
          <CardContent>
            <Typography sx={{ padding: '14px 20px' }}>Business details</Typography>
            <Typography sx={{ padding: '0 20px' }}>test</Typography>
            <Typography sx={{ padding: '5.5px 0 2px 20px' }}>India</Typography>
          </CardContent>
          <Divider />
          <Box>
            <Button
              sx={{ textTransform: 'none', padding: '10px 35px', color: '#1a73e8' }}
              onClick={editBusinessDetails}
            >
              Edit business details
            </Button>
          </Box>
        </Card>
      </Box>
    </Box>
  )
}
export default Business;