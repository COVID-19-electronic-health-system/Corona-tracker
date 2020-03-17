import React from 'react'
import { Chart } from 'react-charts'


const ReactCharts = () => {

    // Create test data
  const data =  [
      {
        label: 'Patient temperature',
        data: [
          { x: new Date("2020-02-28"), y: 80 }, 
          { x: new Date("2020-03-2"), y: 70 }, 
          { x: new Date("2020-03-5"), y: 85 },
          { x: new Date("2020-03-8"), y: 85 },
          { x: new Date("2020-03-9"), y: 95 },
          { x: new Date("2020-03-11"), y: 65 }
        ]
      }
    ]
  
  // Handles scale and visual rendering of chart
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'time', position: 'bottom'},
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return (
    // Container for the chart
    <div
      style={{
        width: '575px',
        height: '300px',
      }}
    >
    
      <Chart 
        data={data} 
        axes={axes}
        tooltip
      />
    </div>
  )
}

export default ReactCharts
