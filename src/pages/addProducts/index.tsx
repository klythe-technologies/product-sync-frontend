import React from 'react';
import { Divider } from '@mui/material';
import ProductImages from '../productImages';
import ProductPrice from '../productprice';
import ProductIdentifier from '../productIdentifier';
import ChooseLanguage from '../chooseLanguage';
import ProductDetails from '../productDetails';
import Shipping from '../productShipping';

const AddProducts = () => {
  return (
    <>
      <ProductDetails />
      <Divider />
      <ProductImages />
      <Divider />
      <ProductPrice />
      <Divider />
      <ProductIdentifier />
      <Divider />
      <ChooseLanguage />
      <Divider sx={{ marginTop: '20px' }} />
      <Shipping />
    </>
  )
}
export default AddProducts;