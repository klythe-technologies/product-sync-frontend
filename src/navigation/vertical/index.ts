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
      path: '/addproducts'
    },
    {
      title: 'Inventory',
      icon: InventoryIcon,
      path: '/inventory'
    },
    {
      title: 'Chat',
      icon: ChatIcon,
      path: '/chat'
    },
    {
      title: 'Business',
      icon: BusinessIcon,
      path: '/business'
    },
    {
      title: 'Notifications',
      icon: NotificationsActiveIcon,
      path: '/notification'
    },
    {
      title: 'Settings',
      icon: SettingsIcon,
      path: '/settings'
    },
  ]
}

export default navigation
