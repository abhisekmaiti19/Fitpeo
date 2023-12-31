import * as React from 'react';
import Stack from '@mui/material/Stack';
import { PieChart } from '@mui/x-charts/PieChart';

const data = [
  { label: '  Product Return', value: 400 },
  { label: 'Customer Return', value: 300 },
  { label: 'Monthly Revenue', value: 300 },
  { label: 'Yearly Revenue', value: 800 },
];

export default function Pie() {
  return (
    <Stack direction="row">
      <PieChart
        series={[
          {
            paddingAngle: 5,
            innerRadius: 60,
            outerRadius: 80,
            data,
          },
        ]}
        margin={{ right: 5 }}
        width={200}
        height={200}
        legend={{ hidden: true }}
      />
      
    </Stack>
  );
}