import React from 'react';
function MemeViever(props) {
    console.log(props);
    return (<div className={"hgefid"+props.value}>Mon Viewer {props.value}</div>);
}

export default MemeViever;