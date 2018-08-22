import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'John Snow', age: 27},
            {name: 'Daenerys Targaryen', age: 22}
        ],
        otherState : "random"
    };

    switchNameHandler = () => {
        // console.log("was clicked")
        this.setState( {
            persons: [
                {name: 'Nishant', age: 27},
                {name: 'Daenerys Targaryen', age: 22}
                ]
        })
    };

    render() {
        return (
            <div className="App">
                <button onClick={this.switchNameHandler}>Switch Name</button>
                <Person name = {this.state.persons[0].name} age = {this.state.persons[0].age} > I am the king in the north.</Person>
                <Person name = {this.state.persons[1].name} age = {this.state.persons[1].age} > I am the rightful hair to the iron thrown.</Person>
            </div>
        );
    }
}

export default App;
