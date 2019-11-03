import React from 'react';
import '../styles/app.scss';
import FormContainer from '../containers/FormContainer'
import StatusList from './StatusList'

function App() {
  return (
    <div className="app">
      <FormContainer/>
      <StatusList/>
    </div>
  );
}

export default App;
