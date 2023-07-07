import React from 'react';
import {
  Typography,
  Button,
  Link,
  Box,
  Alert,
  ListItem,
  List,
} from '@mui/material';

const MoreInfo = () => {
  const [loadMore, setLoadMore] = React.useState(false);
  const [open, setOpen] = React.useState(true);

  const handleMore = () => {
    setLoadMore(true);
  }

  const handleLess = () => {
    setLoadMore(false);
  }

  return (
    <>
      <Box style={{ display: 'flex', gap: '20px' }}>
        <Box sx={{ marginBottom: '20px', padding: '0' }}>
          {
            open ?
              <Alert severity="info"
                sx={{ paddingTop: '0', paddingBottom: '0' }} >
                <Box sx={{ display: 'flex', gap: '500px' }}>
                  <Box>
                    More information about your product.
                    <Button
                      sx={{ textTransform: 'none', padding: '0', marginLeft: '8px' }}
                      onClick={handleMore}>{!loadMore ? 'Show more' : ''}</Button>
                  </Box>
                  <Box>
                    <Button
                      sx={{ textTransform: 'none', padding: '0' }}
                      onClick={() => setOpen(false)}>Dismiss</Button>
                  </Box>
                </Box>
                {
                  loadMore ?
                    <Box sx={{ padding: '0' }}>
                      <List sx={{ listStyleType: "disc", display: 'list-item', listStylePosition: 'inside', padding: '0' }}>
                        <ListItem sx={{ display: 'flex', gap: '6px', margin: '0', padding: '0' }}>
                          <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>
                            Pending initial review:
                          </Typography>
                          <Typography
                            sx={{ fontSize: '14px', marginRight: '10px' }}>
                            Please wait up to 3 business days for the review to be completed.
                          </Typography>
                          <Link href="#" sx={{ color: 'blue', textDecoration: 'underline' }}>Learn more</Link>
                        </ListItem>
                      </List>
                      <Button
                        sx={{ textTransform: 'none', padding: '0', paddingTop: '5px ' }}
                        onClick={handleLess}>Show less</Button>
                    </Box>
                    : ''
                }
              </Alert>
              : ''
          }
        </Box>
      </Box>
    </>
  )
}
export default MoreInfo;