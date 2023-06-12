import React from "react";
import {
  Box,
  MenuItem,
  TextField,
  FormControl,
} from '@mui/material';
import { CurrencyName } from '../../constants/currency-name';
import { Language } from '../../constants/language';

const CustomDropDown = ({ fieldData, width }: any) => {

  return (
    <Box>
      <Box sx={{ display: 'flex', gap: '3%', flexGrow: 3, flexBasis: '24px' }}>
        <form>
          <FormControl sx={{ width: '100%', minWidth: `${width}` }}>
            <TextField
              select
              id={`outlined-basic-${fieldData.key}`}
              label={fieldData.label}
              name={fieldData.name}
              type="select"
              margin="normal"
              sx={{ lineHeight: '1.25rem !important', marginBottom: '25px' }}
            >
              {
                fieldData?.options?.map((option: any) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}

              {fieldData.key === "currency" &&
                CurrencyName.map((option: any) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))
              }

              {fieldData.key === "product_language" &&
                Language.map((option: any) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))
              }
            </TextField>
          </FormControl>
        </form>
      </Box>
    </Box>
  )
}
export default CustomDropDown;