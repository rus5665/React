import React from 'react'
import {stateDate, showModal} from './App.js'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]

const BlockDays = ({stateDate, showModal}) => {
  return (
    <div className="days-wrapp">
      {items.slice(0, stateDate).map(item =>
        <div
          className="day-container" key={item} onClick={showModal}>
          <div className="day-number">
            {item}
          </div>
        </div>)}
    </div>
  )
}

export default BlockDays
