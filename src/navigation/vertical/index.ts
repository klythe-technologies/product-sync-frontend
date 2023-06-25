// ** Icon imports
import Login from 'mdi-material-ui/Login'
import Table from 'mdi-material-ui/Table'
// import CubeOutline from 'mdi-material-ui/CubeOutline'
// import HomeOutline from 'mdi-material-ui/HomeOutline'
// import FormatLetterCase from 'mdi-material-ui/FormatLetterCase'
// import AccountCogOutline from 'mdi-material-ui/AccountCogOutline'
// import CreditCardOutline from 'mdi-material-ui/CreditCardOutline'
// import AccountPlusOutline from 'mdi-material-ui/AccountPlusOutline'
// import AlertCircleOutline from 'mdi-material-ui/AlertCircleOutline'
// import GoogleCirclesExtended from 'mdi-material-ui/GoogleCirclesExtended'
import IntegrationInstructionsIcon from '@mui/icons-material/IntegrationInstructions';
import InventoryIcon from '@mui/icons-material/Inventory';
import ChatIcon from '@mui/icons-material/Chat';
import BusinessIcon from '@mui/icons-material/Business';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import SettingsIcon from '@mui/icons-material/Settings';
import AnalyticsIcon from '@mui/icons-material/Analytics';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';

// ** Type import
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Report',
      icon: AnalyticsIcon,
      path: '/'
    },
    {
      title: 'Integrations',
      icon: IntegrationInstructionsIcon,
      path: '/integration'
    },
    {
      title: 'Product',
      icon: LocalOfferIcon,
      path: '/productcomingsoon'
    },
    {
      title: 'Inventory',
      icon: InventoryIcon,
      path: '/inventorycomingsoon'
    },
    {
      title: 'Chat',
      icon: ChatIcon,
      path: '/chatcomingsoon'
    },
    {
      title: 'Business',
      icon: BusinessIcon,
      path: '/businesscomingsoon'
    },
    {
      title: 'Notifications',
      icon: NotificationsActiveIcon,
      path: '/notificationcomingsoon'
    },
    {
      title: 'Settings',
      icon: SettingsIcon,
      path: '/settingscomingsoon'
    },
  ]
}

export default navigation
