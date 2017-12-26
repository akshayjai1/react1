import React from 'react';
const UserInput = (props) => {
    return (
        <input type="text" class="uInput" onChange={props.changer} value={props.name}/>
    );
}
export default UserInput;