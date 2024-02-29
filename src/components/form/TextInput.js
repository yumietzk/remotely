import { useEffect, useState } from "react";

function TextInput({
  children,
  labelClasses,
  inputClasses,
  field,
  orgValue,
  handleChange,
}) {
  const [value, setValue] = useState("");

  const { type, name, placeholder, required } = field;

  useEffect(() => {
    if (orgValue) setValue(orgValue);
  }, [orgValue]);

  function handleClick(e) {
    setValue(e.target.value);
    handleChange(e.target.value);
  }

  return (
    <label className={labelClasses}>
      {children}
      {required && "*"}
      <input
        className={`${inputClasses} border border-gray-100 rounded-lg px-2 py-1 text-sm lg:text-bsse font-normal transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        required={required || false}
        onChange={handleClick}
      />
    </label>
  );
}

export default TextInput;
