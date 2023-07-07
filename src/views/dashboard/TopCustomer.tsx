// ** MUI Imports
import Box from '@mui/material/Box'
import Card from '@mui/material/Card'
import CardHeader from '@mui/material/CardHeader'
import Typography from '@mui/material/Typography'
import CardContent from '@mui/material/CardContent'
import Avatar from '@mui/material/Avatar'

interface DataType {
  logo: string
  name: string
  amount: string
  subtitle: string
  logoWidth: number
  logoHeight: number
}

const depositData = [
  {
    logoWidth: 38,
    logoHeight: 38,
    amount: '+$4,650',
    subtitle: 'Sell UI Kit',
    name: 'Gumroad Account',
    logo: '/images/women.avif'
  },
  {
    logoWidth: 38,
    logoHeight: 38,
    amount: '+$92,705',
    name: 'Mastercard',
    subtitle: 'Wallet deposit',
    logo: '/images/women1.avif'
  },
  {
    logoWidth: 38,
    logoHeight: 38,
    amount: '+$957',
    name: 'Stripe Account',
    subtitle: 'iOS Application',
    logo: '/images/women-smile.jpg'
  },
  {
    logoWidth: 38,
    logoHeight: 38,
    amount: '+$6,837',
    name: 'American Bank',
    subtitle: 'Bank Transfer',
    logo: '/images/women.avif'
  },
  {
    logoWidth: 38,
    logoHeight: 38,
    amount: '+$446',
    name: 'Bank Account',
    subtitle: 'Wallet deposit',
    logo: '/images/women1.avif'
  }
]

const TopCustomers = () => {
  return (
    <Card sx={{ display: 'flex', justifyContent: 'space-between', flexDirection: ['column', 'column', 'row'] }}>
      <Box sx={{ width: '100%' }}>
        <CardHeader
          title='Deposit'
          sx={{ pt: 5.5, alignItems: 'center', '& .MuiCardHeader-action': { mt: 0.6 } }}
          action={<Typography variant='caption'>View All</Typography>}
          titleTypographyProps={{
            variant: 'h6',
            sx: { lineHeight: '1.6 !important', letterSpacing: '0.15px !important' }
          }}
        />
        <CardContent sx={{ pb: theme => `${theme.spacing(5.5)} !important` }}>
          {depositData.map((item: DataType, index: number) => {
            return (
              <Box
                key={item.name}
                sx={{ display: 'flex', alignItems: 'center', mb: index !== depositData.length - 1 ? 6 : 0 }}
              >
                <Box sx={{ minWidth: 40, display: 'flex', justifyContent: 'center' }}>
                  {/* <img src={item.logo} alt={item.name} width={item.logoWidth} height={item.logoHeight} style={{borderRadius: 50}} /> */}
                </Box>
                <Box
                  sx={{
                    ml: 4,
                    width: '100%',
                    display: 'flex',
                    flexWrap: 'wrap',
                    alignItems: 'center',
                    justifyContent: 'space-between'
                  }}
                >
                  <Box sx={{ marginRight: 2, display: 'flex', flexDirection: 'column' }}>
                    <Typography sx={{ fontWeight: 600, fontSize: '0.875rem' }}>{item.name}</Typography>
                    <Typography variant='caption'>{item.subtitle}</Typography>
                  </Box>
                  <Typography variant='subtitle2' sx={{ fontWeight: 600, color: 'success.main' }}>
                    {item.amount}
                  </Typography>
                </Box>
              </Box>
            )
          })}
        </CardContent>
      </Box>
    </Card>
  )
}

export default TopCustomers
