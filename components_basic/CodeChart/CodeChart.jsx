/* eslint-disable react/prop-types */
import React, { useEffect, useRef  , useState} from 'react';
import Chart from 'chart.js/auto';

const RadarChart = (props) => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [qt , set_qt] = useState(props.qt) ; 
  useEffect(()=>{
    console.log(qt) ; 
    set_qt(props.qt)
  } , [props.qt])

  useEffect(() => {
    const data = {
      labels: [
        'competetive',
        'web dev',
        'academic',
        'machine learning',
        'Cyber security',
        'others'
      ],
      datasets: [
        {
          label : "Your Courses",
          data: props.qt,
          fill: true,
          backgroundColor: 'rgb(0, 225, 225 , 0.4)',
          borderColor: 'rgb(0, 225, 225)',
          pointBackgroundColor: 'rgb(0, 225, 225)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgb(0, 255, 255)' , 
          font : 'white'
        }
      ]
    };
    const config = {
      type: 'radar',
      data: data,
      options: {
        elements: {
          line: {
            borderWidth: 3
          }
        },
        responsive: true,
        maintainAspectRatio: false,
        point: {
          radius: 0,
        },
        plugins: {
         legend: {
             labels: {
                color : "gray"

             }
         }
     },
        layout: {
          padding: {
            left: 10,
            right: 10,
            top: 30,
            bottom: 30
          }
        },
        scales: {
          r: {
            grid: {
               color: 'gray'
             },
            pointLabels: {
               color: 'gray'
             },
            ticks: {
              display: false,  
              beginAtZero: false, 
              font: {
                color: 'white'
              }
            },
            angleLines: {
              color: 'gray' 
            }
          }
        }
      }
    };
    
        
    const createRadarChart = () => {
      const ctx = chartRef.current?.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }
        chartInstance.current = new Chart(ctx, config);
      }
    };

    createRadarChart();

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [props.qt]);

  return (
    <div style={{ width: '30vw', height: '38vh' }}>
      <canvas ref={chartRef} width={300} height={380}></canvas>
    </div>
  );
};

export default RadarChart;
