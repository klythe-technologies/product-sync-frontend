import { Box, Typography } from "@mui/material";
import React from "react";

const ProductHelp = ({ help }: any) => {
  return (
    <Box>
      <Box sx={{ flexGrow: 1, flexBasis: '24px', marginLeft: '24px', minWidth: "200px" }}>
        <Typography
          sx={{ fontSize: '12px' }}>
         {help.text}
        </Typography>
      </Box>
    </Box>
  )
}
export default ProductHelp;