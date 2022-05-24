const Button = (props) => {
    const buttonClass = `btn btn-${props.contextualClass}`
    return (
        <button className={buttonClass}> {props.text} </button>
    )
}

Button.defaultProps = {
    text: 'Default Button',
    contextualClass: 'primary'
}
export default Button;