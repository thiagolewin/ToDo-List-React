import './Button.css'
const Button = ({placeholder,className})=> {
    return ( <button className={className}>
    {placeholder}
</button>)
}
export default Button