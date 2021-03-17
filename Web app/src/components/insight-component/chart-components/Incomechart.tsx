import React, { useState, useEffect } from 'react';

import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const staticOptions = {
  chart: {
    type: 'column',
    styledMode: true,
    spacingRight: 25,
    spacingLeft: 20,
  },
  credits: {
    enabled: false,
  },
  title: {
    text: 'Categories sales<small>Highcharts API, Stacked column Chart</small>',
    useHTML: true,
  },
  yAxis: {
    title: {
      enabled: false,
    },
    gridLineColor: '#D0D0DA30',
    stackLabels: {
      enabled: true,
      style: {
        fontWeight: 'normal',
        color:
         
          'gray',
      },
    },
  },
  colors: [
    '#45446F',
    '#BE3D7F',
    '#FF6492',
    '#FF93A8',
    '#FFC3BA',
    '#FFEAE4',
    '#DFD7FF',
    '#B5ACFF',
    '#7A77FF',
    '#5251C9',
  ],
  legend: {
    align: 'center',
    width: '90%',
  },
  tooltip: {
    headerFormat: '<b>{point.x}</b><br/>',
    pointFormat: '{series.name}: {point.y}<br/>Total: {point.stackTotal}',
  },
  plotOptions: {
    column: {
      stacking: 'normal',
    },
  },
  series: [
    {
      name: "HDS",
      data: [5, 3, 4, 7, 2]
    },
    {
      name: "36LB",
      data: [2, 2, 3, 2, 1]
    },
    {
      name: "Pack",
      data: [3, 4, 4, 2, 5]
    }
  ]
};

export default staticOptions;