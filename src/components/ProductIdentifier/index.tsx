import React, { useState } from 'react';
import {
  Typography,
  FormControl,
  TextField,
  Button,
  Link,
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
    <>
      <div className='main_div' style={{ display: 'flex', gap: '25px', marginTop: '20px' }}>
        <div>
          <Typography
            sx={{ fontWeight: 'bold', fontSize: '16px' }}>
            Product identifiers
          </Typography>
          <Typography
            sx={{ maxWidth: '250px', fontSize: '12px' }}>
            To make your products easier to find for
            customers, tell Klythe more about your product.
          </Typography>
        </div>
        <div style={{ width: '500px' }}>
          <form>
            <FormControl
              sx={{ width: '500px', marginBottom: '25px' }}>
              <TextField id="outlined-basic"
                label="ID or SKU"
                variant="outlined"
                inputProps={{
                  maxlength: PRODUCT_ID_LIMIT
                }}
                value={productId}
                onChange={e => setProductId(e.target.value)}
              />
              <div className='bottom_section' style={{ display: 'flex', gap: '43%', fontSize: '12px' }}>
                <Typography
                  sx={{ fontSize: '12px' }}>
                  Leave empty to have an ID auto-assigned
                </Typography>
                <Typography
                  sx={{ fontSize: '12px' }}>
                  {`${productId.length}/${PRODUCT_ID_LIMIT}`}
                </Typography>
              </div>
            </FormControl>
            <FormControl
              sx={{ width: '500px', marginBottom: '25px' }}>
              <TextField id="outlined-basic"
                label="GTIN, UPC, EAN, JAN or ISBN"
                variant="outlined"
              />
              <div className='bottom_section' style={{ display: 'flex', gap: '35%', fontSize: '12px' }}>
                <Typography
                  sx={{ fontSize: '12px' }}>
                  Appears next to the barcode on this product, for example 012345678905
                </Typography>
              </div>
              {inputList.length > 0
                ? inputList.map((input, index) => (
                  <div key={index}>
                    <FormControl
                      sx={{ width: '450px', marginBottom: '25px', marginTop: '15px' }}>
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
                  </div>
                ))
                : ""}
              <div style={{ textAlign: 'end', marginTop: '20px' }}>
                <Button
                  variant="text"
                  sx={{ textTransform: 'none', color: 'blue', gap: '5px' }}
                  onClick={handleListAdd}>
                  <AddIcon />
                  Add another identifier
                </Button>
              </div>
            </FormControl>
          </form>
        </div>
        <Divider orientation="vertical" flexItem sx={{ height: '18vh' }} />
        <div>
          <Typography
            sx={{ maxWidth: '250px', fontSize: '12px' }}>
            ID or SKU is the unique alphanumeric label
            you use to track inventory for this product,
            for example "tddy123uk".
          </Typography>
          <Typography
            sx={{ maxWidth: '250px', fontSize: '12px', marginTop: '20px' }}>
            This unique and internationally
            recognized ID helps us make your ad
            or unpaid listing richer and easier for
            your customers to find.
          </Typography>
          <Link href="#"
            sx={{ textDecoration: 'underline', fontSize: '12px' }}>
            Learn more about product type
          </Link>
        </div>
      </div>

    </>
  )
}

export default ProductIdentifier;