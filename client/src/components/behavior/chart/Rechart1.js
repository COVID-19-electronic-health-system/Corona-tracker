import React from 'react'
import { ResponsiveContainer, Line, LineChart, Tooltip, Legend, YAxis, XAxis, CartesianGrid } from 'recharts';

export default function Rechart1() {

    const rechartData = [
        {name: 'Day 1', Interest: 3, Sadness: 4, Sleep: 3, Energy:4, Appetite: 5},
        {name: 'Day 2', Interest: 6, Sadness: 6, Sleep: 5, Energy:7, Appetite: 3},
        {name: 'Day 3', Interest: 3, Sadness: 5, Sleep: 4, Energy:2, Appetite: 3},
        {name: 'Day 4', Interest: 2, Sadness: 2, Sleep: 4, Energy:1, Appetite: 4},
        {name: 'Day 5', Interest: 2, Sadness: 1, Sleep: 5, Energy:5, Appetite: 3},
        {name: 'Day 6', Interest: 5, Sadness: 2, Sleep: 3, Energy:1, Appetite: 5},
        {name: 'Day 7', Interest: 1, Sadness: 3, Sleep: 1, Energy:5, Appetite: 3},
      ]
    //   isActive: false,
    //   interest: true,
    //   sadness: true,
    //   sleep: true,
    //   energy: true,
    //   appetite: true

    const createLine = (type, colour) => (
        <Line 
        //   activeDot={{ 
        //     // onMouseUp: this.onMouseUpHandler,
        //     onMouseDown: event => this.onMouseDownHandler(type, event)
        //   }}
          type="natural" 
          dataKey={type} 
          stroke={colour} />
      )

    const interest = createLine('Interest', 'green') 
    const sadness = createLine('Sadness', 'black') 
    const sleep = createLine('Sleep', 'purple')
    const energy = createLine('Energy', 'red')
    const appetite = createLine('Appetite', 'magenta') 

    return (
        <div>
            jygygliglig
            <ResponsiveContainer height={'100%'} width={'100%'}>
        <LineChart data={rechartData}
        //   onMouseUp={thisonMouseUpHandler}
        //   onMouseMove={this.onMouseMoveHandler}
          margin={{ top: 2, right: 30, left: 20, bottom: 5 }}>
            <CartesianGrid strokeDasharray="1 1" />
            <XAxis dataKey="name" />
            kgfksgfkljsfhkljshfl
            <YAxis />
            <Tooltip />
            <Legend />
            {interest}
            {sadness}
            {sleep}
            {energy}
            {appetite}
           
            
          </LineChart>
      </ResponsiveContainer>
            
        </div>
    )
}
