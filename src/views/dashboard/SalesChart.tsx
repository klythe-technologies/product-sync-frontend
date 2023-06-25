import React from "react";
import {
  Line,
  XAxis,
  YAxis,
  Tooltip,
  LineChart,
  CartesianGrid,
} from "recharts";
import { data } from '../../constants/sales-chart-data';
import {
  Card,
  Chip,
  CardHeader,
  CardContent,
} from '@mui/material';

const SalesChart = () => {
  return (
    <Card>
      <CardHeader title="Sales"
        sx={{ marginTop: '5px', marginLeft: '30px' }}
      >
        <Chip label="25%" color="success" variant="outlined" ></Chip>
      </CardHeader>
      <CardContent>
        <LineChart
          width={1000}
          height={370}
          data={data}
          margin={{
            top: 5,
            right: 40,
            bottom: 5,
          }}
        >
          <CartesianGrid stroke="#ccc" />
          <XAxis dataKey="name" style={{ fontSize: '11px' }} />
          <YAxis style={{ fontSize: '11px' }} />
          <Tooltip />
          <Line
            type="linear"
            dataKey="percentage"
            stroke="#8884d8"
            strokeWidth="2"
          />
        </LineChart>
      </CardContent>
    </Card>
  );
}
export default SalesChart;