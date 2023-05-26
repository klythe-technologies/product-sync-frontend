import HomeOutline from 'mdi-material-ui/HomeOutline'
import Widgets from 'mdi-material-ui/Widgets';
import BusinessIcon from '@mui/icons-material/Business';
import { VerticalNavItemsType } from 'src/@core/layouts/types'

const navigation = (): VerticalNavItemsType => {
  return [
    {
      title: 'Home',
      icon: HomeOutline,
      path: '/home'
    },
    {
      title: 'Products',
      icon: Widgets,
      path: '/products'
    },
    {
      title: 'Your business',
      icon: BusinessIcon,
      path: '/merchantprofile'
    }
  ]
}

export default navigation;
