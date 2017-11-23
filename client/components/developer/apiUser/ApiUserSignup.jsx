import React from 'react';
import axios from 'axios';

class ApiUserSignup extends React.Component {
  constructor() {
    super();
    this.state = {
    };
  }

  handleSignup(event) {
    event.preventDefault();
    console.log('clicked')
    axios.post('/api/signup', {
      email: 'MIzupfw69ZhneSx0bLvw',
      password: 'secret3'
    })
    .then((res) => {
      console.log(res.data)
    })
  }secret

  render() {
    return (
      <div >
        <form>
          <input type="email"/>
          <input type="password"/>
          <button onClick={this.handleSignup}>Signup</button>
        </form>
      </div>
    );
  }
}

export default ApiUserSignup;