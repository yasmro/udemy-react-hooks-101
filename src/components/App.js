import React, { useEffect, useReducer } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers'

import AppContext from '../contexts/AppContext'

import EventForm from './EventForm'
import Events from './Events'
import OperationLogs from './OperationLogs'

const LS_APP_KEY = 'appWithRedux'

const App = () => {
  // LSの値を取得
  const appState = localStorage.getItem(LS_APP_KEY)

  // LSがNULLなら空を返す
  const initialState = appState ? JSON.parse(appState) : {
    events: [],
    operationLogs: []
  };

  const [state, dispatch] = useReducer(reducer, initialState);

  // stateが変わったときにローカルストレージ にデータ保存
  useEffect(() => {
    localStorage.setItem(LS_APP_KEY, JSON.stringify(state))
  }, [state])

  return (
    <>
      {/*childコンポーネントに渡すべきprop = stateとdispatchをわたす*/}
      <AppContext.Provider value={{state, dispatch}}>
        <div className="container-fluid">
          <h1>Hello</h1>
          <EventForm  />
          <Events  />
          <OperationLogs  />
        </div>
      </AppContext.Provider>
    </>
  );
}

export default App;
