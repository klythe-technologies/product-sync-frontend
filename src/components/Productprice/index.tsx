import React, { useState } from 'react';
import {
  Typography,
  FormControl,
  TextField,
  MenuItem,
  Link,
  Box,
  Button,
  Divider,
   Grid,
   Card
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import { productCondition } from '../../constants/product-condition';
import { CurrencyName } from '../../constants/currency-name';
import { Availability } from '../../constants/product-availability';
import AddIcon from '@mui/icons-material/Add';
import DeleteIcon from '@mui/icons-material/Delete';

const BottomDiv = styled('div')(() => ({
  display: 'flex',
  justifyContent: 'space-between',
  fontSize: '12px',
  marginTop: '5px'
}))

const MainDiv = styled('div')(() => ({
  display: 'flex',
  gap: '25px',
  marginTop: '20px',
  flexWrap: 'wrap'
}))

const TextFieldDiv = styled('div')(() => ({
  display: 'flex',
  gap: '10px',
  marginTop: '5px'
}))

const ProductPrice = () => {
  const [productType, setProductType] = useState('');
  const [salePrice, setSalePrice] = useState('');
  const PRODUCT_TYPE_LIMIT = 750;

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
    <>
      <Box sx={{ width: '80%', margin: '0 auto' }}>
        <Grid container rowSpacing={1} columnSpacing={6}>
          <Grid item xs={12} lg={4}>
            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
              <Typography variant="subtitle1">
                Price, condition & availability
              </Typography>
              <Typography variant="subtitle2">
                Set category, condition, price and availability here.
                If you have multiple stores selling this product, you can set the availability
                and price per location by choosing multiple stores here.
              </Typography>
            </Box>
            </Grid>
            <Grid item xs={12} lg={8}>
              <Card elevation={0} variant="outlined">
                <form style={{ width: '100%', padding: '2vw' }}>
                  <FormControl
                    sx={{ fontVariant: 'full-width', display: 'flex', flexWrap: 'nowrap', maxWidth: '550px' }} >
                    <TextField id="outlined-basic"
                      label="Product type"
                      variant="outlined"
                      inputProps={{
                        maxlength: PRODUCT_TYPE_LIMIT
                      }}
                      value={productType}
                      onChange={e => setProductType(e.target.value)}
                    />
                    <BottomDiv>
                      <Typography
                        sx={{ fontSize: '12px' }}>
                        Example: Garden furniture
                      </Typography>
                      <Typography
                        sx={{ fontSize: '12px' }}>
                        {`${productType.length}/${PRODUCT_TYPE_LIMIT}`}
                      </Typography>
                    </BottomDiv>
                    {inputList.length > 0
                      ? inputList.map((input, index) => (
                        <Box key={index}>
                          <FormControl
                            sx={{
                              fontVariant: 'full-width', flexWrap: 'nowrap', maxWidth: '550px',
                              marginBottom: '25px', marginTop: '15px'
                            }}>
                            <TextField id="outlined-basic"
                              label="Product type"
                              variant="outlined"
                              value={productType}
                              inputProps={{
                                maxlength: PRODUCT_TYPE_LIMIT
                              }}
                              onChange={(event) => handleInputChange(event, index)}
                            />
                            <Typography
                              sx={{ fontSize: '12px', textAlign: 'end' }}>
                              {`${productType.length}/${PRODUCT_TYPE_LIMIT}`}
                            </Typography>
                          </FormControl>
                          <DeleteIcon
                            onClick={() => handleRemoveInput(index)}
                            sx={{ marginTop: '25px', marginLeft: '5px' }}
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
                        Add product type
                      </Button>
                    </Box>
                  </FormControl>
                  <FormControl
                    sx={{ fontVariant: 'full-width', flexWrap: 'nowrap', maxWidth: '550px', display: 'flex' }}>
                    <TextField
                      select
                      type="select"
                      margin="normal"
                      label="Condition"
                      defaultValue="New">
                      {productCondition.map((option: any) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>
                  </FormControl>
                  <TextFieldDiv sx={{ display: 'flex', flexWrap: 'wrap' }}>
                    <FormControl>
                      <TextField
                        label="Price"
                        required
                        variant="outlined"
                      />
                      <CurrencyRupeeIcon
                        sx={{ width: '15px', position: 'absolute' }}
                      />
                    </FormControl>
                    <FormControl>
                      <TextField
                        select
                        label="Currency"
                        defaultValue="INR"
                      >
                        {
                          CurrencyName.map((option: any) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))
                        }
                      </TextField>
                    </FormControl>
                    <FormControl>
                      <TextField
                        select
                        required
                        label="Availability"
                        defaultValue="In stock">
                        {
                          Availability.map((option: any) => (
                            <MenuItem key={option.value} value={option.value}>
                              {option.label}
                            </MenuItem>
                          ))
                        }
                      </TextField>
                    </FormControl>
                  </TextFieldDiv>
                  <Box
                    sx={{ marginTop: '10px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    <FormControl sx={{ maxWidth: '340px' }}>
                      <TextField
                        label="Sale Price"
                        sx={{ fontSize: '10px' }}
                        value={salePrice}
                        onChange={e => setSalePrice(e.target.value)}
                      />
                      <CurrencyRupeeIcon
                        sx={{ width: '15px', position: 'absolute' }}
                      />
                    </FormControl>
                    <FormControl sx={{ maxWidth: '350px' }}>
                      <TextField label="Select date range" />
                    </FormControl>
                  </Box>
                </form>
              </Card>
            </Grid>
          </Grid>
        
      </Box>
    </>
  )
}
export default ProductPrice;