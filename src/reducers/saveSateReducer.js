export default function saveStateReducer(prevState = [], action) {
  switch(action.type){
    case 'SAVE_STATUS':
      return [
        ...prevState, 
        action.payload
      ]
      default:
        return prevState
  }
}