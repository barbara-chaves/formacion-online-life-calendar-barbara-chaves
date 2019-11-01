import React from 'react';
import '../styles/app.css';
import FormContainer from '../containers/FormContainer'
import StatusList from './StatusList'

function App() {
  return (
    <div className="App">
      <FormContainer/>
      <StatusList/>
    </div>
  );
}

export default App;
