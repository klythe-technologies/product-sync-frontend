import React from 'react';
import { Divider } from '@mui/material';
import ProductImages from '../ProductImages';
import ProductPrice from '../Productprice';
import ProductIdentifier from '../ProductIdentifier';
import ChooseLanguage from '../ChooseLanguage';
import ProductDetails from '../ProductDetails';
import Shipping from '../ProductShipping';

const ProductEditor = ({ title }: any) => {
  return (
    <>
      <ProductDetails title={title} />
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
export default ProductEditor;