import { turnoverFormat } from '@/utils/helpers/turnoverFomat';
import React from 'react';
import { Bar, BarChart, ResponsiveContainer, Tooltip, TooltipProps, XAxis, YAxis } from 'recharts';

type CustomTooltipProps = TooltipProps<number, string>;

const CustomTooltip: React.FC<CustomTooltipProps> = ({ active, payload, label }) => {
  if (active && payload && payload.length) {
    return (
      <div style={{ background: '#fff', border: '1px solid #ccc', padding: '10px' }}>
        <p>
          <strong>Ставка:</strong> {label}
        </p>
        <p>
          <strong>Оборот:</strong> {payload[0].value?.toLocaleString()}
        </p>
      </div>
    );
  }

  return null;
};

const Shedule = ({ data }: any) => {
  const sortedData = [...data].sort((a, b) => a.percent - b.percent);
  return (
    <ResponsiveContainer width='100%' height={400}>
      <ResponsiveContainer width='100%' height={500}>
        <BarChart
          data={sortedData}
          layout='horizontal' // Горизонтальный график
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <YAxis
            type='number'
            dataKey='turnover'
            tickFormatter={(value) => turnoverFormat(value)}
          />
          <XAxis type='category' dataKey='percent' />
          <Tooltip content={<CustomTooltip />} />
          <Bar dataKey='turnover' fill='#f99532' barSize={20} />
        </BarChart>
      </ResponsiveContainer>
    </ResponsiveContainer>
  );
};

export default Shedule;
