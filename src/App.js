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

    switchNameHandler = (newName) => {
        this.setState( {
            persons: [
                {name: newName, age: 27},
                {name: 'Daenerys Targaryen', age: 22}
                ]
        })
    };

    changeNameHandler = (event) => {
        this.setState( {
            persons: [
                {name: event.target.value, age: 27},
                {name: 'Daenerys Targaryen', age: 22}
            ]
        })
    };

    render() {
        return (
            <div className="App">
                <button onClick={() => this.switchNameHandler('Nishant')}>Switch Name</button>
                <Person
                    name = {this.state.persons[0].name}
                    age = {this.state.persons[0].age}
                    click = {this.switchNameHandler.bind(this, 'Rob')}
                    changed = {this.changeNameHandler}
                > I am the king in the north. </Person>
                <Person
                    name = {this.state.persons[1].name}
                    age = {this.state.persons[1].age}
                    click = {this.switchNameHandler.bind(this, 'Ned')}
                > I am the rightful hair to the iron thrown. </Person>
            </div>
        );
    }
}

export default App;
