import { combineReducers } from "redux";
import newStatusReducer from './newStatusReducer'
import saveSateReducer from './saveSateReducer'
import selectedStatusReducer from './selectedStatusReducer'

export default combineReducers({
  newState: newStatusReducer,
  stateList: saveSateReducer,
  selected: selectedStatusReducer
})
