import React from 'react';
import logo from './logo.svg';
import './App.css';
import { displayRoutes } from './history/changePages'
import PurchaseItems from './container/purchaseItems'
function App () {
  return (
    <div className="App">
      <header className="App-header">
        {displayRoutes()}
      </header>
      {/* <PurchaseItems/> */}
    </div>
  );
}

export default App;
