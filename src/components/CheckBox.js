import { useState } from "react";

function Checkbox({ label, callback }) {
  const [isChecked, setIsChecked] = useState(false);

  function handleCheck() {
    setIsChecked((isChecked) => !isChecked);
    callback(label);
  }

  return (
    <div className="flex items-center">
      <input
        className="mr-3 w-4 h-4 rounded text-black focus:ring-black focus:ring-1"
        type="checkbox"
        name={label}
        value={isChecked}
        onChange={handleCheck}
      />
      <label>{label}</label>
    </div>
  );
}

export default Checkbox;
