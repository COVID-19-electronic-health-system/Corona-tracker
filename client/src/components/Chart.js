import React from 'react'
import { Chart } from 'react-charts'

const TempChart = () => {
  // Create mock data   
  const data = React.useMemo(
    () => [
      {
        label: 'User Current Temp',
       data: [{ x: 1, y: 80 }, { x: 2, y: 70 }, { x: 3, y: 85 }, {x: 4, y: 71}]
      }
    ],
    []
  )
  // Handles scale and visual rendering of chart
  const axes = React.useMemo(
    () => [
      { primary: true, type: 'linear', position: 'bottom' },
      { type: 'linear', position: 'left' }
    ],
    []
  )

  return (
    <div
      style={{
        width: '275px',
        height: '200px'
      }}
    >
      <Chart data={data} axes={axes} />
    </div>
  )
}

export default TempChart
