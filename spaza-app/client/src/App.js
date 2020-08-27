import React from 'react';
import logo from './logo.svg';
import './App.css';
import { displayRoutes } from './history/changePages'
function App () {
  return (
    <div className="App">
      <header className="App-header">
        {displayRoutes()}
      </header>
     
    </div>
  );
}

export default App;
