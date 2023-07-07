import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import AllProducts from '../../components/AllProducts copy';
import NeedAttention from '../products/diagnostics';
import Shipping from '../products/shipping';
import Improvements from './improvements';

const Products = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange}>
            <Tab label="All Products" value="1" sx={{ textTransform: 'none', color: '#5f6368' }} />
            <Tab label="Need Attention" value="2" sx={{ textTransform: 'none', color: '#5f6368' }} />
            <Tab label="Shipping" value="3" sx={{ textTransform: 'none', color: '#5f6368' }} />
            <Tab label="Automatic Improvements" value="4" sx={{ textTransform: 'none', color: '#5f6368' }} />
          </TabList>
        </Box>
        
        <TabPanel value="1">
          <AllProducts />
        </TabPanel>
        <TabPanel value="2">
          <NeedAttention />
        </TabPanel>
        <TabPanel value="3">
          <Shipping />
        </TabPanel>
        <TabPanel value="4">
          <Improvements />
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default Products;