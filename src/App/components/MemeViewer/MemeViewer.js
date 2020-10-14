import React, { useState } from 'react';

function MemeViever(props) {
    const [state, setstate] = useState({ maValue: props.value });
    console.log(props, state);
    return (
        <div className={"hgefid" + props.value}>
            Mon Viewer :: props : {props.value}:: state:{JSON.stringify(state)}
            <hr/>
        </div>);
}

export default MemeViever;