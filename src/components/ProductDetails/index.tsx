import React from 'react';
import {
  Box,
  Card,
  Grid,
  TextField,
  Typography,
  Container,
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

const ProductDetails = () => {

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
    <Box sx={{ width: '80%', margin: '0 auto' }}>
      <Grid container rowSpacing={1} columnSpacing={6}>
        <Grid item xs={12} lg={4}>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <Typography variant="subtitle1">
              Product details
            </Typography>
            <Typography variant="subtitle2">
              Make sure to add high quality product
              details that match your online store, if you
              have one. Add more details to help your
              products appear in more places on Klythe.</Typography>
          </Box>
        </Grid>
        <Grid item xs={12} lg={8}>
          <Card elevation={0} variant="outlined">
            <Container
              sx={{
                padding: '20px'
              }}
            >
              <TextField
                id="outlined-basic"
                fullWidth
                required
                label="Product page on your online store"
                variant="outlined"
                name="productLink"
                helperText="Example: https://www.mystore.com/product1"
                size="small"
                margin="dense"
                value={formik.values.productLink}
                onChange={formik.handleChange}
                InputLabelProps={{ style: { fontSize: 12 } }}
              />
              <TextField
                id="outlined-basic"
                fullWidth
                required
                label="Title"
                variant="outlined"
                name="title"
                size="small"
                margin="dense"
                value={formik.values.title}
                onChange={formik.handleChange}
                InputLabelProps={{ style: { fontSize: 12 } }}
              />
              <TextField
                id="outlined-basic"
                fullWidth
                label="Brand"
                variant="outlined"
                name="brand"
                size="small"
                margin="dense"
                value={formik.values.brand}
                onChange={formik.handleChange}
                InputLabelProps={{ style: { fontSize: 12 } }}
              />
              <TextField
                id="outlined-basic"
                fullWidth
                required
                rows={3}
                label="Description"
                variant="outlined"
                name="description"
                size="small"
                margin="dense"
                value={formik.values.description}
                onChange={formik.handleChange}
                InputLabelProps={{ style: { fontSize: 12 } }}
              />
            </Container>
          </Card>
        </Grid>
      </Grid>
    </Box>
  )
}
export default ProductDetails;
