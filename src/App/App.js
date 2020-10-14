import React from 'react';
import './App.css';
import MemeEditor from './components/MemeEditor/MemeEditor';
import MemeViewer from './components/MemeViewer/MemeViewer';

let abc="Ma valeur";
function App() {
  return (
      <div className="App">
        <MemeViewer value={abc} />
       <MemeEditor />
      </div>
  );
}

export default App;
