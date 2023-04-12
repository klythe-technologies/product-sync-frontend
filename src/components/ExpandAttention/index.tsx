import React from 'react';
import { Box, Alert, Typography, Link } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';

const ExpandAttention = () => {
  const [loadMore, setLoadMore] = React.useState(false);

  const handleMore = () => {
    setLoadMore(true);
  }

  const handleLess = () => {
    setLoadMore(false);
  }

  return (
    <Box
      sx={{
        display: 'block'
      }}>
      <Box
        sx={{
          display: 'flex',
          gap: '10px'

        }}>
        {
          !loadMore ?
            <ExpandMoreIcon onClick={handleMore} sx={{ margin: 'auto' }} />
            :
            <ExpandLessIcon onClick={handleLess} sx={{ margin: 'auto' }} />
        }

        <Alert severity="error"
          sx={{
            paddingTop: '0',
            paddingBottom: '0',
            color: 'black',
            backgroundColor: 'white',
          }} >
          <Typography sx={{
            fontFamily: 'Roboto,Arial,sans-serif',
            fontSize: '16px',
          }}>
            Invalid value [sale price]
          </Typography>
        </Alert>
      </Box>
      <Box>
        {
          loadMore ?
            <Box sx={{
              padding: '10px'
            }}>
              <Box sx={{
                marginBottom: '5px'
              }}>
                <Typography
                  sx={{
                    fontSize: '.875rem',
                    color: 'gray'
                  }}>
                  Submit a valid value based on Google's
                  <Typography sx={{
                    fontSize: '.875rem',
                    color: 'gray'
                  }}>
                    product data specification
                  </Typography>
                </Typography>
                <Link sx={{ textDecoration: 'underline', color: 'blue' }}>Learn more</Link>
              </Box>
              <Box>
                <Typography sx={{ color: 'gray', fontSize: '12px' }}>Affects</Typography>
                <Typography sx={{ fontSize: '14px' }}>Online store(India)</Typography>
              </Box>
            </Box>
            : ''
        }
      </Box>
    </Box>
  )
}
export default ExpandAttention;