import { useEffect, useState } from "react";

function TextInput({
  children,
  labelClasses,
  inputClasses,
  type,
  name,
  placeholder,
  orgValue,
  // value,
  handleChange,
}) {
  const [value, setValue] = useState("");

  // 💡ここ再度見直す
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
      <input
        className={`${inputClasses} border border-gray-100 rounded-lg px-2 py-1 text-current font-normal transition duration-300 focus:outline-none focus:ring-2 focus:ring-accent focus:ring-offset-2`}
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleClick}
      />
    </label>
  );
}

export default TextInput;
