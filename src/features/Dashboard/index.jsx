import React from "react";
import Header from '../../components/Header'
import HeaderRight from '../../components/Header/HeaderRightAction'
import IconAdd from '../../assets/icons/IconAdd'
import OverView from "./component/overviews";
import {Line} from '@ant-design/plots' ;
function Dashboard(){
   const data = [
      {
        year: '1991',
        value: 3,
      },
      {
        year: '1992',
        value: 4,
      },
      {
        year: '1993',
        value: 3.5,
      },
      {
        year: '1994',
        value: 5,
      },
      {
        year: '1995',
        value: 4.9,
      },
      {
        year: '1996',
        value: 6,
      },
      {
        year: '1997',
        value: 7,
      },
      {
        year: '1998',
        value: 9,
      },
      {
        year: '1999',
        value: 13,
      },
    ];
    const config = {
      data,
      xField: 'year',
      yField: 'value',
      label: {},
      point: {
        size: 4,
        shape: 'diamond',
        style: {
          fill: 'white',
          stroke: '#5B8FF9',
          lineWidth: 2,
        },
      },
      tooltip: {
        showMarkers: false,
      },
      state: {
        active: {
          style: {
            shadowBlur: 4,
            // stroke: '#000',
            fill: 'red',
          },
        },
      },
      interactions: [
        {
          type: 'marker-active',
        },
      ],
    };

   return(
      <div>
         <Header title="Dashboard" 
         rightComponent={
            
            <HeaderRight icon={<IconAdd/>} />
         }/>
         <div>
            <OverView/>
         </div>
         <div className="chart">
            <Line className="chart-line" {...config} />
         </div>
      </div>
   )
}
export default Dashboard;