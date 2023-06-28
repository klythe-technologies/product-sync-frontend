import React from 'react';
import {
  Box,
  Divider,
  TextField,
  Typography,
  FormControl,
  Card,
  Grid,
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
                  label="Product page on your online store"
                  variant="outlined"
                  name="productLink"
                  value={formik.values.productLink}
                  onChange={formik.handleChange}
                  helperText="Example: https://www.mystore.com/product1"
                  size="small"
                  margin="dense"
                />
            </Container>
        </Card>
        </Grid> 
      </Grid>
    </Box>
    // <Card variant="outlined">
    //   <Box sx={{ display: 'flex', flexWrap: 'wrap' }}>
    //     <Typography
    //       sx={{ fontSize: '22px' }}>
    //       {props.title}
    //     </Typography>
    //     <Divider />
    //     <Box className='main_div' style={{ display: 'flex', gap: '25px', marginTop: '20px', flexWrap: 'wrap' }}>
    //       <Box sx={{ flexGrow: 1, flexBasis: 0, margin: '0 24px 24px 0' }}>
    //         <Typography
    //           sx={{ fontWeight: '500', fontSize: '14px', color: 'black', whiteSpace: 'nowrap' }}>
    //           Product details
    //         </Typography>
    //         <Typography
    //           sx={{ fontSize: '10px' }}>
    //           Make sure to add high quality product
    //           details that match your online store, if you
    //           have one. Add more details to help your
    //           products appear in more places on Klythe.</Typography>
    //       </Box>
    //       <Box sx={{ display: 'flex', flexGrow: 2, flexBasis: '48px' }}>
    //         <Box sx={{ display: 'flex', flexGrow: 2, flexBasis: '24px' }}>
    //           <form style={{ width: '100%' }}>
    //             <FormControl
    //               sx={{ width: '100%', minWidth: "200px", maxWidth: '500px' }}>
    //               <TextField id="outlined-basic"
    //                 label="Product page on your online store"
    //                 variant="outlined"
    //                 name="productLink"
    //                 value={formik.values.productLink}
    //                 onChange={formik.handleChange}
    //                 error={formik.touched.productLink && Boolean(formik.errors.productLink)}
    //                 helperText={formik.touched.productLink && formik.errors.productLink}
    //                 inputProps={{
    //                   maxlength: VALUE_LIMIT
    //                 }}
    //                 sx={{ lineHeight: '1.25rem !important', marginBottom: '25px' }}
    //               />
    //               <Box className='bottom_section' style={{ display: 'flex', gap: '35%', fontSize: '10px' }}>
    //                 <Typography
    //                   sx={{ fontSize: '10px' }}>
    //                   Example: https://www.mystore.com/product1
    //                 </Typography>
    //                 <Typography
    //                   sx={{ fontSize: '10px' }}>
    //                   {`${formik.values.productLink.length}/${VALUE_LIMIT}`}
    //                 </Typography>
    //               </Box>
    //             </FormControl>
    //             <FormControl
    //               sx={{ width: '100%', minWidth: "200px", maxWidth: '500px' }}>
    //               <TextField id="outlined-basic"
    //                 label="Title*"
    //                 variant="outlined"
    //                 name="title"
    //                 value={formik.values.title}
    //                 onChange={formik.handleChange}
    //                 error={formik.touched.title && Boolean(formik.errors.title)}
    //                 helperText={formik.touched.title && formik.errors.title}
    //                 inputProps={{
    //                   maxlength: TITLE_LIMIT
    //                 }}
    //                 sx={{ lineHeight: '1.25rem !important', marginBottom: '25px' }}
    //               />
    //               <Box>
    //                 <Typography
    //                   sx={{ fontSize: '12px', textAlign: 'right' }}>
    //                   {`${formik.values.title.length}/${TITLE_LIMIT}`}
    //                 </Typography>
    //               </Box>
    //             </FormControl>
    //             <FormControl
    //               sx={{ width: '100%', minWidth: "200px", maxWidth: '500px' }}>
    //               <TextField id="outlined-basic"
    //                 label="Brand"
    //                 variant="outlined"
    //                 name="brand"
    //                 value={formik.values.brand}
    //                 onChange={formik.handleChange}
    //                 inputProps={{
    //                   maxlength: BRAND_LIMIT
    //                 }}
    //                 sx={{ lineHeight: '1.25rem !important', marginBottom: '25px' }}
    //               />
    //               <Box>
    //                 <Typography sx={{ fontSize: '10px', textAlign: 'right' }}>
    //                   {`${formik.values.brand.length}/${BRAND_LIMIT}`}
    //                 </Typography>
    //               </Box>
    //             </FormControl>
    //             <FormControl
    //               sx={{ width: '100%', minWidth: "200px", maxWidth: '500px' }}>
    //               <TextField id="outlined-basic"
    //                 label="Description"
    //                 variant="outlined"
    //                 name="description"
    //                 value={formik.values.description}
    //                 onChange={formik.handleChange}
    //                 error={formik.touched.description && Boolean(formik.errors.description)}
    //                 helperText={formik.touched.description && formik.errors.description}
    //                 inputProps={{
    //                   maxlength: DESCRIPTION_LIMIT
    //                 }}
    //                 sx={{ lineHeight: '1.25rem !important', marginBottom: '25px' }}
    //                 multiline
    //                 rows={3}
    //                 required
    //               />
    //               <Box>
    //                 <Typography
    //                   sx={{ fontSize: '10px', textAlign: 'right' }}>
    //                   {`${formik.values.description.length}/${DESCRIPTION_LIMIT}`}
    //                 </Typography>
    //               </Box>
    //             </FormControl>
    //           </form>
    //         </Box>
    //       </Box>
    //     </Box>
    //   </Box>
    // </Card  >
  )
}
export default ProductDetails;
