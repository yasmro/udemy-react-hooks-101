import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers'

import EventForm from './EventForm'
import Events from './Events'

const App = () => {
  const initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <div className="container-fluid">
      <h1>Hello</h1>
      <EventForm state={state} dispatch={dispatch} />
      <Events state={state} dispatch={dispatch} />
      
    </div>
  );
}

export default App;
