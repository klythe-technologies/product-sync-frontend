import React from 'react';
import { Language } from '../../constants/language';
import {
  FormControl,
  TextField,
  MenuItem,
  Typography
} from '@mui/material';

const ChooseLanguage = () => {
  return (
    <div style={{ display: 'flex', gap: '25px', marginTop: '20px' }}>
      <div>
        <Typography
          sx={{ fontWeight: 'bold', fontSize: '16px' }}>
          Language
        </Typography>
        <Typography
          sx={{ maxWidth: '250px', fontSize: '12px' }}>
          Select the language of your product details,
          such as title and description.
        </Typography>
      </div>
      <FormControl sx={{ width: '500px' }}>
        <TextField
          select type="select"
          margin="normal"
          label="Language"
          defaultValue="English">
          {Language.map((option: any) => (
            <MenuItem key={option.value} value={option.value}>
              {option.label}
            </MenuItem>
          ))}
        </TextField>
        <div className='bottom_section' style={{ display: 'flex', gap: '43%', fontSize: '12px' }}>
          <Typography
            sx={{ fontSize: '12px' }}>
            Your product will show in this language
          </Typography>
        </div>
      </FormControl>
    </div>
  )
}
export default ChooseLanguage;