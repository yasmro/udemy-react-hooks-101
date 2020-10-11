import React, { useContext } from 'react';

import AppContext from '../contexts/AppContext'

import { DELETE_EVENT, ADD_OPERATION_LOG } from '../actions'

import { timeCurrentIso8601 } from '../utils'


const Event = ({ event }) => {
    // App -> Contextに一旦集め -> Eventに直接
    const { dispatch } = useContext(AppContext)

    const handleClickDeleteButton = () => {

        const result = window.confirm(`Are you sure to delete event ID:${event.id}?`)
        if(result){
          dispatch({
            type: DELETE_EVENT,
            id: event.id
          })

          dispatch({
            type: ADD_OPERATION_LOG,
            description: `Deleted Event: ID #${event.id}`,
            operatedAt: timeCurrentIso8601()
          })

        }

      }

      return(
        <tr>
          <td>{event.id}</td>
          <td>{event.title}</td>
          <td>{event.body}</td>
          <td><button type="button" className="btn btn-danger" onClick={handleClickDeleteButton}>Delete</button></td>
        </tr>
      )
}

export default Event