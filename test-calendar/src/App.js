import React from 'react'
import './App.css'
import {addMonths, getDaysInMonth} from 'date-fns'
import Modal from './Modal.jsx'
import Title from './Title.jsx'
import ChangeMonth from './ChangeMonth.jsx'
import BlockDays from './BlockDays.jsx'

export default class App extends React.Component {

  state = {
    text: '',
    isOpen: false,
    days: getDaysInMonth(Date()),
    month: '',
    year: '',
    date: Date()
  }


  showModal = () => {
    this.setState({isOpen: true})
  }

  handleCancel = () => {
    this.setState({isOpen: false})
  }

  getPrevMonth = () => {
    let date = addMonths(this.state.date, -1)
    let days = getDaysInMonth(date)
    this.setState({
      date: date,
      days: days
    })
  }

  getСurrentMonth = () => {
    let date = new Date()
    let days = getDaysInMonth(date)
    this.setState({
      date: Date(),
      days: days
    })
  }

  getNextMonth = () => {
    let date = addMonths(this.state.date, +1)
    let days = getDaysInMonth(date)

    this.setState({
      date: date,
      days: days
    })
  }


  render() {
    return (
      <div className="App">
        <Title stateDate={this.state.date}/>
        <ChangeMonth
          getPrevMonth={this.getPrevMonth}
          getСurrentMonth={this.getСurrentMonth}
          getNextMonth={this.getNextMonth}
        />
        <BlockDays
          stateDate={this.state.days}
          showModal={this.showModal}
        />
        <Modal
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}
