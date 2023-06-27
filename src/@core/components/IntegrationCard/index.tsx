import React, { useState } from 'react';
import {
  Box,
  Card,
  Button,
  CardMedia,
  Typography,
  CardContent,
} from '@mui/material';

const IntegrationCard = (props: any) => {
  const [connect, setConnect] = useState(false);

  const handleConnect = () => {
    setConnect(true);
    console.log("its - connected", connect);
  }

  const handleDisconnect = () => {
    setConnect(false);
    console.log("its - disconnected", connect);
  }

  return (

    <Card sx={{ borderRadius: '8px', height: '100%' }}>
      <CardMedia sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <img src={'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png'} alt="Icon"
          style={{ height: '40%', width: '50%', margin: '2vw' }} />
      </CardMedia>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography variant='h6' sx={{ marginBottom: 2 }}>
            {props.title}
          </Typography>
        </Box>
        <Typography sx={{ fontSize: '12px' }}>
          {props.description}
        </Typography>
        <Box sx={{ marginTop: '20px', display: 'flex' }}>
          <Box style={{ width: '100%' }}>
            {
              connect ?
                <Button
                  variant='outlined'
                  sx={{
                    textTransform: 'none', padding: '5px',
                    fontSize: '10px', borderRadius: '40px'

                  }}
                >
                  Connected
                </Button>
                : ''
            }
          </Box>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', width: '330in', marginRight: '6px', margin: 'none' }}>
            {
              !connect ?
                <Button
                  variant='contained'
                  onClick={handleConnect}
                  fullWidth
                >
                  Connect
                </Button>
                :
                <Button
                  variant='contained'

                  sx={{
                    textTransform: 'none', padding: '5px',
                    fontSize: '11px',
                    color: 'primary'

                  }}
                  onClick={handleDisconnect}
                >
                  Disconnect
                </Button>
            }
          </Box>
        </Box>
      </CardContent>
    </Card>
  );
}

export default IntegrationCard;
