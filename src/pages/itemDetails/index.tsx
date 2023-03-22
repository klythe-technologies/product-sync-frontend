import React, { useState } from 'react';
import {
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  Paper,
  Link,
  FormControlLabel,
  Checkbox,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import Box, { BoxProps } from '@mui/material/Box';
import CurrencyRupeeIcon from '@mui/icons-material/CurrencyRupee';
import CollectionsIcon from '@mui/icons-material/Collections';
import NotInterestedIcon from '@mui/icons-material/NotInterested';
import avatar from '../../../public/images/avatars/avatar.jpg';
import Image from 'next/image';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

function Item(props: BoxProps) {
  const { sx, ...other } = props;

  return (
    <Box
      sx={{
        p: 1,
        m: 1,
        ...sx,
        fontSize: '12px',
        gap: '50%',
        width: 130
      }}
      {...other}
    />
  );
}

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

const ItemDetails = () => {
  // const [toggleValue, setToggleValue] = useState(false);

  // const toggleHandler = () => {
  //   setToggleValue(true);
  // };

  return (
    <Box style={{ display: 'flex', gap: '20px' }}>
      <Box>
        <Card variant="outlined" sx={{ boxShadow: 'none' }}>
          <CardContent>
            <div>
              <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Typography sx={{ fontSize: '18px' }}>Best Kurta</Typography>
                <Button
                  variant='contained'
                  sx={{ textTransform: 'none', backgroundColor: 'blue', gap: '5px' }}>
                  <EditIcon />
                  Edit Product
                </Button>
              </div>
              <Divider />
              <div style={{ display: 'flex', gap: '30px', marginTop: '30px' }}>
                <div>
                  <Paper variant="outlined" sx={{
                    width: 330,
                    height: 330,
                    display: 'flex'
                  }}>
                    <Box sx={{ width: 320, alignItems: 'center', display: 'flex', justifyContent: 'center' }}>
                      <Image
                        src={avatar}
                        alt={'logo'}
                        width={256}
                        height={256} />
                    </Box>
                  </Paper>
                  <Box sx={{ display: 'flex', gap: '10px', marginTop: '20px' }}>
                    <Paper variant="outlined" sx={{
                      width: 105,
                      height: 104,
                      display: 'flex'
                    }}>
                      <Box sx={{ alignItems: 'center', display: 'flex', margin: 'auto', justifyContent: 'center' }}>
                        <AddPhotoAlternateIcon />
                      </Box>
                    </Paper>
                    <Paper variant="outlined" sx={{
                      width: 105,
                      height: 104,
                      display: 'flex'
                    }}>
                      <Box sx={{ alignItems: 'center', display: 'flex', margin: 'auto', justifyContent: 'center' }}>
                        <AddPhotoAlternateIcon />
                      </Box>
                    </Paper>
                    <Paper variant="outlined" sx={{
                      width: 105,
                      height: 104,
                      display: 'flex'
                    }}>
                      <Box sx={{ alignItems: 'center', display: 'flex', margin: 'auto', justifyContent: 'center' }}>
                        <AddPhotoAlternateIcon />
                      </Box>
                    </Paper>
                  </Box>
                  <Box sx={{ textAlign: 'end', marginTop: '40px' }}>
                    <Button sx={{ color: 'blue', textTransform: 'none' }}>
                      <CollectionsIcon sx={{ marginRight: '10px', width: '17px' }} />
                      Manage images
                    </Button>
                  </Box>
                  <Box sx={{ marginTop: '10px' }}>
                    <Typography sx={{ fontSize: '12px' }}>Description</Typography>
                    <Typography>this is the brand new kurta</Typography>
                  </Box>
                </div>
                <div>
                  <Box>
                    <Typography sx={{ fontSize: '12px' }}>Product page on your website</Typography>
                    <Typography>
                      <Link sx={{ textDecoration: 'underline', }}>
                        Product link will be here
                      </Link>
                    </Typography>
                    <Divider sx={{ marginTop: '17px' }} />
                    <div>
                      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                        <Item>
                          <Typography sx={{ fontSize: '12px' }}>Price</Typography>
                          <Typography sx={{ display: 'flex' }}>
                            <CurrencyRupeeIcon
                              sx={{ width: '15px', marginTop: '-3px' }}
                            />
                            500.00
                          </Typography>
                        </Item>
                        <Item>
                          <Typography sx={{ fontSize: '12px' }}>Availability</Typography>
                          <Typography>In stock</Typography>
                        </Item>
                      </Box>
                    </div>
                    <div>
                      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
                        <Item>
                          <Typography sx={{ fontSize: '12px' }}>Sale price</Typography>
                          <Typography sx={{ color: 'green', display: 'flex' }}>
                            <CurrencyRupeeIcon
                              sx={{ width: '15px' }}
                            />
                            800.00
                          </Typography>
                        </Item>
                      </Box>
                    </div>
                    <Divider />
                    <div>
                      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)' }}>
                        <Item>
                          <Typography sx={{ fontSize: '12px' }}>Brand</Typography>
                          <Typography sx={{ display: 'flex' }}>
                            <CurrencyRupeeIcon
                              sx={{ width: '15px', marginTop: '-3px' }}
                            />
                            Libas
                          </Typography>
                        </Item>
                        <Item>
                          <Typography sx={{ fontSize: '12px' }}>Product ID</Typography>
                          <Typography>15228724</Typography>
                        </Item>
                      </Box>
                    </div>
                    <Divider />
                    <div>
                      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(1, 1fr)' }}>
                        <Item>
                          <Typography sx={{ fontSize: '12px' }}>Condition</Typography>
                          <Typography>New</Typography>
                        </Item>
                      </Box>
                    </div>
                  </Box>
                </div>
              </div>
            </div>
          </CardContent>

          <Box>
            <Accordion>
              {/* <Heading> */}
              {/* <div
                          style={{ padding: "10px", cursor: "pointer" }}
                          className="heading"
                          onClick={() => toggleHandler()}
                        >
                          {toggleValue !== true ? `Expand` : `Shrink`}
                        </div> */}
              {/* </Heading> */}
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
        </Card>
      </Box>
      <Card sx={{ width: '300px', boxShadow: 'none', height: '73vh' }} variant="outlined">
        <CardContent>
          <Box>
            <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
              <Typography sx={{ fontSize: '18px' }}>Status</Typography>
              <Typography sx={{ color: 'red' }}>Not approved</Typography>
            </Box>
            <Divider />
            <Box sx={{ display: 'flex', gap: '10px' }}>
              <NotInterestedIcon />
              <Typography sx={{ fontSize: '10px', width: '186px' }}>
                This product cannot be shown.
                <Link> Review and fix </Link>
                your product so it can be shown to customers.
              </Typography>
            </Box>
            <Divider />
            <Box>
              <Typography sx={{ fontSize: '12px' }}>Visibility preference</Typography>
              <div>
                <FormControlLabel
                  sx={{ fontSize: '14px' }}
                  control={<Checkbox defaultChecked />}
                  label="Show on Google once approved" />
              </div>
            </Box>
            <Divider sx={{ marginBottom: '10px' }} />
            <Paper variant="outlined" sx={{
              width: 152,
              height: '30vh',
            }}>
              <Box sx={{
                width: '150px',
                height: '152px',
              }}>
                <Image
                  src={avatar}
                  alt={'logo'}
                  width={150}
                  height={152} />
                  {/* <Box>
                    <Typography>SALE</Typography>
                  </Box> */}
                <Box sx={{ marginLeft: '5px' }}>
                  <Typography sx={{ fontSize: '12px', marginBottom: '10px', marginTop: '5px' }}>Best Kurta</Typography>
                  <Box sx={{ marginTop: '5px' }}>
                    <Typography>test</Typography>
                    <Box sx={{ display: 'flex', gap: '4%', marginBottom: '5px' }}>
                      <Typography
                        sx={{ display: 'flex', color: 'green' }}>
                        <CurrencyRupeeIcon
                          sx={{ width: '15px' }}
                        />
                        800.00
                      </Typography>
                      <Typography sx={{ textDecoration: 'line-through', display: 'flex', fontSize: '12px' }}>
                        <CurrencyRupeeIcon
                          sx={{ width: '15px' }}
                        />
                        1000.00
                      </Typography>
                    </Box>
                    <Typography sx={{ color: 'green', fontSize: '13px' }}>In stock</Typography>
                  </Box>
                </Box>
              </Box>
            </Paper>
            <Box sx={{ marginTop: '15px' }}>
              <Box sx={{ marginBottom: '10px' }}>
                <Typography sx={{ fontSize: '12px' }}>Last update</Typography>
                <Typography>3 days ago</Typography>
              </Box>
              <Box sx={{ marginBottom: '10px' }}>
                <Typography sx={{ fontSize: '12px' }}>Source</Typography>
                <Typography>One by one</Typography>
              </Box>
            </Box>
            <Button
              variant='outlined'
              sx={{ color: 'blue', textTransform: 'none', marginTop: '10px' }}>
              Delete Product
            </Button>
          </Box>
        </CardContent>
      </Card>
    </Box>
  )
}
export default ItemDetails;
