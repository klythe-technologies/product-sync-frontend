import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend, ResponsiveContainer } from "recharts";
import { pieData } from "src/constants/sales-pie-chart-data";
import { colors } from "src/constants/sales-pie-chart-data";
import { Box, Card, CardContent, CardHeader, Grid, Typography, Divider } from '@mui/material';

const SalesPieChart = () => {

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active) {
      return (
        <Box
          className="custom-tooltip"
          style={{
            // backgroundColor: "#ffff",
            padding: "5px",
          }}
        >
          <label>{`${payload[0].name} : ${payload[0].value}%`}</label>
        </Box>
      );
    }
    return null;
  };

  return (
    <Card>
      <CardHeader title="Sales Overview">
      </CardHeader>
      <CardContent>
        <Grid container spacing={6}>
          <Grid item xs={12}>
            <PieChart width={450} height={300} >
              <Pie
                data={pieData}
                color="#000000"
                dataKey="value"
                nameKey="name"
                cx="50%"
                cy="50%"
                outerRadius={120}
                fill="#8884d8"
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={colors[index % colors.length]}
                  />
                ))}
              </Pie>
              <Tooltip content={<CustomTooltip />} />
              <Legend layout="vertical" align="right" verticalAlign="bottom" />
            </PieChart>
          </Grid>
          {/* <Grid item xs={12}>
            <Box>
              <Box>
                <Typography>Number of sales</Typography>
                <Typography>$86,400</Typography>
              </Box>
              <Divider />
            </Box>

          </Grid> */}
        </Grid>
      </CardContent>
    </Card>
  );
}
export default SalesPieChart;