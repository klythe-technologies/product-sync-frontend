import React, { useState } from 'react';
import {
  Box,
  Divider,
  Button,
  TextField,
  Typography,
  FormControl,
} from '@mui/material';
import { useFormik } from 'formik';
import * as yup from 'yup';

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
  // const [value, setValue] = useState('');
  // const [title, setTitle] = useState('');
  // const [brand, setBrand] = useState('');
  // const [description, setDescription] = useState('');

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
          <Box sx={{ flexGrow: 1, flexBasis: 0, margin: '0 24px 24px 0' }}>
            <Typography
              sx={{ fontWeight: '500', fontSize: '16px', color: 'black', whiteSpace: 'nowrap' }}>
              Product details
            </Typography>
            <Typography
              sx={{ fontSize: '12px' }}>
              Make sure to add high quality product
              details that match your online store, if you
              have one. Add more details to help your
              products appear in more places on Klythe.</Typography>
          </Box>
          <Box sx={{ display: 'flex', flexGrow: 3, flexBasis: '48px' }}>
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
                <FormControl
                  sx={{ width: '100%', minWidth: "400px" }}>
                  <TextField id="outlined-basic"
                    label="Title*"
                    variant="outlined"
                    name="title"
                    value={formik.values.title}
                    onChange={formik.handleChange}
                    error={formik.touched.title && Boolean(formik.errors.title)}
                    helperText={formik.touched.title && formik.errors.title}
                    inputProps={{
                      maxlength: TITLE_LIMIT
                    }}
                    sx={{ lineHeight: '1.25rem !important', marginBottom: '25px' }}
                  />
                  <Box>
                    <Typography
                      sx={{ fontSize: '12px', textAlign: 'right' }}>
                      {`${formik.values.title.length}/${TITLE_LIMIT}`}
                    </Typography>
                  </Box>
                </FormControl>
                <FormControl
                  sx={{ width: '100%', minWidth: "400px" }}>
                  <TextField id="outlined-basic"
                    label="Brand"
                    variant="outlined"
                    name="brand"
                    value={formik.values.brand}
                    onChange={formik.handleChange}
                    inputProps={{
                      maxlength: BRAND_LIMIT
                    }}
                    sx={{ lineHeight: '1.25rem !important', marginBottom: '25px' }}
                  />
                  <Box>
                    <Typography sx={{ fontSize: '12px', textAlign: 'right' }}>{`${formik.values.brand.length}/${BRAND_LIMIT}`}</Typography>
                  </Box>
                </FormControl>
                <FormControl
                  sx={{ width: '100%', minWidth: "400px" }}>
                  <TextField id="outlined-basic"
                    label="Description"
                    variant="outlined"
                    name="description"
                    value={formik.values.description}
                    onChange={formik.handleChange}
                    error={formik.touched.description && Boolean(formik.errors.description)}
                    helperText={formik.touched.description && formik.errors.description}
                    inputProps={{
                      maxlength: DESCRIPTION_LIMIT
                    }}
                    sx={{ lineHeight: '1.25rem !important', marginBottom: '25px' }}
                    multiline
                    rows={3}
                    required
                  />
                  <Box>
                    <Typography
                      sx={{ fontSize: '12px', textAlign: 'right' }}>
                      {`${formik.values.description.length}/${DESCRIPTION_LIMIT}`}
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
          </Box>
        </Box>
      </Box>
    </Box>
  )
}
export default ProductDetails;
