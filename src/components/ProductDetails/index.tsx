import React from 'react';
import {
  Box,
  Divider,
  Typography,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';
import ProductFooter from '../ProductFooter';

const validationSchema = yup.object({
  productLink: yup
    .string('Enter a value')
    .required('Link is required'),
  title: yup
    .string('Enter a value')
    .required('Title is required'),
  description: yup
    .string('Enter a value')
    .required('Description is required'),
});

const ProductDetails = (props: any) => {
  const VALUE_LIMIT = 2000;
  const TITLE_LIMIT = 150;
  const BRAND_LIMIT = 70;
  const DESCRIPTION_LIMIT = 5000;


  const formik = useFormik({
    initialValues: {
      productLink: '',
      title: '',
      description: '',
      brand: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <Box>
      <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
        <Typography
          sx={{ fontSize: '22px' }}>
          {props.title}
        </Typography>
        <Divider />
        <Box className='main_div' style={{ display: 'flex', gap: '25px', marginTop: '20px', flexWrap: 'wrap' }}>

          {/* <Box sx={{ display: 'flex', flexGrow: 3, flexBasis: '48px' }}>
            <Box sx={{ display: 'flex', flexGrow: 3, flexBasis: '24px' }}>
              <form style={{ width: '100%' }}>
                <FormControl
                  sx={{ width: '100%', minWidth: "400px" }}>
                  <TextField id="outlined-basic"
                    label="Product page on your online store"
                    variant="outlined"
                    name="productLink"
                    value={formik.values.productLink}
                    onChange={formik.handleChange}
                    error={formik.touched.productLink && Boolean(formik.errors.productLink)}
                    helperText={formik.touched.productLink && formik.errors.productLink}
                    inputProps={{
                      maxlength: VALUE_LIMIT
                    }}
                    sx={{ lineHeight: '1.25rem !important', marginBottom: '25px' }}
                  />
                  <Box className='bottom_section' style={{ display: 'flex', gap: '35%', fontSize: '12px' }}>
                    <Typography
                      sx={{ fontSize: '12px' }}>
                      Example: https://www.mystore.com/product1
                    </Typography>
                    <Typography
                      sx={{ fontSize: '12px' }}>
                      {`${formik.values.productLink.length}/${VALUE_LIMIT}`}
                    </Typography>
                  </Box>
                </FormControl>
              </form>
            </Box>
            <Divider orientation="vertical" flexItem sx={{ height: '5vh' }} />
            <Box sx={{ flexGrow: 1, flexBasis: '24px', marginLeft: '24px', minWidth: "200px" }}>
              <Typography
                sx={{ fontSize: '12px' }}>
                This is the page on your website where people land
                when they click this product on Klythe.
              </Typography>
            </Box>
          </Box> */}
        </Box>
        <ProductFooter />
      </Box>
    </Box>
  )
}
export default ProductDetails;
