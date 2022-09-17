
const Form = ({ onSubmit, children, title }) => {
    return (
        <form onSubmit={onSubmit}>
            <h2>{title}</h2>
            <h2>{children}</h2>
            <div>
                <input type='submit' value='Login'></input>
            </div>
        </form>
    )
}

export default Form
