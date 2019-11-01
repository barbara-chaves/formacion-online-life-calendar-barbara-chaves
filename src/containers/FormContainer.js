import React from 'react'
import { connect } from "react-redux";
import { getDate, getMessage, getStatus, resetStatus, saveStatus } from "../actions";

import Form from '../components/Form'

const FormContainer = (props) => {
  return <Form {...props}/>
}

const mapStateToProps = state => ({
  newState: state.newState,
  datesList: state.stateList.map(state => state.date)
})

const mapDispatchToProps = dispatch => ({
  date: date => dispatch(getDate(date)),
  message: mess => dispatch(getMessage(mess)),
  status: status => dispatch(getStatus(status)),
  reset: () => dispatch(resetStatus()),
  save: newStatus => dispatch(saveStatus(newStatus))
})

export default connect(mapStateToProps, mapDispatchToProps)(FormContainer)