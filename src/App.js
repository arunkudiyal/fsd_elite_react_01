import { Component } from "react";
import Person from "./components/Person/Person";

import Aux from "./components/HOC/Aux";

class App extends Component {
  // State -> A Way to create & manage your own data within the comp.
  // State is just a normal JS OBJECT
  constructor(props) {
    super(props)
    console.log(`[App.js] constructor()`)
    this.state = {
      persons: [
        { id: 'Person-One', name: 'Johnnathan', age: '30' },
        { id: 'Person-Two', name: 'Daniel', age: '27' },
        { id: 'Person-Three', name: 'Tony', age: '32' },
        { id: 'Person-Four', name: 'Max', age: '25' },
        { id: 'Person-Five', name: 'Ted', age: '31' }
      ],
      someOtherStateValue: 'This is an another state value',
      showPersons: false
    }
  }

  static getDerivedStateFromProps(props, state) {
    console.log(`[App.js] getDerivedStateFromProps`)
    console.log(props)
    console.log(state)
    return state;
  }

  componentDidMount() {
    // API calls / DB Connections / Side-Effects
    console.log(`[App.js] componentDidMount()`)
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

  deletePersonHandler = (personIndex) => {
    // If I remove one object from the persons list

    // copy of the state persons
    const personCopy = [...this.state.persons]
    personCopy.splice(personIndex, 1)
    this.setState({ persons: personCopy })
  }

  nameChangedHandler = (event, personId) => {
    const index = this.state.persons.findIndex(p => p.id === personId)
    const person = { ...this.state.persons[index] }
    person.name = event.target.value
    const personsCopy = [...this.state.persons]
    personsCopy[index] = person
    this.setState({ persons: personsCopy })
  }

  render() {
    console.log(`[App.js] render()`)
    // JavaScript
    let persons = (
      <small>The content will be displayed once the button is clicked...</small>
    )
    // let persons = null
    if (this.state.showPersons) {
      // persons variable is now a JSX - ()
      persons = (
        <div className="container" >
          {
            this.state.persons.map((person, index) => {
              return (
                <Person
                  key={person.id}
                  name={person.name}
                  age={person.age}
                  deleted={() => this.deletePersonHandler(index)}
                  changed={(event) => this.nameChangedHandler(event, person.id)} />
              )
            })
          }
          <button onClick={this.switchNameHandler} className='btn btn-primary'>Switch Name</button>
        </div>
      )
    }

    return (
      <Aux>
        <div className="container-fluid">
          <h1 className="page-header">{this.props.appTitle}</h1>
          <button onClick={this.togglePersonHandler} className='btn btn-warning'>Toggle Persons</button> <hr />
        </div>
        <div className="container">
          {persons}
        </div>
        {/* { this.state.showPersons ? JSX : null } */}
      </Aux>
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