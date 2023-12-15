function Checkbox({ label, isChecked, handleCheck }) {
  return (
    <label className="flex items-center">
      <input
        className="mr-1.5 w-4 h-4 rounded text-current transition duration-300 focus:ring-green-300 focus:ring-2"
        type="checkbox"
        name={label}
        value={label}
        checked={isChecked}
        onChange={handleCheck}
      />
      {label}
    </label>
  );
}

export default Checkbox;
