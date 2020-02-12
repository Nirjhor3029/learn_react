import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 >Hi, I'a React App</h1>
        <div>
          <p>This is really Working !!</p>
          <Person name="Sazzad" />
          <Person name="Hossain" />
          <Person name="Nirjhor" />
          <Person name="Rusty"> My Hobbies: Painting </Person>
        </div>
      </div>
    );

  }
}

export default App;

