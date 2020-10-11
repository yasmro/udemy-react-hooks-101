import React, { useContext } from 'react'

import AppContext from '../contexts/AppContext'

import OperationLog from './OperationLog'

const  OperationLogs = () =>{
    // dispatchはEventで直接受け取れるので，いらない
    const { state } = useContext(AppContext)
    
    return(
        <>
            <h4>Logs Table</h4>
            <table className="table table-hover">
                <thead>
                <tr>
                    <th>Description</th>
                    <th>Log Date/Time</th>
                </tr>
                </thead>
                <tbody>
                {
                    state.operationLogs.map( (operationLog, index) => {
                        return(<OperationLog key={index} operationLog={operationLog} />)
                    })
                }
                </tbody>
            </table>
        </>

    )
}

export default OperationLogs