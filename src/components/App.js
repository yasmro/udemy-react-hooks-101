import React, { useReducer, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

import reducer from '../reducers'

import Event from './Event'

const App = () => {
  const initialState = [];
  const [state, dispatch] = useReducer(reducer, initialState);
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const addEvent = (e) => {
    e.preventDefault();
    console.log("addevent" + title + body);
    // dispatchに入れるもの：
    // dispatch(action)
    // action = { type:'CREATE_EVENT', eventの中身(title: title, body: body)をformから取得, usestateを使う}
    dispatch({
      type: 'CREATE_EVENT',
      title,
      body,
    })

    console.log({state})
    setTitle('')
    setBody('')
    
  }

  return (
    <div className="container-fluid">
      <h1>Hello</h1>
      <h4>Create Event</h4>
      <form>
        <div className="form-group">
          <label htmlFor="formEventTitle">Title</label>
          <input type="text" className="form-control" id="formEventTitle" placeholder="Title" value={title} onChange={e => setTitle(e.target.value)} />
        </div>
        <div className="form-group">
          <label htmlFor="formEventBody">Body</label>
          <textarea className="form-control" id="formEventBody" placeholder="Body" value={body} onChange={e => setBody(e.target.value)} />
        </div>
        <button type="submit" className="btn btn-primary" onClick={addEvent}>Submit</button>
        <button type="submit" className="btn btn-danger">Delete All Events</button>
      </form>

      <h4>Events Table</h4>
      <table className="table table-hover">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Body</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            state.map( (event, index) => {
              return(<Event key={index} event={event} dispatch={dispatch} />)
            })
          }
        </tbody>

      </table>
    </div>
  );
}

export default App;
