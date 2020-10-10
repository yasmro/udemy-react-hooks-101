import React, { useState } from 'react'

import Event from './Event'

const Events = ({state, dispatch}) =>{

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
                    state.map( (event, index) => {
                    return(<Event key={index} event={event} dispatch={dispatch} />)
                    })
                }
                </tbody>
            </table>
        </>

    )
}

export default Events