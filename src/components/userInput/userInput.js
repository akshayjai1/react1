import React from 'react';
const UserInput = (props) => {
    return (
        <div className="uInput">
            <input type="text"  onChange={props.changer} value={props.name}/>
            <p>{props.name.length}</p>
        </div>
    );
}
export default UserInput;