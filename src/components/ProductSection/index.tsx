import {
  Box,
  Grid,
  Divider,
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails
} from "@mui/material";
import React from "react";
import ProductDescription from "../ProductDescription";
import CustomTextField from "../CustomTextField";
import CustomDropDown from "../CustomDropDown";
import FieldsGroup from "../FieldsGroup";
import ProductImages from "../ProductImages";
import CustomTextArea from "../CustomTextArea";
import ProductHelp from "../ProductHelp";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const renderCustomComponent = (field: any) => {
  switch (field.type) {
    case 'text':
      return <CustomTextField fieldData={field} width="500px" />
    case 'dropdown':
      return <CustomDropDown fieldData={field} width="500px" />
    case 'group':
      return <FieldsGroup fieldData={field} width="350px" />
    case 'image':
      return <ProductImages fieldData={field} />
    case 'textarea':
      return <CustomTextArea fieldData={field} width="500px" />
    default:
      return null;
  }
};

const renderHelpComponent = (help: any) => {
  switch (help.type) {
    case 'text':
      console.log("help-type", help.type)
      return <ProductHelp help={help} />
    default:
      return null;
  }
}

const ProductSection = ({ fieldData }: any) => {

  console.log("field-data", fieldData);

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
        <Grid container>
          <Box sx={{ display: 'flex', flexGrow: 3, flexBasis: '48px', minWidth: '350px' }}>
            {
              fieldData.type === "accordian"
                ?
                <Accordion sx={{ width: '100%', boxShadow: 'none', border: 'none' }}>
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    sx={{ justifyContent: 'end', alignItems: 'center', boxShadow: 'none', border: 'none' }}
                  >
                    <Grid item xs={4}>
                      <ProductDescription fieldData={fieldData} />
                    </Grid>

                   </AccordionSummary>
                  <Box sx={{ justifyContent: 'center', display: 'flex' }}>
                    <Grid item xs={5}>
                      <AccordionDetails sx={{ boxShadow: 'none', border: 'none' }}>
                        <Box sx={{ flexGrow: 3, flexBasis: '24px' }}>
                          {fieldData.fields.map((field: any) => (
                            <React.Fragment key={field.key}>
                              {renderCustomComponent(field)}
                            </React.Fragment>
                          ))}
                        </Box>
                      </AccordionDetails>
                    </Grid>
                  </Box>
                </Accordion>
                :
                <Grid container>
                  <Grid item xs={4}>
                    <ProductDescription fieldData={fieldData} />
                  </Grid>

                  <Grid item xs={5}>
                    <Box sx={{ flexGrow: 3, flexBasis: '24px' }}>
                      {fieldData.fields.map((field: any) => (
                        <React.Fragment key={field.key}>
                          {renderCustomComponent(field)}
                        </React.Fragment>
                      ))}
                    </Box>
                  </Grid>
                </Grid>
            }
            {/* <Grid item xs={2}> */}
            {/* <Divider orientation="vertical" flexItem sx={{ height: '5vh' }} /> */}
            {/* <Box sx={{ flexGrow: 1, flexBasis: '24px', marginLeft: '24px' }}>
                {fieldData?.help?.map((item: any) => (
                  <React.Fragment key={item.key}>
                    {renderHelpComponent(item)}
                  </React.Fragment>
                ))}
              </Box> */}
            {/* </Grid> */}
          </Box>
        </Grid>
      </Box>
    </Box>
  );
};

export default ProductSection;
