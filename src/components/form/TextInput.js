function TextInput({
  children,
  labelClasses,
  inputClasses,
  inputRef,
  type,
  placeholder,
  value,
  handleChange,
}) {
  return (
    <>
      {children}

      <label className={labelClasses}>
        <input
          className={`${inputClasses} transition duration-300 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-green-100 focus:ring-accent`}
          ref={inputRef}
          type={type}
          placeholder={placeholder}
          value={value}
          onChange={handleChange}
        />
      </label>
    </>
  );
}

export default TextInput;
