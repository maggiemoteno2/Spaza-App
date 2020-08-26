import React from 'react';
import SignUp from './signUp'
import LogIn from './LogIn'


class DirectPages extends React.Component {
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

export default DirectPages