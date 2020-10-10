import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers'

import AppContext from '../contexts/AppContext'

import EventForm from './EventForm'
import Events from './Events'

const App = () => {
  const initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      <AppContext.Provider value={'Hello, this is provider.'}>
        <div className="container-fluid">
          <h1>Hello</h1>
          <EventForm state={state} dispatch={dispatch} />
          <Events state={state} dispatch={dispatch} />
          
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
