import React from 'react'
import '../css/ButtonGroup.css'

function ButtonGroup() {
    return (
        <div className='btn-group'>
            <button className='minimal-button'>Minimal</button>
            <button className='moderate-button'>Moderate</button>
            <button className='severe-button'>Severe</button>
        </div>
    )
}

export default ButtonGroup
