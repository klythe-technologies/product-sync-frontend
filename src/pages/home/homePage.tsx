import React from 'react';
import { Typography, Grid, Box, Paper, Link, Divider, Card, CardContent } from '@mui/material';
import themeConfig from 'src/configs/themeConfig'
import Widgets from 'mdi-material-ui/Widgets';
import ArrowCircleRightOutlinedIcon from '@mui/icons-material/ArrowCircleRightOutlined';

// const productStep = [
//     {
//         img: `${ArrowCircleRightOutlinedIcon}`,
//         title: 'Add your business address',
//         link: 'Add'
//     },
//     {
//         img: `${ArrowCircleRightOutlinedIcon}`,
//         title: 'Verify your phone number to confirm its you',
//         link: 'Verify'
//     },
//     {
//         img: `${ArrowCircleRightOutlinedIcon}`,
//         title: 'Confirm the online store of your business',
//         link: 'Confirm'
//     },
//     {
//         img: `${ArrowCircleRightOutlinedIcon}`,
//         title: 'Add details to show how you ship your products',
//         link: 'Add'
//     },
// ]

const HomePage = () => {
  return (
    <>
      <Typography variant='h5'>Test, welcome to  {themeConfig.templateName}</Typography>
      <Typography>Complete these steps to show your products on  {themeConfig.templateName}</Typography>
      <Box
        sx={{
          display: 'bloack',
          '& > :not(style)': {
          },
        }}
      >
        <div >
          <Typography sx={{ marginTop: 20, marginBottom: 10, display: 'flex' }} variant='h6'>
            <Widgets sx={{ marginRight: 5 }} />
            Show your products on {themeConfig.templateName}</Typography>
        </div>
        <Paper variant="outlined" sx={{
          width: 600,
          height: 350
        }}>
          <Grid container spacing={2} sx={{ padding: 6 }}>
            <Grid item sx={{ color: 'blue', display: 'flex', gap: 6 }}>
              <ArrowCircleRightOutlinedIcon />
              <Typography sx={{ color: 'black', fontSize: '14px' }}>
                Add your business address
              </Typography>
              <Link href="#" sx={{ color: 'blue' }}> Add</Link>
            </Grid>
            <Divider sx={{ height: '1vh', width: '100%' }} />
            <Grid item sx={{ color: 'blue', display: 'flex', gap: 6 }}>
              <ArrowCircleRightOutlinedIcon />
              <Typography sx={{ color: 'black', fontSize: '14px' }}>
                Verify your phone number to confirm its you
              </Typography>
              <Link href="#" sx={{ color: 'blue' }}> Verify</Link>
            </Grid>
            <Divider sx={{ height: '1vh', width: '100%' }} />
            <Grid item sx={{ color: 'blue', display: 'flex', gap: 6 }}>
              <ArrowCircleRightOutlinedIcon />
              <Typography sx={{ color: 'black', fontSize: '14px' }}>
                Confirm the online store of your business
              </Typography>
              <Link href="#" sx={{ color: 'blue' }}> Confirm</Link>
            </Grid>
            <Divider sx={{ height: '1vh', width: '100%' }} />
            <Grid item sx={{ color: 'blue', display: 'flex', gap: 6 }}>
              <ArrowCircleRightOutlinedIcon />
              <Typography sx={{ color: 'black', fontSize: '14px' }}>
                Add details to show how you ship your products
              </Typography>
              <Link href="#" sx={{ color: 'blue' }}> Add</Link>
            </Grid>
            <Divider sx={{ height: '1vh', width: '100%' }} />
            <Grid item sx={{ color: 'blue', display: 'flex', gap: 6 }}>
              <ArrowCircleRightOutlinedIcon />
              <Typography sx={{ color: 'black', fontSize: '14px' }}>Adding Products</Typography>
              <Link href="#" sx={{ color: 'blue' }}>Go to Products</Link>
            </Grid>
            <Typography sx={{ paddingLeft: '50px', paddingTop: '5px', fontSize: '14px' }}>
              This might tAddake a few minutes. After your products are added, you'll find them in Products.
            </Typography>
          </Grid>
        </Paper>
      </Box>
      <Divider sx={{ marginTop: '10px', marginBottom: '10px' }} />

      <Paper variant="outlined" sx={{
        width: 600,
        height: 300,
        padding: 5
      }}>
        <div >
          <Typography variant='h6'>
            <Widgets sx={{ marginRight: 5 }} />
            Products</Typography>
          <Typography sx={{ marginLeft: '35px', fontSize: '14px' }}>When you add products, this is where their status will appear</Typography>
          <Card sx={{ height: '150px', marginTop: '5px' }}>
            <CardContent>image here!</CardContent>
          </Card>
          <Divider />
          <Link href="#" sx={{ color: 'blue', marginLeft: '25px' }}>Manage Products</Link>
        </div>
      </Paper>
    </>
  )
}

export default HomePage;