import { Component } from "react";
import Person from "./components/Person";

class App extends Component {
  // State -> A Way to create & manage your own data within the comp.
  // State is just a normal JS OBJECT
  state = {
    persons: [
      { name: 'Johnnathan', age: '30' },
      { name: 'Daniel', age: '27' },
      { name: 'Tony', age: '32' },
      { name: 'Max', age: '25' }
    ],
    someOtherStateValue: 'This is an another state value',
    showPersons: false
  }

  switchNameHandler = () => {
    // this.state.persons[0].name = 'John' -> DONOT DO THIS (directly)
    this.setState({
      persons: [
        { name: 'John', age: '30' },
        { name: 'Daniel', age: '27' },
        { name: 'Tony Kakkar', age: '32 ' }
      ]
    })
  }

  togglePersonHandler = () => {
    const currentShowValue = this.state.showPersons
    this.setState({ showPersons: !currentShowValue })
  }

  render() {
    // JavaScript
    let persons = (
      <small>The content will be displayed once the button is clicked...</small>
    )
    // let persons = null
    if (this.state.showPersons) {
      // persons variable is now a JSX - ()
      persons = (
        <div className="container">
          {this.state.persons.map((person, index) => {
            return (
              <Person
                key={index}
                name={person.name}
                age={person.age} />
            )
          })}
          <button onClick={this.switchNameHandler} className='btn btn-primary'>Switch Name</button>
        </div>
      )
    }

    return (
      <div>
        <div className="container-fluid">
          <h1 className="page-header">Person Management</h1>
          <button onClick={this.togglePersonHandler} className='btn btn-warning'>Toggle Persons</button> <hr />
        </div>
        <div className="container">
          {persons}
        </div>
        {/* { this.state.showPersons ? JSX : null } */}
      </div>
    )
  }
}

export default App;

// import Person from "./components/Person";
// import { useState } from 'react'

// const App = () => {
//   // JavaScript
//   // const [initialState, setInitialState] = useState({
//   //   persons: [
//   //     { name: 'Johnnathan', age: '30' },
//   //     { name: 'Daniel', age: '27' },
//   //     { name: 'Tony', age: '32 ' }
//   //   ],
//   //   someOtherStateValue: 'This is an another state value'
//   // })

//   const [personState, setPersonState] = useState([
//     { name: 'Johnnathan', age: '30' },
//     { name: 'Daniel', age: '27' },
//     { name: 'Tony', age: '32 ' }
//   ])

//   const [otherStateValue, setOtherStateValue] = useState('This is an another state value')

//   const changeNameHandler = () => {
//     setPersonState([
//       { name: 'John', age: '30' },
//       { name: 'Tom', age: '27' },
//       { name: 'Tony Kakkar', age: '32 ' }
//     ])
//   }

//   return (
//     // JSX Expression
//     <div>
//       <div className="container-fluid">
//         <h1 className="page-header">Person Management</h1>
//       </div>
//       <div className="container">
//         <Person name={personState[0].name} age={personState[0].age} />
//         <Person name={personState[1].name} age={personState[1].age} />
//         <Person name={personState[2].name} age={personState[2].age} /> <hr />
//         <button onClick={changeNameHandler} className='btn btn-primary'>Switch Name</button>
//       </div>
//     </div>
//   );
// }

// export default App;