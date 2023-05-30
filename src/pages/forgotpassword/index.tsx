import React, { useState } from "react";
import {
  Box,
  Button,
  TextField,
  Typography,
  CardContent,
} from '@mui/material';
import klytheLogo from '../../../public/images/logos/klytheLogo.png';
import { styled } from '@mui/material/styles';
import MuiCard, { CardProps } from '@mui/material/Card';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from 'yup';
import { useRouter } from 'next/router';
import { Controller, useForm } from 'react-hook-form';

const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const defaultValues = {
  email: ''
}

const schema = yup.object().shape({
  email: yup.string()
    .email('You must enter a valid email')
    .required('You must enter a email'),
})

const ForgotPassword = () => {
  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    defaultValues,
    resolver: yupResolver(schema)
  });

  const { errors } = formState;
  const router = useRouter();

  const backToLogin = () => {
    router.push('/')
  }

  const onSubmit = () => {
    reset(defaultValues);
  }

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
            onSubmit={handleSubmit(onSubmit)}
          >
            <Controller
              name="email"
              control={control}
              render={({ field }) => (
                <TextField
                  {...field}
                  fullWidth
                  required
                  autoFocus
                  id='email'
                  type='email'
                  label='Email'
                  sx={{ marginBottom: 4 }}
                  error={!!errors.email}
                  helperText={errors?.email?.message}
                />
              )}
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
          <Button
            fullWidth
            size='large'
            variant='contained'
            sx={{ marginBottom: 7, textTransform: 'none' }}
            onClick={backToLogin}
          >
            Back to Login
          </Button>
        </CardContent>
      </Card>
    </Box>
  )
}
export default ForgotPassword;