const Button = ({text,functionality,color})=> {
    return (
        <>
        <button onClick={functionality}className={`w-20 h-20 ${color}`}> {text}</button>
       
        </>
    )
}

export default Button