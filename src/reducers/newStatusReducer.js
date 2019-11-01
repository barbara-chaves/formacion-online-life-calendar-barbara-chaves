const initialState = {
  date: '',
  status: 'happy',
  message: ''
}

export default function(state = initialState, action) {
  switch(action.type){
    case 'GET_DATE':
      return {
        ...state,
        date: action.payload
      }
    case 'GET_STATUS':
      return {
        ...state,
        status: action.payload
      }
    case 'GET_MESSAGE':
      return {
        ...state,
        message: action.payload
      }
    case 'RESET_STATUS':
      return initialState
    default:
      return state
  }
}