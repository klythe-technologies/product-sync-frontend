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
    <Card>
      <CardMedia>
        <img src={'/images/cards/paper-boat.png'} alt="Icon"
          style={{ height: '14.5625rem', margin: 'auto' }} />
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
        <Box sx={{ justifyContent: 'space-between', marginTop: '20px', display: 'flex' }}>
          <Box>
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
          <Box >
            {
              !connect ?
                <Button
                  variant='contained'
                  sx={{
                    textTransform: 'none', padding: '5px',
                    fontSize: '11px'
                  }}
                  onClick={handleConnect}
                >
                  Connect
                </Button>
                :
                <Button
                  variant='contained'
                  sx={{
                    textTransform: 'none', padding: '5px',
                    fontSize: '11px'
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
