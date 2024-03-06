function TextInput({
  children,
  labelClasses,
  inputClasses,
  field,
  orgValue,
  handleChange,
}) {
  const { type, name, placeholder, required } = field;

  return (
    <label className={labelClasses}>
      {children}
      {required && "*"}
      <input
        className={`${inputClasses} border border-gray-100 rounded-lg px-2 py-1 text-sm lg:text-bsse font-normal transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={orgValue}
        // required={required || false}
        onChange={(e) => handleChange(name, e.target.value)}
      />
    </label>
  );
}

export default TextInput;
