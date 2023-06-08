import React from "react";
import { Box } from '@mui/material';
import data from '../../data/form.json';
import ProductSection from "../ProductSection";

const ProductEditorNew = () => {
  return (
    <Box>
      {data.map((details) => (
        <Box key={details.key}>
          <ProductSection fieldData={details} />
        </Box>
      ))}
    </Box>
  )
}

export default ProductEditorNew;
