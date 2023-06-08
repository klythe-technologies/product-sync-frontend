import {
  Box,
  Grid,
  Divider,
  Typography,
} from "@mui/material";
import React from "react";
import ProductDescription from "../ProductDescription";
import CustomTextField from "../CustomTextField";
import CustomDropDown from "../CustomDropDown";
import FieldsGroup from "../FieldsGroup";
import ProductImages from "../ProductImages";

const renderCustomComponent = (field: any) => {
  switch (field.type) {
    case 'text':
      return <CustomTextField fieldData={field} width="500px" />;
    case 'dropdown':
      return <CustomDropDown fieldData={field} width="500px" />;
    case 'group':
      return <FieldsGroup fieldData={field} width="350px" />
    case 'image':
      return <ProductImages fieldData={field} />
    default:
      return null;
  }
};

const ProductSection = ({ fieldData }: any) => {

  if (!fieldData.fields || !Array.isArray(fieldData.fields)) {
    return null;
  }

  return (
    <Box>
      <Box className="main_div"
        style={{
          display: 'flex', gap: '35px', marginTop: '20px',
          flexWrap: 'wrap', paddingLeft: '24px', paddingRight: '24px',
          paddingBottom: '10px'
        }}>
        <Grid container spacing={2}>
          <Grid item xs={4}>
            <ProductDescription fieldData={fieldData} />
          </Grid>
          <Box sx={{ display: 'flex', flexGrow: 3, flexBasis: '48px', minWidth: '350px' }}>
            <Grid item xs={5}>
              <Box sx={{ flexGrow: 3, flexBasis: '24px' }}>
                {fieldData.fields.map((field: any) => (
                  <React.Fragment key={field.key}>
                    {renderCustomComponent(field)}
                  </React.Fragment>
                ))}
              </Box>
            </Grid>
            <Grid item xs={2}>
              {/* <Divider orientation="vertical" flexItem sx={{ height: '5vh' }} /> */}
              <Box sx={{ flexGrow: 1, flexBasis: '24px', marginLeft: '24px' }}>
                <Typography sx={{ fontSize: '12px' }}>

                </Typography>
              </Box>
            </Grid>
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductSection;
