import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
    state = {
        persons: [
            {name: 'John Snow', age: 27},
            {name: 'Daenerys Targaryen', age: 22}
        ],
        otherState : "random",
        showPersons : false
    };

    switchNameHandler = (newName) => {
        this.setState( {
            persons: [
                {name: newName, age: 27},
                {name: 'Daenerys Targaryen', age: 22}
            ]
        })
    };

    togglePersonsHandler = () => {
        const doesShow = this.state.showPersons;
        this.setState ({
            showPersons: !doesShow
        })
    };

    changeNameHandler = (event) => {
        this.setState({
            persons: [
                {name: event.target.value, age: 27},
                {name: 'Daenerys Targaryen', age: 22}
            ]
        })
    };

    render() {

        const style = {
            backgroundColor: 'white',
            font: 'inherit',
            border: '1px solid blue',
            padding: '8px',
            cursor: 'pointer'
        };

        let persons = null;

        if (this.state.showPersons) {
            persons = (
                <div>
                    {this.state.persons.map(person => {
                        return <Person
                            name={person.name}
                            age = {person.age}
                        />
                    })}
                </div>
            );
        }

        return (
            <div className="App">
                <h1> Hi I am React App!</h1>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Show / Hide
                </button>
                {persons}
            </div>
        );
    }
}

export default App;
