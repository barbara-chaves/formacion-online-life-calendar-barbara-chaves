import { combineReducers } from "redux";
import newStatusReducer from './newStatusReducer'
import saveSateReducer from './saveSateReducer'
import selectedStatusReducer from './selectedStatusReducer'
import addStatusReducer from './addStatusReducer'

export default combineReducers({
  addStatus: addStatusReducer,
  newState: newStatusReducer,
  stateList: saveSateReducer,
  selected: selectedStatusReducer,
})
