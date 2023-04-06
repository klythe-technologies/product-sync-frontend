import React, { useState } from 'react';
import {
  Typography,
  Divider,
  FormControl,
  TextField,
  Button
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

  // const handleSubmit = () => {
  //   console.log("product-details", value, title, brand, description)
  // }

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
    <>
      <Typography
        sx={{ fontSize: '22px' }}>
        {props.title}
      </Typography>
      <Divider />
      <div className='main_div' style={{ display: 'flex', gap: '25px', marginTop: '20px' }}>
        <div>
          <Typography
            sx={{ fontWeight: 'bold', fontSize: '16px' }}>
            Product details
          </Typography>
          <Typography
            sx={{ maxWidth: '250px', fontSize: '12px' }}>
            Make sure to add high quality product
            details that match your online store, if you
            have one. Add more details to help your
            products appear in more places on Klythe.</Typography>
        </div>
        <div style={{ width: '500px' }}>
          <form>
            <FormControl
              sx={{ width: '500px', marginBottom: '25px' }}>
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
              />
              <div className='bottom_section' style={{ display: 'flex', gap: '35%', fontSize: '12px' }}>
                <Typography
                  sx={{ fontSize: '12px' }}>
                  Example: https://www.mystore.com/product1
                </Typography>
                <Typography
                  sx={{ fontSize: '12px' }}>
                  {`${formik.values.productLink.length}/${VALUE_LIMIT}`}
                </Typography>
              </div>
            </FormControl>
            <FormControl
              sx={{ width: '500px', marginBottom: '25px' }}>
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
              />
              <div>
                <Typography
                  sx={{ fontSize: '12px', textAlign: 'right' }}>
                  {`${formik.values.title.length}/${TITLE_LIMIT}`}
                </Typography>
              </div>
            </FormControl>
            <FormControl
              sx={{ width: '500px', marginBottom: '25px' }}>
              <TextField id="outlined-basic"
                label="Brand"
                variant="outlined"
                name="brand"
                value={formik.values.brand}
                onChange={formik.handleChange}
                inputProps={{
                  maxlength: BRAND_LIMIT
                }}
              />
              <div>
                <Typography sx={{ fontSize: '12px', textAlign: 'right' }}>{`${formik.values.brand.length}/${BRAND_LIMIT}`}</Typography>
              </div>
            </FormControl>
            <FormControl
              sx={{ width: '500px', marginBottom: '25px' }}>
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
                multiline
                rows={3}
                required
              />
              <div>
                <Typography
                  sx={{ fontSize: '12px', textAlign: 'right' }}>
                  {`${formik.values.description.length}/${DESCRIPTION_LIMIT}`}
                </Typography>
              </div>
            </FormControl>
            <Button
              variant="outlined"
              type='submit'
            // onClick={handleSubmit}
            >
              Submit
            </Button>
          </form>
        </div>
        <Divider orientation="vertical" flexItem sx={{ height: '5vh' }} />
        <div>
          <Typography
            sx={{ maxWidth: '215px', fontSize: '12px' }}>
            This is the page on your website where people land
            when they click this product on Klythe.
          </Typography>
        </div>
      </div>
    </>
  )
}
export default ProductDetails;
