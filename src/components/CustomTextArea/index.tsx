import {
  Box,
  TextField,
  Typography,
  FormControl,
} from "@mui/material";
import React from "react";

const CustomTextArea = ({ fieldData, width }: any) => {
  return (
    <Box>
      <Box sx={{ display: 'flex', flexGrow: 3, flexBasis: '48px' }}>
        <Box sx={{ display: 'flex', flexGrow: 3, flexBasis: '24px' }}>
          <form style={{ width: '100%' }}>
            <FormControl key={fieldData.key} sx={{ width: '100%', minWidth: { width } }}>
              <TextField
                id={`outlined-basic-${fieldData.key}`}
                label={fieldData.label}
                variant="outlined"
                name={fieldData.name}
                multiline
                rows={3}
                sx={{ lineHeight: '1.25rem !important' }}
              />
              <Box className='bottom_section'
                sx={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  fontSize: '12px',
                  marginBottom: '25px',
                  marginRight: '10px',
                  marginLeft: '10px'
                }}>
                <Typography sx={{ fontSize: '12px' }}>
                  {fieldData.example}
                </Typography>
                {
                  fieldData.validations?.max
                    ?
                    <Typography sx={{ fontSize: '12px', justifyContent: 'right' }}>
                      {`${fieldData?.validations?.min} / ${fieldData?.validations?.max}`}
                    </Typography>
                    : ''
                }
              </Box>
            </FormControl>
          </form>
        </Box>
      </Box>
    </Box>

  )
}
export default CustomTextArea;