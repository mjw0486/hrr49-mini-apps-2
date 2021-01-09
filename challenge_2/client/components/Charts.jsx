import React, { useState, useEffect } from 'react';
import Chart from 'chart.js';
import {Line} from 'react-chartjs-2';

const Charts = function({data}) {
  console.log('data: ', data);

  const [chartData, setChartData] = useState({})
  const [labels, setLabels] = useState([])
  const [values, setValues] = useState([])

  useEffect(() => {
    setLabels(Object.keys(data));
    setValues(Object.values(data));
  }, [data]);

  const chart = () => {
    console.log('labels: ', labels);
    console.log('values: ', values);
    setChartData({
      labels: labels,
      datasets: [
        {
          label: 'Bitcoin Closing Amounts',
          data: values,
          backgroundColor: [
            'rgba(181, 54, 241, .5)'
          ],
          borderWidth: 3
        }
      ]
    })
  }
  useEffect(() => {
    chart()
  }, [data, values, labels])
    return (
      <div>
        <Line data={chartData}/>
      </div>
    );
};

export default Charts;