import React from 'react';
import logo from './logo.svg';
import './App.css';

import SignUp from './container/signUp'
import LogIn from './container/LogIn';
import Example from './container';
function App () {
  return (
    <div className="App">
      <header className="App-header">
        <Example />
      </header>
    </div>
  );
}

export default App;
