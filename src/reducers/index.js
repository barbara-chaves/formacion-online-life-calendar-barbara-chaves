import { combineReducers } from "redux";
import newStatusReducer from './newStatusReducer'
import saveSateReducer from './saveSateReducer'

export default combineReducers({
  newState: newStatusReducer,
  stateList: saveSateReducer
})
