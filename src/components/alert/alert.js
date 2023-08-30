const Alert = ({message, type}) => {
    return (
        <p className={`alert alert-${type} text_type_main-medium`}>
            {message}
        </p>
    )
}

export default Alert;