import React from 'react'
import {getMonth, getYear} from "date-fns"
import {stateDate} from './App.js'

const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']


const Title = ({stateDate}) => {
  return (
    <div
      className="title">{month[getMonth(stateDate)]} {getYear(new Date(stateDate))}
    </div>
  )
}

export default Title
