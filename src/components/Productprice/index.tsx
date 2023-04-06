import React, { useState } from 'react';
import {
  Typography,
  FormControl,
  TextField,
  MenuItem,
  Link,
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
  marginTop: '20px'
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

  // const handleChange = (event: SelectChangeEvent) => {
  //   setAge(event.target.value as string);
  // };

  return (
    <>
      <MainDiv>
        <div>
          <Typography
            sx={{ fontWeight: 'bold', fontSize: '16px' }}>
            Price, condition & availability
          </Typography>
          <Typography
            sx={{ maxWidth: '250px', fontSize: '12px' }}>
            Set category, condition, price and availability here.
            If you have multiple stores selling this product, you can set the availability
            and price per location by choosing multiple stores here.
          </Typography>
        </div>
        <div style={{ width: '500px' }}>
          <form>
            <FormControl sx={{ width: '500px' }}>
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
                  <div key={index}>
                    <FormControl
                      sx={{ width: '450px', marginBottom: '25px', marginTop: '15px' }}>
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
                      sx={{ marginTop: '25px', marginLeft: '20px' }}
                    />
                  </div>
                ))
                : ""}
              <div style={{ textAlign: 'end', marginTop: '20px' }}>
                <Button
                  variant="text"
                  sx={{ textTransform: 'none', color: 'blue', gap: '5px' }}
                  onClick={handleListAdd}>
                  <AddIcon />
                  Add product type
                </Button>
              </div>
            </FormControl>
            {/* <FormControl>
              <InputLabel id="demo-simple-select-label">Condition</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={productType}
                label="Age"
                onChange={handleChange}
              >
                 {productCondition.map((option: any) => (
                  <MenuItem key={option.value} value={option.value}>
                    {option.label}
                  </MenuItem>
                ))}
              </Select>
            </FormControl> */}
            <FormControl sx={{ width: '500px' }}>
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
            <TextFieldDiv>
              <FormControl sx={{ width: '160px' }}>
                <TextField
                  label="Price"
                  required
                  variant="outlined"
                />
                <CurrencyRupeeIcon
                  sx={{ width: '15px', position: 'absolute' }}
                />
              </FormControl>
              <FormControl sx={{ width: '160px' }}>
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
              <FormControl sx={{ width: '160px' }}>
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
            <div style={{ marginTop: '10px', display: 'flex', gap: '15px' }}>
              <FormControl sx={{ width: '250px' }}>
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
              <FormControl sx={{ width: '250px' }}>
                <TextField label="Select date range" />
              </FormControl>
            </div>
          </form>
        </div>
        <Divider orientation="vertical" flexItem sx={{ height: '8vh' }} />
        <div>
          <Typography
            sx={{ maxWidth: '250px', fontSize: '12px' }}>
            Use the product type attribute to
            include your own product
            categorization system in your product data.
          </Typography>
          <Link href="#"
            sx={{ textDecoration: 'underline', fontSize: '12px' }}>
            Learn more about product type
          </Link>
        </div>
      </MainDiv>
    </>
  )
}
export default ProductPrice;