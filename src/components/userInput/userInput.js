import React from 'react';
const UserInput = (props) => {
    return (
        <input type="text" className="uInput" onChange={props.changer} value={props.name}/>
    );
}
export default UserInput;