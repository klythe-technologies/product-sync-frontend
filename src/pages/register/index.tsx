import { useState, Fragment, ChangeEvent, MouseEvent, ReactNode } from 'react';
import Link from 'next/link';
import {
  Box,
  Button,
  Divider,
  Checkbox,
  TextField,
  Typography,
  InputLabel,
  IconButton,
  CardContent,
  FormControl,
  OutlinedInput
} from '@mui/material';

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
import themeConfig from 'src/configs/themeConfig';
import BlankLayout from 'src/@core/layouts/BlankLayout';
import Image from 'next/image';
import klytheLogo from '../../../public/images/logos/klytheLogo.png';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';

interface State {
  name: string
  email: string
  password: string
  showPassword: boolean
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
  marginTop: theme.spacing(1.5),
  marginBottom: theme.spacing(4),
  '& .MuiFormControlLabel-label': {
    fontSize: '0.875rem',
    color: theme.palette.text.secondary
  }
}))

const schema = yup.object().shape({
  email: yup.string().email('You must enter a valid email').required('You must enter a email'),
  name: yup
    .string()
    .required('User name is required.'),
  password: yup
    .string()
    .required('Please enter your password.')
    .min(8, 'Password is too short - should be 8 chars minimum.')
});

const RegisterPage = () => {
  // ** States
  const [values, setValues] = useState<State>({
    name: '',
    email: '',
    password: '',
    showPassword: false
  })

  const { formState, handleSubmit, reset } = useForm({
    mode: 'onChange',
    values,
    resolver: yupResolver(schema)
  });

  const { errors } = formState;

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
    setValues({
      name: '',
      email: '',
      password: '',
      showPassword: false
    })
    console.log("values", values);
    // axios.get('http://localhost:3001/register', {
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
            <Typography variant='body2'>Fill the details to register</Typography>
          </Box>
          <form
            noValidate
            autoComplete='off'
            onSubmit={handleSubmit(onSubmit)}
          >
            <TextField
              autoFocus
              fullWidth
              required
              id='username'
              label='Username'
              sx={{ marginBottom: 4 }}
              error={!!errors.name}
              helperText={errors?.name?.message}
              onChange={handleChange('name')}
            />
            <TextField
              fullWidth
              required
              autoFocus
              id='email'
              type='email'
              label='Email'
              sx={{ marginBottom: 4 }}
              error={!!errors.email}
              helperText={errors?.email?.message}
              onChange={handleChange('email')}
            />

            <FormControl fullWidth>
              <TextField
                required
                label='Password'
                value={values.password}
                id='auth-register-password'
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
                        {values.showPassword ? <EyeOutline fontSize='small' /> : <EyeOffOutline fontSize='small' />}
                      </IconButton>
                    </InputAdornment>
                  )
                }}
              />
            </FormControl>
            <FormControlLabel
              control={<Checkbox />}
              label={
                <Fragment>
                  <span>I agree to </span>
                  <Link href='/' passHref>
                    <LinkStyled onClick={(e: MouseEvent<HTMLElement>) => e.preventDefault()}>
                      privacy policy & terms
                    </LinkStyled>
                  </Link>
                </Fragment>
              }
            />
            <Button fullWidth size='large' type='submit' variant='contained' sx={{ marginBottom: 7 }}>
              Sign up
            </Button>
            <Box sx={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap', justifyContent: 'center' }}>
              <Typography variant='body2' sx={{ marginRight: 2 }}>
                Already have an account?
              </Typography>
              <Typography variant='body2'>
                <Link passHref href='/login'>
                  <LinkStyled>Sign in instead</LinkStyled>
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
    </Box>
  )
}

RegisterPage.getLayout = (page: ReactNode) => <BlankLayout>{page}</BlankLayout>

export default RegisterPage
