import React from 'react'

const AddStatus = ({onAddClick, text}) => {
  return (
    <button className='add-status' onClick={onAddClick}>{text}</button>
  )
}

export default AddStatus