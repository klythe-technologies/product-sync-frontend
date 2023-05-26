import React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import Business from 'src/components/Business';

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
            <Tab label="Business details" value="1" sx={{ textTransform: 'none', color: '#5f6368' }} />
            <Tab label="People & access" value="2" sx={{ textTransform: 'none', color: '#5f6368' }} />
            <Tab label="Apps" value="3" sx={{ textTransform: 'none', color: '#5f6368' }} />
            <Tab label="Countries" value="4" sx={{ textTransform: 'none', color: '#5f6368' }} />
          </TabList>
        </Box>

        <TabPanel value="1">
          <Business />
        </TabPanel>
      </TabContext>
    </Box>
  )
}

export default Products;