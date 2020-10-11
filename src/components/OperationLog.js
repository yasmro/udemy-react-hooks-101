import React, { useContext } from 'react';

const OperationLog = ({ operationLog }) => {
    // App -> Contextに一旦集め -> Eventに直接


    return(
        <tr>
            <td>{operationLog.description}</td>
            <td>{operationLog.operatedAt}</td>
        </tr>
    )
}

export default OperationLog