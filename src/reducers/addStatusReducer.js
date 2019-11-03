const addStatusReducer = (status = false, action) => {
  switch(action.type){
    case 'ADD_STATUS':
      return !status
    default:
      return status
  }
}

export default addStatusReducer