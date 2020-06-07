import React from 'react';
import {Line} from 'react-chartjs-2';

export default function Chart({chart}) {
  // console.log(chart);
  let id = [];
  chart.map((value) => {
    id.push(value.objectID)
  })

  let votes = [];
  chart.map((value) => {
    votes.push(value.points)
  })

  const state = {
    labels: id,
    width: '400',
    height: '100',
    datasets: [
      {
        label: 'Votes',
        fill: false,
        lineTension: 0.5,
        backgroundColor: 'rgba(75,192,192,1)',
        borderColor: 'rgb(0, 0, 200)',
        borderWidth: 2,
        data: votes
      }
    ]
  }

  // console.log(news);
  return (
      <div className="chart">
      <Line
        data={state}
        width={state.width}
        height={state.height}
        options={{
          title:{
            display:true,
            text:'Average Rainfall per month',
            fontSize:20
          },
          legend:{
            display:true,
            position:'right'
          }
        }}
      />
    </div>
  )
}
