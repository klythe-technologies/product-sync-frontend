import React, { useState } from 'react';
import {
  Typography,
  FormControl,
  TextField,
  Button,
  Link,
  Box,
  Divider
} from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const ProductIdentifier = () => {
  const [productId, setProductId] = useState('');
  const [inputList, setInputList] = useState([
    {
      input: "",
      input_rank: null
    }
  ])

  const PRODUCT_ID_LIMIT = 50;

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

  console.log(inputList)

  return (
    <Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Box className='main_div' sx={{ display: 'flex', gap: '25px', marginTop: '20px', flexWrap: 'wrap' }}>
          <Box sx={{ flexGrow: 1, flexBasis: 0, margin: '0 24px 24px 0' }}>
            <Typography
              sx={{ fontWeight: '500', fontSize: '14px', color: 'black', whiteSpace: 'nowrap' }}>
              Product identifiers
            </Typography>
            <Typography
              sx={{ fontSize: '10px' }}>
              To make your products easier to find for
              customers, tell Klythe more about your product.
            </Typography>
          </Box>
          <Box sx={{ display: 'flex', flexGrow: 3, flexBasis: '48px' }}>
            <Box sx={{ display: 'flex', flexGrow: 3, flexBasis: '24px' }}>
              <form style={{ width: '100%' }}>
                <FormControl
                  sx={{ width: '100%', minWidth: '200px', maxWidth: '500px' }}>
                  <TextField id="outlined-basic"
                    label="ID or SKU"
                    variant="outlined"
                    inputProps={{
                      maxlength: PRODUCT_ID_LIMIT
                    }}
                    value={productId}
                    onChange={e => setProductId(e.target.value)}
                  />
                  <Box className='bottom_section'
                    style={{ display: 'flex', gap: '43%', fontSize: '12px', marginBottom: '25px' }}>
                    <Typography
                      sx={{ fontSize: '10px' }}>
                      Leave empty to have an ID auto-assigned
                    </Typography>
                    <Typography
                      sx={{ fontSize: '10px' }}>
                      {`${productId.length}/${PRODUCT_ID_LIMIT}`}
                    </Typography>
                  </Box>
                </FormControl>
                <FormControl
                  sx={{ minWidth: '200px', maxWidth: '500px', marginBottom: '25px' }}>
                  <TextField id="outlined-basic"
                    label="GTIN, UPC, EAN, JAN or ISBN"
                    variant="outlined"
                  />
                  <div className='bottom_section' style={{ display: 'flex', gap: '35%', fontSize: '12px' }}>
                    <Typography
                      sx={{ fontSize: '10px' }}>
                      Appears next to the barcode on this product, for example 012345678905
                    </Typography>
                  </div>
                  {inputList.length > 0
                    ? inputList.map((input, index) => (
                      <Box key={index}>
                        <FormControl
                          sx={{ minWidth: '200px', maxWidth: '500px', marginBottom: '25px', marginTop: '15px' }}>
                          <TextField id="outlined-basic"
                            label="GTIN, UPC, EAN, JAN or ISBN"
                            variant="outlined"
                            onChange={(event) => handleInputChange(event, index)}
                          />
                        </FormControl>
                        <DeleteIcon
                          onClick={() => handleRemoveInput(index)}
                          sx={{ marginTop: '25px', marginLeft: '20px' }}
                        />
                      </Box>
                    ))
                    : ""}
                  <Box sx={{ textAlign: 'end', marginTop: '20px' }}>
                    <Button
                      variant="text"
                      sx={{ textTransform: 'none', color: 'blue', gap: '5px' }}
                      onClick={handleListAdd}>
                      <AddIcon />
                      Add another identifier
                    </Button>
                  </Box>
                </FormControl>
              </form>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default ProductIdentifier;