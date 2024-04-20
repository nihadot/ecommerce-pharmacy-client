

function InputField({type,placeholder,className,onChange,name}) {
    return (
      <div className={className}>
        <input name={name} onChange={onChange} type={type} placeholder={placeholder}  />
      </div>
    )
  }
  
  export default InputField
  