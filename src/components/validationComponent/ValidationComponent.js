import React from 'react';
const ValidationComponent = (props) => {
    let k = props.sLen > 5?
            <div> Text too Long</div>:<div> Text Too Short </div>
    return k;
    
}
export default ValidationComponent;