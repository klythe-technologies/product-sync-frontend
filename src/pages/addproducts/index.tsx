import React from 'react';
import { Divider } from '@mui/material';
import ProductImages from '../../components/ProductImages';
import ProductPrice from '../../components/Productprice';
import ProductIdentifier from '../../components/ProductIdentifier';
import ChooseLanguage from '../../components/ChooseLanguage';
import ProductDetails from '../../components/ProductDetails';
import ProductShipping from '../../components/ProductShipping';

const addProducts = () => {
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
      <ProductShipping />
    </>
  )
}
export default addProducts;