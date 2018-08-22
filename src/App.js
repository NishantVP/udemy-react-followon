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

        return (
            <div className="App">
                <h1> Hi I am React App!</h1>
                <button
                    style={style}
                    onClick={this.togglePersonsHandler}>Show / Hide
                </button>
                { this.state.showPersons ?
                    <div>
                        <Person
                            name={this.state.persons[0].name}
                            age={this.state.persons[0].age}
                            click={this.switchNameHandler.bind(this, 'Rob')}
                            changed={this.changeNameHandler}> I am the king in the north. </Person>
                        <Person
                            name={this.state.persons[1].name}
                            age={this.state.persons[1].age}
                            click={this.switchNameHandler.bind(this, 'Ned')}> I am the rightful hair to the iron
                            thrown. </Person>
                    </div> : null
                }
            </div>
        );
    }
}

export default App;
