import React from 'react';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import CustomizedMenus from '../CustomizedButton';
import Image from 'next/image';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import EditIcon from '@mui/icons-material/Edit';
import { Box, Typography, Link, Button, Divider } from '@mui/material';
import { useRouter } from 'next/router';
import EditProduct from '../../pages/products/editproduct';

const options = [
  {
    title: 'Add products one by one',
    redirectURL: '/addproducts'
  },
  {
    title: 'Choose another method'
  }
];

const ProductsList = (props: any) => {
  const router = useRouter();

  const handleClick = () => {
    <EditProduct />
    router.push('/products/editproduct');
  }

  const columns: GridColDef[] = [
    {
      field: 'visibility', headerName: 'Visibility', width: 80,
      renderCell: () => {
        return (
          <div>
            <NotInterestedIcon sx={{ color: 'red' }} />
            <ArrowDropDownIcon />
          </div>
        )
      }
    },
    { field: 'status', headerName: 'Status', width: 130 },
    {
      field: 'image', headerName: 'Image', width: 130, sortable: false,
      renderCell: (params) => {
        return (
          <div style={{ width: '48px', height: '48px' }} >
            <Image src={params.row.image.avatar} alt='' />
          </div>
        )
      }
    },
    {
      field: 'title',
      headerName: 'Title',
      width: 150,
      renderCell: (params) => {
        return <Link href='/products/itemdetails' sx={{ textDecoration: 'underline' }} >{params.value}</Link>
      }
    },
    {
      field: 'productId',
      headerName: 'Product ID',
      width: 170,
    },
    {
      field: 'price',
      headerName: 'Price',
      width: 100,
    },
    {
      field: 'lastUpdate',
      headerName: 'Last update',
      width: 150
    },
    {
      field: 'stores',
      headerName: 'Stores',
      width: 180,
      sortable: false
    },
    {
      field: 'clicks',
      headerName: 'Clicks',
      width: 70
    },
    {
      field: 'edit',
      headerName: 'Edit',
      width: 70,
      sortable: false,
      renderCell: () => {
        return (
          <div>
            <Button onClick={handleClick}>
              <EditIcon />
            </Button>
          </div>
        )
      }
    },
  ];

  return (
    <div style={{ height: 290, width: '100%' }} >
      <Box sx={{ height: 100, display: 'flex', gap: '45px' }}>
        <Box sx={{ padding: '20px' }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>All</Typography>
          <Typography sx={{ color: 'blue', fontSize: '32px' }}>3</Typography>
        </Box>
        <Divider orientation='vertical' sx={{ height: '9vh' }} />
        <Box sx={{ padding: '20px' }}>
          <Typography sx={{ fontWeight: 'bold', fontSize: '14px' }}>Products having issue</Typography>
          <Typography sx={{ color: 'blue', fontSize: '32px' }}>3</Typography>
        </Box>
      </Box>
      < CustomizedMenus items={options} />
      <DataGrid
        rows={props.rows}
        columns={columns}
        pageSizeOptions={[10, 30, 50, 100, 200, 500]}
        initialState={{
          pagination: {
            paginationModel: { pageSize: 50, page: 0 },
          },
        }}
      />
    </div >
  )
}

export default ProductsList;