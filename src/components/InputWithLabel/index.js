const InputWithLabel = ({id, value, onChange, type="text", children}) => {
    // do something here for the sake of learning
    
    return (
      <>
        <label htmlFor={id} style={{ fontSize: '1.5em'}}>{children}</label>
        <input type={type} id={id} onChange={onChange} value={value} className="input"/>
      </>
    )
  }

export default InputWithLabel;