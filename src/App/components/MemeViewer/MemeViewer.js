import React, { useState } from 'react';
import '../../../../node_modules/bootstrap/dist/css/bootstrap.css';
function MemeViever(props) {
    const [state, setstate] = useState({valeur2:"zekjdshcs", maValue: props.value });
    console.log(props, state);
    return (
        <div className={"hgefid" + props.value}>
            Mon Viewer :: props : {props.value}:: state:{JSON.stringify(state)}
            <br/>
            <button className="btn btn-primary" 
                    onClick={function(){setstate({...state,maValue:"nouvelle valeur"})}}>edit state</button>
            <hr/>
        </div>);
}

export default MemeViever;