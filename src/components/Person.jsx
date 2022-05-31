import './Person.css'

const Person = (props) => {
    // JavaScript
    // const paraStyles = {
    //     color: 'grey',
    //     fontSize: '20px'
    // }
    return (
        // <p id='my-para' style={paraStyles}>Hello, I am {props.name} & I am {props.age} years old.</p>
        <div>
            <p id='my-para'>Hello, I am {props.name} & I am {props.age} years old.</p>
            <input className='form-control' type="text" placeholder='Enter a new name...' /> <hr />
        </div>
    )
}

Person.defaultProps = {
    name: 'Default Name Value',
    age: 0
}
export default Person;