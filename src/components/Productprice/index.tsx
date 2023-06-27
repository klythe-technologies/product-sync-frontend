import React, { useState } from 'react';
import {
  Typography,
  FormControl,
  TextField,
  MenuItem,
  Link,
  Box,
  Button,
  Divider
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
      <Box>
        <MainDiv sx={{ display: 'flex', flexWrap: 'wrap' }}>
          <Box className='main_Box' sx={{ display: 'flex', gap: '25px', marginTop: '20px', flexWrap: 'wrap' }}>
            <Box sx={{ flexGrow: 1, flexBasis: 0, margin: '0 24px 24px 0' }}>
              <Typography
                sx={{ fontWeight: '500', fontSize: '16px', color: 'black', whiteSpace: 'nowrap' }}>
                Price, condition & availability
              </Typography>
              <Typography
                sx={{ fontSize: '10px' }}>
                Set category, condition, price and availability here.
                If you have multiple stores selling this product, you can set the availability
                and price per location by choosing multiple stores here.
              </Typography>
            </Box>
            <Box sx={{ display: 'flex', flexGrow: 3, flexBasis: '48px' }}>
              <Box sx={{ display: 'flex', flexGrow: 3, flexBasis: '24px' }}>
                <form style={{ width: '100%' }}>
                  <FormControl sx={{  minWidth: '320px', maxWidth: '600px !important' }}>
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
                            sx={{  minWidth: '300px', maxWidth: '600px !important', marginBottom: '25px', marginTop: '15px' }}>
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
                    <Box sx={{ textAlign: 'end', marginTop: '10px' }}>
                      <Button
                        variant="text"
                        sx={{ textTransform: 'none', color: 'blue', gap: '5px' }}
                        onClick={handleListAdd}>
                        <AddIcon />
                        Add product type
                      </Button>
                    </Box>
                  </FormControl>
                  <FormControl sx={{ minWidth: '320px', maxWidth: '600px' }}>
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
                    <FormControl sx={{ maxWidth: '320px', minWidth: '130px' }}>
                      <TextField
                        label="Price"
                        required
                        variant="outlined"
                      />
                      <CurrencyRupeeIcon
                        sx={{ width: '15px', position: 'absolute' }}
                      />
                    </FormControl>
                    <FormControl sx={{ maxWidth: '320px', minWidth: '160px' }}>
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
                    <FormControl sx={{ maxWidth: '320px', minWidth: '160px' }}>
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
                  <Box style={{ marginTop: '10px', display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
                    <FormControl sx={{ minWidth: '160px', maxWidth: '250px' }}>
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
                    <FormControl sx={{ minWidth: '160px', maxWidth: '250px' }}>
                      <TextField label="Select date range" />
                    </FormControl>
                  </Box>
                </form>
              </Box>
            </Box>
          </Box>
        </MainDiv>
      </Box>
    </>
  )
}
export default ProductPrice;