import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  CardContent,
} from '@mui/material';
import Image from 'next/image';
import themeConfig from 'src/configs/themeConfig';
import klytheLogo from '../../../public/images/logos/klytheLogo.png';
import { styled } from '@mui/material/styles';
import MuiCard, { CardProps } from '@mui/material/Card';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';

const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const ForgotPassword = () => {
  const [email, setEmail] = useState('');

  return (
    <Box sx={{
      justifyContent: 'center',
      alignItems: 'center',
      display: 'flex',
      padding: '40px'
    }}>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Typography
              variant='h6'
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                fontSize: '1rem !important'
              }}
            >
              Forgot Password
            </Typography>
          </Box>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant='body2'>Please Enter your email to Reset Password</Typography>
          </Box>
          <form
            noValidate
            autoComplete='off'
          >
            <TextField
              autoFocus
              fullWidth
              required
              id='email'
              label='Email'
              type="email"
              variant="outlined"
              sx={{ marginBottom: 4 }}
            // error={!!errors.email}
            // helperText={errors?.email?.message}
            // onChange={handleChange('email')}
            />
          </form>
          <Button
            fullWidth
            size='large'
            type="submit"
            variant='contained'
            sx={{ marginBottom: 7, textTransform: 'none' }}
          >
            Reset Password
          </Button>
        </CardContent>
      </Card>
    </Box>
  )
}
export default ForgotPassword;