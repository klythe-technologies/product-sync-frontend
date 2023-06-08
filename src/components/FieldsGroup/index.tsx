import React from 'react';
import {
  Box
} from '@mui/material';
import CustomTextField from '../CustomTextField';
import CustomDropDown from '../CustomDropDown';

const FieldsGroup = ({ fieldData }: any) => {

  const renderComponent = (field: any) => {
    switch (field.type) {
      case 'number':
        return <CustomTextField fieldData={field} width="170px" />;
      case 'dropdown':
        return <CustomDropDown fieldData={field} width="150px" />;
      case 'text':
        return <CustomTextField fieldData={field} width="240px" />;
      default:
        return null;
    }
  };

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: '5%', flexGrow: 3, flexBasis: '24px', marginTop: 0 }}>
        {fieldData?.fields.map((field: any) => (
          <React.Fragment key={field.key}>
            {renderComponent(field)}
          </React.Fragment>
        ))}
      </Box>
    </Box>
  )
}
export default FieldsGroup;