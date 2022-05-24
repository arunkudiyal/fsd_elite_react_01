import { Component } from "react";
import Paragraph from './components/Paragraph'
import Button from "./components/Button";

class App extends Component {
  // JavaScript
  render() {
    return (
      <div>
        <div className="container-fluid">
          <h1 className="page-header">Person Management</h1>
        </div>
        <div className="container">
          <Paragraph text='Paragraph - 1' color='red' props1={1} />
          <Paragraph text='Paragraph - 2' color='blue' />
          <Paragraph color='green' />
          <Paragraph color='orange' text='Paragraph - 3'>This is a Paragraph Componenet</Paragraph>
          <Button text='Click Me' contextualClass='success' />
          <Button />
        </div>
        <div></div>
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