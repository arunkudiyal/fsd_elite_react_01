import './Person.css'

const Person = (props) => {
    console.log(`[Person.js] rendering...`)
    // JavaScript
    // const paraStyles = {
    //     color: 'grey',
    //     fontSize: '20px'
    // }
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

Person.defaultProps = {
    name: 'Default Name Value',
    age: 0
}
export default Person;