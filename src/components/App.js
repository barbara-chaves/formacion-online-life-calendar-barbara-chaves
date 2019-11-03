import React from "react";
import "../styles/app.scss";

import FormContainer from "../containers/FormContainer";
import StatusList from "./StatusList";
import AddStatus from "./AddStatus";
import { addStatus } from "../actions";
import { connect } from "react-redux";

function App({ add, addStatus }) {
  const renderFormContainer = () => {
    return add ? <FormContainer /> : null;
  };

  const handleAddClick = () => {
    addStatus();
  };

  const addStatusText = () => (!add ? "Añadir status" : "Ocultar menú");

  return (
    <div className="app">
      {renderFormContainer()}
      <main className='main'>
        <AddStatus onAddClick={handleAddClick} text={addStatusText()} />
        <StatusList />
      </main>
    </div>
  );
}

const mapStateToProps = state => ({
  add: state.addStatus
});

const mapDispatchToProps = dispatch => ({
  addStatus: () => dispatch(addStatus())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
