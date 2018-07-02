import React, { Component } from 'react';
import UserInput from './UserInput/UserInput'
import UserOutput from './UserOutput/UserOutput';
import './App.css';
import './UserInput/UserInput.css';
import './UserOutput/UserOutput.css';

class App extends Component {
  state = {
    person: {
      name: "Nobody"
    }
  }

  nameChangeHandler = (event) => {
    this.setState({ 
      person: {
        name: event.target.value
      }
    })
  }

  render() {
    return (
      <div className="App">
        <UserInput 
          name={this.state.person.name} 
          changed={this.nameChangeHandler}/>
        <UserOutput name={this.state.person.name} />
        <UserOutput name={this.state.person.name} />
        <UserOutput name={this.state.person.name} />
      </div>
    );
  }
}

export default App;
