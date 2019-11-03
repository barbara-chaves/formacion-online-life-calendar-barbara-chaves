const selectedStatusReducer = (status={}, action) => {
  switch(action.type){
    case 'SELECT_STATUS':
      return action.payload
    default:
      return status
  }
}

export default selectedStatusReducer