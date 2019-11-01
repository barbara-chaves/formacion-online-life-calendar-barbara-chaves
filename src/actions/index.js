export const getDate = (data) => ({
  type: 'GET_DATE',
  payload: data
})

export const getStatus = (status) => ({
  type: 'GET_STATUS',
  payload: status
})

export const getMessage = (message) => ({
  type: 'GET_MESSAGE',
  payload: message
})

export const resetStatus = (newStatus) => ({
  type: 'RESET_STATUS',
  payload: newStatus
})

export const saveStatus = (newStatus) => ({
  type: 'SAVE_STATUS',
  payload: newStatus
})
