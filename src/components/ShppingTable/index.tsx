import React from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';

const ShippingTable = () => {
  const columns = [
    {
      field: 'name', headerName: 'Name', width: 150,
    },
    {
      field: 'area', headerName: 'Area', width: 150,
    },
    {
      field: 'deliveryType', headerName: 'Delivery type', width: 150,
    },
    {
      field: 'shippingRate', headerName: 'Shipping rate', width: 150,
    },
    {
      field: 'note', headerName: 'Note', width: 150,
    }
  ]

  return (
    <Box>
      <Box sx={{ marginTop: '30px', marginLeft: '10%', maxWidth: '920px' }}>
        <Paper variant='outlined' sx={{ justifyContent: 'center' }}>
          <Box sx={{ padding: '16px 24px' }}>
            <Typography
              sx={{
                fontFamily: 'Roboto,Helvetica Neue,Helvetica,Arial,sans-serif',
                fontSize: '1.125rem',
                fontWeight: '500px'
              }}>
              Shipping
            </Typography>
          </Box>
          <Divider />
          <Box sx={{ padding: '12px 24px' }}>
            <Button variant='outlined' sx={{ color: 'blue', textTransform: 'none' }}>Add shipping information</Button>
          </Box>
          <Divider />
          <TableContainer sx={{ maxHeight: 440 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.field}
                      style={{ textTransform: 'none' }}
                    >
                      {column.headerName}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                <Box>
                  <Typography sx={{ textAlign: 'center' }}>No results</Typography>
                </Box>
              </TableBody>
            </Table>
          </TableContainer>
        </Paper>
      </Box>
    </Box>
  )
}
export default ShippingTable;