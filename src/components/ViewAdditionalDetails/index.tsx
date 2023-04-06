import React from 'react';
import {
  Box,
  Accordion,
  AccordionSummary,
  Typography,
  AccordionDetails,
  Paper,
  TableContainer,
  TableCell,
  TableHead,
  TableBody,
  TableRow,
  Table
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function createData(
  attribute: string,
  value: any
) {
  return { attribute, value };
}

const rows = [
  createData('Product type', 'Kurta'),
  createData('Shipping height', '70 in'),
  createData('Shipping length', '48 in'),
  createData('Shipping weight', '1 kg'),
  createData('Shipping width', '56 in'),
];

const ViewAdditionalDetails = () => {
  return (
    <Box>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          sx={{ justifyContent: 'end', alignItems: 'center' }}
        >
          <Typography sx={{ color: 'blue' }}>
            View additional details
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Paper>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead>
                  <TableRow sx={{ textTransform: 'none' }}>
                    <TableCell>Attribute</TableCell>
                    <TableCell>Value</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {rows.map((row) => (
                    <TableRow
                      key={row.attribute}
                      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                    >
                      <TableCell component="th" scope="row">
                        {row.attribute}
                      </TableCell>
                      <TableCell >{row.value}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          </Paper>
        </AccordionDetails>
      </Accordion>
    </Box>
  )
}
export default ViewAdditionalDetails;