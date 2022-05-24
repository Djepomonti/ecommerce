const Input = ({ children, label, id, className, type="text", placeholder = "" }) => {
    return(
        <div className={className}>
        <label for={id}>{label}</label>
        <input type={type} className="form-control" id={id} placeholder={placeholder} />
        <div className="invalid-feedback">
        {children}
        </div>
      </div>
    )
}
export default Input