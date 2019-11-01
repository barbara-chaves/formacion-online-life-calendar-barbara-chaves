import React from 'react'

export const Status = ({status}) => {
  return (
    <div className='status'>
      <div className='status__face'>
        <span className={'status__face__content ' + status}>{status}</span>
      </div>
    </div>
  )
}