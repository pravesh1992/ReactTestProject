import React from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      persons: [
        {
          name: 'Pravesh',
          age: 27
        },
        {
          name: 'Stephanie',
          age: 26
        }
      ],
      otherState: 'Other State'
    };
    this.switchNameHandler = this.switchNameHandler.bind(this);
  }
  switchNameHandler(newName, newAge) {
    console.log("Clicked");
    this.setState({
      persons: [
        {
          name: 'Stephanie',
          age: 26
        },
        {
          name: newName,
          age: newAge
        }
      ],
      otherState: 'Updated value'
    });
  }

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        {
          name: 'Stephanie',
          age: 26
        },
        {
          name: event.target.value,
          age: 26
        }
      ],
      otherState: 'Updated value'
    });
  }

  render() {
    //<button onClick={this.switchNameHandler.bind(this, 'Rajesh', 54)}>Switch Name</button>
    const buttonStyle = {
      backgroundCOlor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    }
    return (
      <div className="App">
        <h1>Hello, I am Pravesh</h1>
        <p>This is really working.</p>

        <button style={buttonStyle} onClick={() => this.switchNameHandler('Rajesh', 54)}>Switch Name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
          click={this.switchNameHandler.bind(this, 'Naveen', 22)}
          changed={this.nameChangedHandler}
        />
        <p>Other State Value:{this.state.otherState}</p>
      </div>
    );
  }
}

export default App;
