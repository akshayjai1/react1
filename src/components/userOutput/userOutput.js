import React from 'react';
const UserOutput = (props) => {
    return (    
        <div className="uOutput">
        <p>This is paragraph 1</p>
        <p>This is paragraph 2 showing passed userName {props.username}</p>
        </div>
    );
}
export default  UserOutput