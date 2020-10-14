import React from 'react';
import './App.css';
import MemeViewer from './components/MemeViewer/MemeViewer';

let abc="Ma valeur";
function App() {
  return (
      <div className="App">
        <MemeViewer value={abc} />
        la valeur est : {abc}
      </div>
  );
}

export default App;
