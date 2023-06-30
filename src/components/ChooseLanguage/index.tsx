import React from 'react';
import { Language } from '../../constants/language';
import {
  FormControl,
  TextField,
  MenuItem,
  Typography,
  Box,
  Grid,
  Card,
  Container
} from '@mui/material';

const ChooseLanguage = () => {
  return (
    <Box sx={{ width: '80%', margin: '0 auto' }}>
      <Grid container rowSpacing={1} columnSpacing={6} >
        <Grid item xs={12} lg={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

            <Typography variant="subtitle1">
              Language
            </Typography>
            <Typography
              variant="subtitle2">
              Select the language of your product details,
              such as title and description.
            </Typography>
          </Box>
        </Grid>
      </Grid>
      <Box  sx={{ width:'100%', display:'flex', justifyContent:'right'}}>
        <Card elevation={0} variant="outlined" sx={{marginTop:'-50px'}} >
          <Container
            sx={{
              padding: '20px'
            }}
          >
            <TextField
              select type="select"
              InputLabelProps={{ style: { fontSize: 12 } }}
              label="Language"
              size="small"
              margin="dense"
              sx={{width:'44rem', padding:'20px', maxWidth:'100%', minWidth:'100%'}}
             
              defaultValue="English">
              {Language.map((option: any) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
            <Box className='bottom_section' style={{ display: 'flex', gap: '43%', fontSize: '12px' }}>
              <Typography
                sx={{ fontSize: '12px' }}>
                Your product will show in this language
              </Typography>
            </Box>
          </Container>
        </Card>
      </Box>
    </Box>
  )
}
export default ChooseLanguage;