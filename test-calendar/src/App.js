import React from 'react'
import './App.css'
import {addMonths, getMonth, getDaysInMonth, getYear} from 'date-fns'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31]
const month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']

const Modal = ({isOpen, onCancel}) => {

  return (
    <>
      {isOpen &&
      <div className="modalOverlay">
        <div className="modalWindow">
          <div className="modalHeader">
            <p>Write a note</p>
          </div>
          <div className="modalBody">
            <textarea type="text" rows="10" cols="45" name="text"/>
          </div>
          <div className="modalButtons">

            <button className="modal-close" onClick={onCancel}>Close</button>
            <button className="modal-close">Не доделал</button>
            <button className="modal-close round-close" onClick={onCancel}>✕</button>
          </div>
        </div>
      </div>
      }
    </>
  )
}


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

        <div className="title">{month[getMonth(this.state.date)]}  {getYear(new Date(this.state.date))}</div>
        <div className="button-wrap">

          <button className="button" onClick={this.getPrevMonth}>
            Last month
          </button>
          <button className="button" onClick={this.getСurrentMonth}>
            Сurrent month
          </button>
          <button className="button" onClick={this.getNextMonth}>
            Next month
          </button>
        </div>
        <div className="days-wrapp">
          {items.slice(0, this.state.days).map(item =>
            <div
              className="day-container" key={item} onClick={this.showModal}>
              <div className="day-number">
                {item}
              </div>
            </div>)}
        </div>
        <Modal
          isOpen={this.state.isOpen}
          onCancel={this.handleCancel}
          onSubmit={this.handleSubmit}
        />
      </div>
    )
  }
}
