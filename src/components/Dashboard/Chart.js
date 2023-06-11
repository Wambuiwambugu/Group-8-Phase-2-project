import React, { useEffect, useState ,PureComponent} from 'react';
import dbData from './db.json'
import { BarChart, Bar, Cell, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';



const Chart = ({activities,chartType}) => {
 
    
    return (
        <ResponsiveContainer width="100%" height="50%">
        <BarChart
          width={500}
          height={300}
          data={activities}
          margin={{
            top: 20,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="date" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={chartType} stackId="a" fill="#8884d8" />

        </BarChart>
      </ResponsiveContainer>
      );
    };
    

  

export default Chart;
