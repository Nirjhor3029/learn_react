import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {

  state = {
    person: [
      { name: "Sazzad", age: 25 },
      { name: "Nirjhor", age: 25 },
      { name: "Hossain", age: 25 },
      { name: "Rusty", age: 25 },
    ]
  }

  switchNameHandler = () => {
    console.log("Was Clicked !!");
    //Don't do this: this.state.person[0].name = "Sazzad Hossain Nirjhor";
    this.setState({
      person: [
        { name: "Nir", age: 25 },
        { name: "Nirjhor", age: 25 },
        { name: "Hossain", age: 25 },
        { name: "Rusty", age: 25 },
      ]
    })
  }
  //  switchNameHandler(params) {
  //   console.log("Was Clicked !!");
  // }

  render() {
    return (
      <div className="App">
        <h1 >Hi, I'a React App</h1>
        <div>
          <p>This is really Working !!</p>
          <button onClick={this.switchNameHandler}>Switch Name</button>
          <Person name={this.state.person[0].name} />
          <Person name={this.state.person[1].name} />
          <Person name={this.state.person[2].name} />
          <Person name={this.state.person[3].name}> My Hobbies: Painting </Person>
        </div>
      </div>
    );

  }
}

export default App;

