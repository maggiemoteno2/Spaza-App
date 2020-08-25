import React from 'react';
const { default: SignUp } = require("./signUp");
const { default: LogIn } = require("./LogIn");


class Example extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      condition: ''
    };
  }

  handleCondition = (value) => {
    this.setState({ condition: value })
  }
  render () {
    return (
      <div>
        <p>You clicked {this.state.count} times</p>
        <button onClick={() => this.handleCondition('signup')}>
          Sign Up
        </button>
        <button onClick={() => this.handleCondition('login')}>
          Log In
        </button>
        {
          this.state.condition === 'signup' && <SignUp />
        }
        {
          this.state.condition === 'login' && <LogIn />
        }
      </div>
    );
  }
}

export default Example