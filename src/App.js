import { Component } from "react";
import Person from "./components/Person";

class App extends Component {
  // State -> A Way to create & manage your own data within the comp.
  // State is just a normal JS OBJECT
  state = {
    persons: [
      { name: 'Johnnathan', age: '30' },
      { name: 'Daniel', age: '27' },
      { name: 'Tony', age: '32 ' }
    ],
    someOtherStateValue: 'This is an another state value'
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

  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1 className="page-header">Person Management</h1>
        </div>
        <div className="container">
          <Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          <Person name={this.state.persons[1].name} age={this.state.persons[1].age} />
          <Person name={this.state.persons[2].name} age={this.state.persons[2].age} /> <hr />
          <button onClick={this.switchNameHandler} className='btn btn-primary'>Switch Name</button>
        </div>
      </div>
    )
  }
}

export default App;

// const App = () => {
//   // JavaScript
//   return (
//     // JSX Expression
//     <div>
//       <div className="container-fluid">
//         <h1 className="page-header">Person Management Application</h1>
//       </div>
//       <div className="container"></div>
//     </div>
//   );
// }

// export default App;