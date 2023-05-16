import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { styled } from '@mui/material/styles';
import Tooltip, { TooltipProps, tooltipClasses } from '@mui/material/Tooltip';
import Image from 'next/image';
import { Typography, Box, Link, Divider } from '@mui/material';
import ExpandAttention from '../../components/ExpandAttention';
import { GridToolbarContainer, GridToolbarExport } from '@mui/x-data-grid';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 13,
    height: '10vh',
    paddingTop: '20px',
  },
}));


function CustomToolbar() {
  return (
    <Box>
      <GridToolbarContainer sx={{ justifyContent: 'end' }}>
        <Tooltip title="Download a file containing all the currently filtered product issues">
          <GridToolbarExport sx={{ textTransform: 'none' }} />
        </Tooltip>
      </GridToolbarContainer>
      <Divider />
    </Box>
  );
}

const ProductsNeedAttention = (props: any) => {
  const columns: GridColDef[] = [
    {
      field: 'product', headerName: 'Product', width: 300,
      renderCell: (params) => {
        return (
          <Box sx={{ display: 'flex', gap: '20px' }}>
            <div style={{ width: '60px', height: '60px' }} >
              <Image src={params.value.avatar} alt='' />
            </div>
            <Box sx={{ margin: 'auto' }}>
              <Link href="/products/itemdetails" sx={{ textDecoration: 'underline', color: 'blue', margin: 'auto' }}>
                Best Kurta
              </Link>
            </Box>
          </Box>
        )
      }
    },
    {
      field: 'potential', headerName: 'Click potential', width: 180,
    },
    {
      field: 'status', headerName: 'Status', width: 130,
      renderCell: () => {
        return (
          <Box sx={{
            justifyContent: 'space-between'
          }}>
            <LightTooltip title="This product isn't showing to customers on Klythe Sync. Review and fix what needs attention.">
              <Typography sx={{ borderBottom: '1px dashed black', marginBottom: '15px', fontSize: '14px' }}>
                Not Approved
              </Typography>
            </LightTooltip>
            <Link href="/products/editproduct" sx={{ textDecoration: 'none', color: 'blue' }}>
              Fix
            </Link>
          </Box>
        )
      }
    },
    {
      field: 'attention',
      headerName: 'What needs attention',
      width: 350,
      renderCell: () => {
        return (
          <ExpandAttention />
        )
      }
    },
  ];

  return (
    <div style={{ height: 500, width: 1000 }} >
      <DataGrid
        rows={props.rows}
        columns={columns}
        pageSizeOptions={[5, 10, 30, 50, 100]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 5, page: 0 },
          },
        }}
        rowHeight={170}
        slots={{
          toolbar: CustomToolbar,
        }}
      />
    </div >
  )
}

export default ProductsNeedAttention;