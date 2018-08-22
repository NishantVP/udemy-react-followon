import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react App</h1>
          <Person name="John Snow" age="27"> I am the king in the north.</Person>
          <Person name="Daenerys Targaryen " age="22"> I am the rightful hair to the iron thrown.</Person>
      </div>
    );
  }
}

export default App;
