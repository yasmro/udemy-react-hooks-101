import React, { useContext } from 'react'

import Event from './Event'
import AppContext from '../contexts/AppContext'

const Events = () =>{
    // dispatchはEventで直接受け取れるので，いらない
    const { state } = useContext(AppContext)
    
    return(
        <>
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
                    state.events.map( (event, index) => {
                    return(<Event key={index} event={event} />)
                    })
                }
                </tbody>
            </table>
        </>

    )
}

export default Events