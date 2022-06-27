// import { PureComponent } from 'react'
// import './Person.css'

// class Person extends PureComponent {
//     constructor(props) {
//         super(props)
//         this.state = {
//             sampleState: 'This is a Sample State'
//         }
//     }

//     static getDerivedStateFromProps(props, state) {
//         console.log(`[Person.js] getDerivedStateFromProps()`)
//         return state
//     }

//     // shouldComponentUpdate(newProps, newState) {
//     //     if(this.props.name !== newProps.name || this.props.name !== newProps.name || this.props.name !== newProps.name || this.props.name !== newProps.name) {
//     //         return true
//     //     } else {
//     //         return false
//     //     }
//     // }

//     getSnapshotBeforeUpdate() {
//         console.log(`[Person.js] getSnapshotBeforeUpdate()`)
//         return null
//     }

//     componentDidUpdate() {
//         console.log(`[Person.js] componentDidUpdate()`)
//     }

//     checkInfo = () => {
//         this.setState({sampleState: 'Updated Sample State'})
//     }

//     render() {
//         console.log(`[Person.js] render()`)
//         return (
//             // <p id='my-para' style={paraStyles}>Hello, I am {props.name} & I am {props.age} years old.</p>
//             <div>
//                 <p id='my-para'>Hello, I am {this.props.name} & I am {this.props.age} years old.</p>
//                 <div style={{ display: 'flex' }}>
//                     <input onChange={this.props.changed} className='form-control' type="text" placeholder='Enter a new name...' /> <hr />
//                     <button onClick={this.props.deleted} className='btn btn-danger'>Delete</button>
//                     <button onClick={this.checkInfo} className='btn btn-info'>Check...</button>
//                 </div>
//             </div>
//         )
//     }
// }
// export default Person;

import './Person.css'
import { useEffect } from 'react'

import React from 'react'

const Person = (props) => {

    useEffect( () => {
        alert(`[Person.js] useEffect()`)
        console.log(`[Person.js] useEffect()`)
    }, [props.name] )

  return (
    // <p id='my-para' style={paraStyles}>Hello, I am {props.name} & I am {props.age} years old.</p>
    <div>
        <p id='my-para'>Hello, I am {props.name} & I am {props.age} years old.</p>
        <div style={{ display: 'flex' }}>
            <input onChange={props.changed} className='form-control' type="text" placeholder='Enter a new name...' /> <hr />
            <button onClick={props.deleted} className='btn btn-danger'>Delete</button>
        </div>
    </div>
  )
}
export default Person;