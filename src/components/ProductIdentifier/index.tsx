import React, { useState } from 'react';
import {
  Typography,
  FormControl,
  TextField,
  Button,
  Box,
  Grid,
  Card,
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
    <Box sx={{ width: '80%', margin: '0 auto' }}>
      <Grid container rowSpacing={1} columnSpacing={6}>
        <Grid item xs={12} lg={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Typography variant="subtitle1">
              Product identifiers
            </Typography>
            <Typography variant="subtitle2">
              To make your products easier to find for
              customers, tell Klythe more about your product.
            </Typography>
          </Box>
          </Grid>
          <Grid item xs={12} lg={8}>
            <Card elevation={0} variant="outlined">
              <form style={{padding:'40px'}}>
                <FormControl >
                  <TextField id="outlined-basic"
                    label="ID or SKU"
                    variant="outlined"
                    sx={{width:'41rem'}}
                    inputProps={{
                      maxlength: PRODUCT_ID_LIMIT
                    }}
                    value={productId}
                    onChange={e => setProductId(e.target.value)}
                  />
                  <Box className='bottom_section'
                    style={{ display: 'flex', justifyContent: 'space-between', fontSize: '12px', marginBottom: '25px' }}>
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
                  sx={{ fontVariant: 'full-width', display: 'flex', flexWrap: 'nowrap', maxWidth: '520px', marginBottom: '25px' }}>
                  <TextField id="outlined-basic"
                    label="GTIN, UPC, EAN, JAN or ISBN"
                    variant="outlined"
                    sx={{width:'41rem'}}
                  />
                  <div className='bottom_section' style={{ display: 'flex', gap: '35%', fontSize: '12px' }}>
                    <Typography
                      sx={{ fontSize: '10px' }}>
                      Appears next to the barcode on this product, for example 012345678905
                    </Typography>
                  </div>
                  {inputList.length > 0
                    ? inputList.map((input, index) => (
                      <Box key={index} sx={{display:'flex', flexDirection:'row'}}>
                        <FormControl
                          sx={{
                            maxWidth: '100%',
                            marginTop: '15px', 
                          }}>
                          <TextField id="outlined-basic"
                            label="GTIN, UPC, EAN, JAN or ISBN"
                            variant="outlined"
                            onChange={(event) => handleInputChange(event, index)}
                            sx={{width:'39rem'}}
                          />
                        </FormControl>
                        <DeleteIcon
                          onClick={() => handleRemoveInput(index)}
                          sx={{marginTop:'25px'}}
                        />
                      </Box>
                    ))
                    : ""}
                  <Box sx={{ textAlign: 'end' }}>
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
            </Card>
          </Grid>
        </Grid>
      
    </Box>
  )
}

export default ProductIdentifier;