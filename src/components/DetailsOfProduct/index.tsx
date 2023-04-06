import React from 'react';
import {
  Divider,
  Paper,
  Card,
  CardContent,
  Typography,
  Button,
  Box,
  Link,
  BoxProps
} from '@mui/material';
import Image from 'next/image';
import EditIcon from '@mui/icons-material/Edit';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CollectionsIcon from '@mui/icons-material/Collections';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ViewAdditionalDetails from 'src/components/ViewAdditionalDetails';
import { useRouter } from 'next/router';

function Item(props: BoxProps) {
  const { sx, ...other } = props;

  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        ...sx,
        fontSize: '12px',
        gap: '50%',
        width: 130
      }}
      {...other}
    />
  );
}

const DetailsOfProduct = () => {
  const router = useRouter();

  const handleClick = () => {
    router.push('/products/editproduct');
  }

  return (
    <>
      <Card variant="outlined" sx={{ boxShadow: 'none' }}>
        <CardContent>
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', paddingBottom: '10px' }}>
              <Typography sx={{ fontSize: '18px' }}>Best Kurta</Typography>
              <Button
                variant='contained'
                sx={{ textTransform: 'none', backgroundColor: 'blue', gap: '5px' }}
                onClick={handleClick}
              >
                <EditIcon />
                Edit Product
              </Button>
            </div>
            <Divider />
            <div style={{ display: 'flex', gap: '30px', marginTop: '30px' }}>
              <div>
                <Paper variant="outlined" sx={{
                  width: 330,
                  height: 330,
                  display: 'flex'
                }}>
                  <Box sx={{ width: '320px', alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                    <Image
                      src={'/images/avatars/avatar.jpg'}
                      alt={'logo'}
                      width={256}
                      height={256} />
                  </Box>
                </Paper>
                <Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                  <Paper variant="outlined" sx={{
                    width: 105,
                    height: 104,
                    display: 'flex'
                  }}>
                    <Box sx={{ alignItems: 'center', display: 'flex', margin: 'auto', justifyContent: 'center' }}>
                      <AddPhotoAlternateIcon />
                    </Box>
                  </Paper>
                  <Paper variant="outlined" sx={{
                    width: 105,
                    height: 104,
                    display: 'flex'
                  }}>
                    <Box sx={{ alignItems: 'center', display: 'flex', margin: 'auto', justifyContent: 'center' }}>
                      <AddPhotoAlternateIcon />
                    </Box>
                  </Paper>
                  <Paper variant="outlined" sx={{
                    width: 105,
                    height: 104,
                    display: 'flex'
                  }}>
                    <Box sx={{ alignItems: 'center', display: 'flex', margin: 'auto', justifyContent: 'center' }}>
                      <AddPhotoAlternateIcon />
                    </Box>
                  </Paper>
                </Box>
                <Box sx={{ textAlign: 'end', marginTop: '40px' }}>
                  <Button sx={{ color: 'blue', textTransform: 'none' }} onClick={handleClick}>
                    <CollectionsIcon sx={{ marginRight: '10px', width: '17px' }} />
                    Manage images
                  </Button>
                </Box>
                <Box sx={{ marginTop: '10px' }}>
                  <Typography sx={{ fontSize: '12px' }}>Description</Typography>
                  <Typography>this is the brand new kurta</Typography>
                </Box>
              </div>
              <div>
                <Box>
                  <Typography sx={{ fontSize: '12px' }}>Product page on your website</Typography>
                  <Typography>
                    <Link sx={{ textDecoration: 'underline', }}>
                      Product link will be here
                    </Link>
                  </Typography>
                  <Divider sx={{ marginTop: '17px' }} />
                  <div>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                      <Item>
                        <Typography sx={{ fontSize: '12px' }}>Price</Typography>
                        <Typography sx={{ display: 'flex' }}>
                          <CurrencyRupeeIcon
                            sx={{ width: '15px', marginTop: '-3px' }}
                          />
                          500.00
                        </Typography>
                      </Item>
                      <Item>
                        <Typography sx={{ fontSize: '12px' }}>Availability</Typography>
                        <Typography>In stock</Typography>
                      </Item>
                    </Box>
                  </div>
                  <div>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
                      <Item>
                        <Typography sx={{ fontSize: '12px' }}>Sale price</Typography>
                        <Typography sx={{ color: 'green', display: 'flex' }}>
                          <CurrencyRupeeIcon
                            sx={{ width: '15px' }}
                          />
                          800.00
                        </Typography>
                      </Item>
                    </Box>
                  </div>
                  <Divider />
                  <div>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                      <Item>
                        <Typography sx={{ fontSize: '12px' }}>Brand</Typography>
                        <Typography sx={{ display: 'flex' }}>
                          <CurrencyRupeeIcon
                            sx={{ width: '15px' }}
                          />
                          Libas
                        </Typography>
                      </Item>
                      <Item>
                        <Typography sx={{ fontSize: '12px' }}>Product ID</Typography>
                        <Typography>15228724</Typography>
                      </Item>
                    </Box>
                  </div>
                  <Divider />
                  <div>
                    <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
                      <Item>
                        <Typography sx={{ fontSize: '12px' }}>Condition</Typography>
                        <Typography>New</Typography>
                      </Item>
                    </Box>
                  </div>
                </Box>
              </div>
            </div>
          </div>
        </CardContent>
        <ViewAdditionalDetails />
      </Card>
    </>
  )
}
export default DetailsOfProduct;