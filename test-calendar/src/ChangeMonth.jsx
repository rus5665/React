import React from 'react'
import {getPrevMonth, getСurrentMonth, getNextMonth} from './App.js'

const ChangeMonth = ({getPrevMonth, getСurrentMonth, getNextMonth}) => {
  return (
    <div className="button-wrap">
      <button className="button" onClick={getPrevMonth}>
        Last month
      </button>
      <button className="button" onClick={getСurrentMonth}>
        Сurrent month
      </button>
      <button className="button" onClick={getNextMonth}>
        Next month
      </button>
    </div>
  )
}

export default ChangeMonth
