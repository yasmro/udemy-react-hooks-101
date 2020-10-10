import React, { useState } from 'react'

import { CREATE_EVENT, DELETE_ALL_EVENTS } from '../actions'

const EventForm = ({state, dispatch}) =>{
    // EventForm.js
    // App.jsに存在するstateインスタンスとeventformのstateインスタンスが違うオブジェクトになっている
    // -> eventformで追加しても，Appのstateには追加されず，表示されない
    // 対応策としてApp.jsにて　<EventForm state={state} dispatch={dispatch} />を行い，stateとdispatchをわたす！
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');

    const addEvent = (e) => {
        e.preventDefault();
        console.log("addevent" + title + body);
        // dispatchに入れるもの：
        // dispatch(action)
        // action = { type:'CREATE_EVENT', eventの中身(title: title, body: body)をformから取得, usestateを使う}
        dispatch({
        type: CREATE_EVENT,
        title,
        body,
        })

        console.log({state})
        setTitle('')
        setBody('')
        
    }

    const deleteAllEvents = (e) => {
        e.preventDefault()
        
        const result = window.confirm('Are you sure to delete all events?')
        if(result){
        dispatch({
            type: DELETE_ALL_EVENTS
        })
        }
    }

    const uncreatable = (title === '' || body === '')

    return(
        <>
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
            <button type="submit" className="btn btn-primary" onClick={addEvent} disabled={uncreatable}>Submit</button>
            <button type="submit" className="btn btn-danger" onClick={deleteAllEvents} disabled={state.length === 0}>Delete All Events</button>
        </form>
        </>

    )
}

export default EventForm