import React from 'react';
import logo from './logo.svg';
import './App.css';
import LogIn from './container/logIn'
import SignUp from './container/signUp'
function App() {
  return (
    <div className="App">
      <header className="App-header">
       <LogIn/>
       <SignUp/>
      </header>
    </div>
  );
}

export default App;
