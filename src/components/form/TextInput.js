function TextInput({
  children,
  labelClasses,
  inputClasses,
  type,
  name,
  placeholder,
  value,
  handleChange,
}) {
  return (
    <label className={labelClasses}>
      {children}
      <input
        className={`${inputClasses} border border-gray-100 rounded-lg px-2 py-1 text-current font-normal transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleChange}
      />
    </label>
  );
}

export default TextInput;
