const Paragraph = (props) => {
    console.log(props)
    return (
        <p className='lead' > {props.text} </p>
    )
}

// Default Props
// NameOfTheComponent.defaultProps = {  }
Paragraph.defaultProps = {
    text: 'Default Text'
}

export default Paragraph;