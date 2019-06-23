import React from 'react'
import {isOpen, onCancel} from './App.js'


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

export default Modal
