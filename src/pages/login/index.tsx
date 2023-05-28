import { ChangeEvent, MouseEvent, ReactNode, useState } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  Button,
  Divider,
  Checkbox,
  TextField,
  Typography,
  IconButton,
  CardContent,
  FormControl,
} from '@mui/material';

import Link from 'next/link';
import Image from 'next/image';
import { styled } from '@mui/material/styles';
import MuiCard, { CardProps } from '@mui/material/Card';
import InputAdornment from '@mui/material/InputAdornment';
import MuiFormControlLabel, { FormControlLabelProps } from '@mui/material/FormControlLabel';
import Google from 'mdi-material-ui/Google';
import Github from 'mdi-material-ui/Github';
import Twitter from 'mdi-material-ui/Twitter';
import Facebook from 'mdi-material-ui/Facebook';
import EyeOutline from 'mdi-material-ui/EyeOutline';
import EyeOffOutline from 'mdi-material-ui/EyeOffOutline';
import klytheLogo from '../../../public/images/logos/klytheLogo.png';
import { yupResolver } from '@hookform/resolvers/yup';
import { Controller, useForm } from 'react-hook-form';
import themeConfig from 'src/configs/themeConfig';
import BlankLayout from 'src/@core/layouts/BlankLayout';
import * as yup from 'yup';
import axios from 'axios';

interface State {
  email: string
  password: string
  showPassword: boolean
  remember: boolean
}

// ** Styled Components
const Card = styled(MuiCard)<CardProps>(({ theme }) => ({
  [theme.breakpoints.up('sm')]: { width: '28rem' }
}))

const LinkStyled = styled('a')(({ theme }) => ({
  fontSize: '0.875rem',
  textDecoration: 'none',
  color: theme.palette.primary.main
}))

const FormControlLabel = styled(MuiFormControlLabel)<FormControlLabelProps>(({ theme }) => ({
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))


const schema = yup.object().shape({
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
});

const LoginPage = () => {
  const [values, setValues] = useState<State>({
    email: '',
    password: '',
    showPassword: false,
    remember: true
  })

  const { control, formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    values,
    resolver: yupResolver(schema)
  });

  const { errors } = formState;

  const router = useRouter()

  const handleChange = (prop: keyof State) => (event: ChangeEvent<HTMLInputElement>) => {
    setValues({ ...values, [prop]: event.target.value })
  }

  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword })
  }

  const handleMouseDownPassword = (event: MouseEvent<HTMLButtonElement>) => {
    event.preventDefault()
  }

  const onSubmit = () => {
    reset(values);
    console.log("values", values);
    // axios.get('http://localhost:3001/login', {
    // })
    //   .then((response) => {
    //     console.log("value", response);
    //   });
  };


  return (
    <Box className='content-center'>
      <Card sx={{ zIndex: 1 }}>
        <CardContent sx={{ padding: theme => `${theme.spacing(12, 9, 7)} !important` }}>
          <Box sx={{ mb: 8, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <Image
              src={klytheLogo}
              alt={'logo'}
              width={35}
              height={29}
            />
            <Typography
              variant='h6'
              sx={{
                ml: 3,
                lineHeight: 1,
                fontWeight: 600,
                textTransform: 'uppercase',
                fontSize: '1.5rem !important'
              }}
            >
              {themeConfig.templateName}
            </Typography>
          </Box>
          <Box sx={{ mb: 6, textAlign: 'center' }}>
            <Typography variant='body2'>Please sign-in to your account</Typography>
          </Box>
          <form
            noValidate
            autoComplete='off'
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              autoFocus
              fullWidth
              id='email'
              label='Email'
              type="email"
              variant="outlined"
              required
              sx={{ marginBottom: 4 }}
              error={!!errors.email}
              helperText={errors?.email?.message}
              onChange={handleChange('email')}
            />
            <FormControl fullWidth>
              <TextField
                label='Password'
                value={values.password}
                id='auth-login-password'
                error={!!errors.password}
                helperText={errors?.password?.message}
                onChange={handleChange('password')}
                type={values.showPassword ? 'text' : 'password'}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position='end'>
                      <IconButton
                        edge='end'
                        onClick={handleClickShowPassword}
                        onMouseDown={handleMouseDownPassword}
                        aria-label='toggle password visibility'
                      >
                        {values.showPassword ? <EyeOutline /> : <EyeOffOutline />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </FormControl>
            <Box
              sx={{ mb: 4, display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'space-between' }}
            >
              <Controller
                name="remember"
                control={control}
                render={({ field }) => (
                  <FormControl>
                    <FormControlLabel
                      label="Remember Me"
                      control={<Checkbox {...field} />}
                    />
                  </FormControl>
                )}
              />
              <Link passHref href='/forgotpassword'>
                <LinkStyled>Forgot Password?</LinkStyled>
              </Link>
            </Box>
            <Button
              fullWidth
              size='large'
              type="submit"
              variant='contained'
              sx={{ marginBottom: 7 }}
            >
              Login
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{ marginRight: 2 }}>
                New on our platform?
              </Typography>
              <Typography variant='body2'>
                <Link passHref href='/register'>
                  <LinkStyled>Create an account</LinkStyled>
                </Link>
              </Typography>
            </Box>
            <Divider sx={{ my: 5 }}>or</Divider>
            <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Link href='/' passHref>
                <IconButton component='a' onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}>
                  <Facebook sx={{ color: '#497ce2' }} />
                </IconButton>
              </Link>
              <Link href='/' passHref>
                <IconButton component='a' onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}>
                  <Twitter sx={{ color: '#1da1f2' }} />
                </IconButton>
              </Link>
              <Link href='/' passHref>
                <IconButton component='a' onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}>
                  <Github
                    sx={{ color: theme => (theme.palette.mode === 'light' ? '#272727' : theme.palette.grey[300]) }}
                  />
                </IconButton>
              </Link>
              <Link href='/' passHref>
                <IconButton component='a' onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}>
                  <Google sx={{ color: '#db4437' }} />
                </IconButton>
              </Link>
            </Box>
          </form>
        </CardContent>
      </Card>
    </Box >
  )
}

LoginPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default LoginPage
