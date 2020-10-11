import React, { useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers'

import AppContext from '../contexts/AppContext'

import EventForm from './EventForm'
import Events from './Events'

const App = () => {
  // {events: [], logs:[]}
  const initialState = {
    events: [],
    operationLogs: []
  };
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <>
      {/*childコンポーネントに渡すべきprop = stateとdispatchをわたす*/}
      <AppContext.Provider value={{state, dispatch}}>
        <div className="container-fluid">
          <h1>Hello</h1>
          <EventForm  />
          <Events  />
          
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
