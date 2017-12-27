import React from 'react';
import './charComponent.css'

const CharComponent = (props) => {
    return <div className="charComponent">
                {props.letters.split("").map(e=>{
                    return <div className="letter">{e}</div>
                })}
            </div>
}

export default CharComponent;