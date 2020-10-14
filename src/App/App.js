import React from 'react';
import './App.css';
import MemeViewer from './components/MemeViewer/MemeViewer';

const abc="Ma valeur";
function App() {
  return (
      <div className="App">
        <MemeViewer value={abc} />
      </div>
  );
}

export default App;
