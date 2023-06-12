import {
  Box,
  Button,
  TextField,
  FormControl,
  Typography
} from '@mui/material';
import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const CustomTextField = ({ fieldData, width }: any) => {

  const [inputList, setInputList] = useState([
    {
      input: "",
      input_rank: null
    }
  ])

  const handleListAdd = () => {
    setInputList([
      ...inputList,
      {
        input: "",
        input_rank: null
      }
    ])
  }

  const handleInputChange = (event: any, index: any) => {
    const { value } = event.target
    const newInputList = [...inputList]
    newInputList[index].input = value
    newInputList[index].input_rank = index + 1
    setInputList(newInputList)
  }

  const handleRemoveInput = (index: any) => {
    const newList = [...inputList]
    newList.splice(index, 1)
    setInputList(newList)
  }

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
                    <Typography sx={{ fontSize: '12px', justifyContent: 'right', marginTop: '5px' }}>
                      {`${fieldData?.validations?.min} / ${fieldData?.validations?.max}`}
                    </Typography>
                    : ''
                }
              </Box>

              {
                fieldData.key === "product_type" ?
                  <FormControl>
                    {
                      inputList.length > 0
                        ? inputList.map((input, index) => (
                          <Box key={index}>
                            <Box sx={{ display: 'flex', width: '100%' }}>
                              <TextField
                                id={`outlined-basic-${fieldData.key}`}
                                label={fieldData.label}
                                variant="outlined"
                                name={fieldData.name}
                                onChange={(event) => handleInputChange(event, index)}
                                sx={{ lineHeight: '1.25rem !important', marginBottom: '25px', width: '100%' }}
                              />
                              <DeleteIcon
                                onClick={() => handleRemoveInput(index)}
                                sx={{ marginTop: '15px', marginLeft: '18px' }}
                              />
                            </Box>
                            <Box className='bottom_section'
                              sx={{
                                display: 'flex',
                                justifyContent: 'end',
                                fontSize: '12px',
                                marginRight: '60px',
                                marginLeft: '10px',
                                marginTop: '-15px'
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
                          </Box>
                        ))
                        : ""
                    }
                    <Box sx={{ textAlign: 'end' }}>
                      <Button
                        variant="text"
                        sx={{ textTransform: 'none', color: 'blue', gap: '5px', marginBottom: '10px' }}
                        onClick={handleListAdd}>
                        <AddIcon />
                        Add product type
                      </Button>
                    </Box>
                  </FormControl>
                  : ''
              }
            </FormControl>
          </form>
        </Box>
      </Box>
    </Box>
  )
}
export default CustomTextField;