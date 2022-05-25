import './Person.css'

const Person = (props) => {
    // JavaScript
    // const paraStyles = {
    //     color: 'grey',
    //     fontSize: '20px'
    // }
    return (
        // <p id='my-para' style={paraStyles}>Hello, I am {props.name} & I am {props.age} years old.</p>
        <p id='my-para'>Hello, I am {props.name} & I am {props.age} years old.</p>
    )
}

Person.defaultProps = {
    name: 'Default Name Value',
    age: 0
}
export default Person;